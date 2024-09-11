'use client'
import { FormEvent, useState,useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Login from './login';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import app from '../../../firebase';

const SignIn = () => {
    const router = useRouter();
    const auth=getAuth(app)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                router.push('/')
            }
        })
    },[auth,router])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignIn = async (e:FormEvent) => {
        e.preventDefault(); 

        console.log('started')
        const result = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password,
          });
        console.log('in middle')

        if (!result?.ok) {
            console.log('Account not found');
            console.log({ result });
        } else {
            router.push('/');
            console.log('Account logged in successfully:', formData.email);
        }
        console.log('finished')
    };

    return (
        <>
            <div className='flex justify-center items-center pb-4'>
                <div>
                <div>
            <div className="pb-1 flex justify-center items-center bg-custom-color-heading ff-inter text-2xl font-semibold leading-9">Log in</div>
            <div className="pb-12 flex justify-center items-center bg-custom-color-heading ff-inter font-normal text-xs  md:text-lg">Please Login Using Account Details Below</div>
            <div className="flex space-x-8 pb-12 sm:flex justify-center items-center">
                <button className="btn bg-custom-color-facebook-icon lg:h-20 lg:w-40 sm:w-24 md:w-24" onClick={() => signIn('facebook')}>
                   <Image  className="h-6 w-6" src='/images/facebook_svgrepo.com.png' height={20} width={20} alt=''></Image>
                    {/* <img className="h-6 w-6" src='images/facebook_svgrepo.com.png'></img> */}
                    <span className="ff-inter font-semibold hidden lg:inline text-white">Login with Facebook</span>
                </button>
                <button className="border-custom btn bg-white lg:h-20 lg:w-40 sm:w-24 md:w-24" onClick={() => signIn('google')}>
                   <Image className="h-6 w-6" src='/images/google-color_svgrepo.com.png' height={20} width={20} alt=''></Image>
                    {/* <img className="h-6 w-6" src='images/google-color_svgrepo.com.png'></img> */}
                    <span className="ff-inter color-google-btn font-semibold hidden lg:inline">Login with Google</span>
                </button>
            </div>
            <div className="pb-7">
                <div className="flex items-center">
                    <div className="flex-grow bg-gray-400 h-px"></div>
                    <span className="px-3 text-gray-500">OR</span>
                    <div className="flex-grow bg-gray-400 h-px"></div>
                </div>
            </div>
            <Login/>
            {/* {session && <MyModal/>} */}
            <form onSubmit={handleSignIn} >
            <div className="pb-5">
                <label className="form-control pb-6">
                    <div className="label">
                        <span className="label-text ff-inter font-medium text-base">Email address</span>
                    </div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-bordered flex items-stretch" />
                </label>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text ff-inter font-medium text-base">Password</span>
                        
                    </div>
                    <label className="input input-bordered">
                        <div className="float-right mt-3">
                            <Image className="w-6 h-6" src='/images/ph_eye-light.png' height={20} width={20} alt=''></Image>
                            {/* <img className="w-6 h-6" src='images/ph_eye-light.png'></img> */}
                            </div>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required className="flex items-stretch" />
                        
                    </label>
                </label>
            </div>
            <div className="pb-3">
                <button className="btn w-full bg-custom-login-btn ff-inter text-white text-lg font-medium">Login</button>
            </div>
            </form>
            <div className="grid grid-flow-col">
                {/* <div className="flex pb-6">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <span className="color-remember-checkbox label-text pl-2 ff-inter font-light">Remember me</span>
                    </label>
                </div> */}
                <div>
                    <span className="float-right ff-inter font-normal text-sm text-black pt-2">Forgot password ?</span>
                </div>
            </div>
            
            <div className="ff-inter font-medium text-sm flex justify-center items-center">
                Don`t have an account ? <Link href={'/register'}>Create Account</Link>
            </div>
        </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

