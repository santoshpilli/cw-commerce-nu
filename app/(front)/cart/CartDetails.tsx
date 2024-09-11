'use client'

// import useSWR from 'swr';
import { useEffect, useState } from 'react'
import {getCartData,removeFromCart,updateQty} from "../../lib/cart"
import { addToWishlist } from 'app/lib/wishlist'
import { useRouter } from 'next/navigation'

export default function CartDetails() {

  interface CartData {
    cartId: string;
    lines: any[]; 
    total: number;
  }

  const [cartData, setCartData] = useState<CartData>({
    cartId: '',
    lines: [],
    total: 0 
  });
  const router=useRouter()


  useEffect(() => {
    async function fetchCartData() {
      const data = await getCartData();
      console.log("data in cart page===================>",data)
      setCartData(data);
    }
    fetchCartData();
  }, []);
  console.log("cartData=============>",cartData)

  // const { data: cartData, error } = useSWR('cartData', getCartData);

  // if (error) return <div>Error loading cart data...</div>;
  // if (!cartData) return <div>Loading...</div>;

  // console.log("cartData===============>",cartData)

  const handleDeleteFromCart = async (productId:any) => {
    console.log("productId===============>",productId)
    const success = await removeFromCart(productId); 
    if (success) {
        console.log("in success")
        const data = await getCartData();
        setCartData(data);
        router.refresh()
    } else {
        console.log("in error")
    }
}

// console.log("finalCartData================>",totalQty)

const handleQuantityChange = async (productId: any, quantity: number) => {
  console.log("productId===============>",productId)
  console.log("quantity===============>",quantity)
  const data:any = await updateQty(productId,quantity);
        setCartData(data);

}

const handleItemMove=async(product:any)=>{
const res=await addToWishlist(product)
if(res){
  await handleDeleteFromCart(product.productId)
  router.refresh()
}

}

  return (
    <>
      <h1 className="bg-custom-color-heading py-4 ff-inter text-2xl font-semibold leading-9 tracking-normal text-left">Your Shopping Cart </h1>
      <div className="overflow-x-auto pb-4">
        <table className="table">
          <thead>
            <tr className='bg-gray-100 border border-t border-solid border-gray-400 border-opacity-50'>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>IMAGE</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>PRODUCT NAME</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>PRICE</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>QTY</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>SUBTOTAL</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartData?.lines && cartData?.lines.map((product:any, index:any) => (
            <tr key={index} className='border border-t border-solid border-gray-400 border-opacity-50'>
              <td>
              <div className='flex justify-center items-center'>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.imageurl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td className='text-black ff-inter text-sm font-normal leading-6 tracking-normal flex justify-center items-center'>
                <div>
                  {product.name.slice(0,14)}
                  {/* <br/>
                  <span className='text-black ff-inter text-sm font-normal leading-6 tracking-normal'>{product.description}</span> */}
                </div>
              </td>
              <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center">{product.sunitprice}</td>
              <td >
                <div className='flex justify-center items-center'>
                  <div className='border w-[80px]'>
                    {/* <button className='pl-2 text-black font-sans text-base font-normal leading-6 tracking-normal'>-</button>
                    <input type='text' value={product.quantity} className="pl-5 w-10 text-black font-sans text-base font-normal leading-6 tracking-normal"></input>
                    <button className="pl-2 text-black font-sans text-base font-normal leading-6 tracking-normal">+</button> */}
                    <button onClick={() => handleQuantityChange(product.productId, product.quantity - 1)} className='pl-2 text-black font-sans text-base font-normal leading-6 tracking-normal'>-</button>
                    <input type='text' value={product.quantity} onChange={(e) => handleQuantityChange(product.productId, parseInt(e.target.value))} className="pl-5 w-10 text-black font-sans text-base font-normal leading-6 tracking-normal" />
                    <button onClick={() => handleQuantityChange(product.productId, product.quantity + 1)} className="pl-2 text-black font-sans text-base font-normal leading-6 tracking-normal">+</button>
                  </div>
                  <img onClick={()=>handleDeleteFromCart(product.productId)} className='w-5 h-5 ml-1 cursor-pointer' src='images/material-symbols_delete-outline.png'></img>
                </div>
              </td>
              <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center">{product.subtotal}</td>
              <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center"><button className='btn' onClick={()=>handleItemMove(product)} >Move to wishlist</button></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      {cartData?.lines && (
      <div className="flex flex-col items-center mt-4 mb-4">
        <div className="mb-2">Total: {cartData?.total}</div>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Proceed to Checkout
        </button>
      </div>
    )}
    </>
  )
}
