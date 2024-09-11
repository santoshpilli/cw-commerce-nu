'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { BreadCrumb } from "./breadcrumb";
import { MenuBar } from "./menubar";
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut, getIdToken, getIdTokenResult ,User  } from 'firebase/auth';
import app from '../../../firebase';
import axios from 'axios';
import {useCart} from '../../../context/cartContext'

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const auth = getAuth(app);
  const { cartItems, fetchCartItems } = useCart();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setFirebaseUser(user);
        const token = await getIdToken(user);
        const restoken = await getIdTokenResult(user)
        console.log("Firebase ID Token:", token);
        // console.log("Firebase ID resToken:", restoken);
        const userId = restoken.claims.user_id;
        document.cookie = `userId=${userId}`
        await handleUserCart()
      } else {
        setFirebaseUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleUserCart = async () => {
    try {
      const response = await axios.post('/api/managecarts');

      const data = await response.data;

      if (response.status === 200) {
        console.log('Cart merged successfully:', data.cart);
        // Handle the merged cart data (e.g., update the UI)
      } else {
        console.error('Error merging carts:', data.message);
      }
    } catch (error) {
      console.error('Error merging carts:', error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const handleFirebaseLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST', // Optional for consistency, not required for deletion
        body: JSON.stringify({ cookieName: 'cartId' }),
      });

      const data = await response.json();
      console.log(data)
      await firebaseSignOut(auth);
      router.push('/signin');
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST', // Optional for consistency, not required for deletion
        body: JSON.stringify({ cookieNames: ['cartId', 'userId'] }),
      });

      const data = await response.json();
      console.log(data)
      nextAuthSignOut()
    } catch (err) {
      console.log(err, 'google logout')
    }
  }

  const handleSearch = (event: any) => {
    event.preventDefault();
    router.push(`/products?search=${searchQuery}`);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  const renderAuthButtons = () => (
    <div className='flex gap-5'>
      <Link href={'/register'}>
        <button>Signup</button>
      </Link>
      <Link href={'/signin'}>
        <button>Login</button>
      </Link>
    </div>
  );

  const renderUserControls = () => (
    <div className="flex gap-5">

      <Link href='/profile'>
        <Image src="/images/tdesign_user.png" className="w-5 h-5 hover:cursor-pointer" height={20} width={20} alt='' />
      </Link>
      <Link href='/wishlist'>
        <Image src='/images/ph_heart.png' className="w-5 h-5 hover:cursor-pointer" height={20} width={20} alt='' />
      </Link>

    </div>
  );

  return (
    <>
      <div className="flex justify-evenly border-b border-solid py-4 items-center border-gray-300">
        <div className="heading-color font-black">
          <Link href="/" className="ff-inter text-sm md:text-lg lg:text-2xl heading-color font-black">
            INSTABUYS
          </Link>
        </div>
        <div className="flex justify-self-center">
          <label className="input input-bordered focus-within:outline-none flex items-center gap-2 w-[10rem] md:w-[12rem] lg:w-[20rem] rounded-l-lg rounded-none">
            <input
              type="text"
              className="grow text-xs md:text-base"
              placeholder="Enter Your Search Key"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleKeyPress}
            />
          </label>
          <button
            type="submit"
            className="bg-custom-color-btn font-light text-white px-2 text-xs md:text-base h-12 text-center rounded-r-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {pathname !== '/register' && pathname !== '/signin' && session && (
          <>
            <p style={{ marginBottom: "10px" }}>
              Welcome, {session?.user?.name?.split(' ')[0] ?? session?.user?.email}
            </p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        {firebaseUser ? (
          <button onClick={handleFirebaseLogout}>Logout</button>
        ) : (
          !session && renderAuthButtons()
        )}
        <div className='flex gap-5'>
          <div className="flex">
            <Image src='/images/tabler_world.png' className="w-5 h-5" height={20} width={20} alt='' />
            <Image src='/images/mingcute_down-line.png ' className="w-4 h-4 mt-1" height={20} width={20} alt='' />
          </div>
          {pathname !== '/register' && pathname !== '/signin' && session && renderUserControls()}
          {pathname !== '/register' && pathname !== '/signin' && firebaseUser && renderUserControls()}
          <div className='relative'>

            <Link href='/cart'>
              <Image src="/images/bx_cart1.png" className="w-5 h-5 hover:cursor-pointer" height={20} width={20} alt='' />
            </Link>
            <span className=" absolute top-[-12px] right-[-12px] inline-flex items-center rounded-full bg-red-900 px-[6px] py-[3px] text-xs font-medium text-white ">
              {cartItems}
            </span>
          </div>
        </div>
      </div>

      {pathname !== '/register' && pathname !== '/signin' && (
        <>
          <MenuBar />
          <BreadCrumb
            homeElement={'Home'}
            separator={<span> &gt; </span>}
            containerClasses='flex py-3'
            listClasses='hover:underline mx-1 font-bold'
            capitalizeLinks
          />
        </>
      )}
    </>
  );
}
