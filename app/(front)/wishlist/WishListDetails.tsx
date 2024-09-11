'use client'
import { useEffect, useState } from 'react'
import { getWishlistData,removeFromWishlist } from '../../../app/lib/wishlist'
import { addToCart } from 'app/lib/cart';
import { useRouter } from 'next/navigation';

export default function WishListDetails() {
  // const [mounted, setMounted] = useState(false)
  const [wishlistData, setWishlistData] = useState({
    wishlistId: '',
    lines: [],
  });
  const router=useRouter()
  useEffect(() => {
    // setMounted(true)
    async function fetchWishlistData() {
      const data = await getWishlistData();
      console.log("data===================>", data)
      setWishlistData(data);
    }
    fetchWishlistData();
  }, [])
  console.log(wishlistData,'qqq')

  const handleRemove = async (id:any) => {
    const res = await removeFromWishlist(id);
    if (res) {
      console.log('Item removed');
      const updatedData = await getWishlistData();
      setWishlistData(updatedData);
    }
  };
  const handleMoveToCart=async (product:any)=>{
const success=await addToCart(product)
await handleRemove(product.productId)
if(success){
  console.log('item moved to cart')
  router.refresh()
}
  }

  // if (!mounted) return <></>

  return (
    <>
      <h1 className="bg-custom-color-heading py-4 ff-inter text-2xl font-semibold leading-9 tracking-normal text-left">Your Wishlist </h1>
      <div className="overflow-x-auto pb-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='bg-gray-100 border border-t border-solid border-opacity-50'>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>IMAGE</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>PRODUCT NAME</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>PRICE</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>STOCK</th>
              <th className='text-black ff-inter text-sm font-normal leading-normal tracking-normal text-center'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {wishlistData?.lines && wishlistData?.lines.map((product: any, index: any) => (
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
                    {product.name.slice(0, 14)}
                  </div>
                </td>
                <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center">{product.sunitprice}</td>
                <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center">{product.stock===null?'Outof Stock':'in Stock'}</td>
                <td className="text-black ff-inter text-sm font-normal leading-6 tracking-normal text-center" >
                  <button className='btn btn-sm' onClick={()=>handleMoveToCart(product)}>Move to Cart</button>
                  <button className='btn btn-sm'onClick={()=>handleRemove(product.productId)}>Remove</button>  
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
