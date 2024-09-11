// 'use client'

// import { useState } from "react";
// import { addToCart } from '../../app/lib/cart';
// import {addToWishlist} from '../../app/lib/wishlist'
// import { useRouter } from "next/navigation";


// export default function ProductList(data:any,isLoading:any){
//     const finalData = data?.data
//     const[showIcons,setShowIcons] = useState<number | null>(null)
//     const [showMessage, setShowMessage] = useState<boolean>(false);
//     const [message, setMessage] = useState<string>('');

//     const router=useRouter()

//     const handleAddToCart = async (productId:any) => {
//         const success = await addToCart(productId); 
//         if (success) {
//             setMessage('Product added to cart');
//             setShowMessage(true);
//             setTimeout(() => setShowMessage(false), 2000);
//             router.refresh()
//             } else {
//                 alert("something going wrong pleasee try after some time")
//         }
//     }
//     const handleAddToWishlist=async (item:any)=>{
//         const success=await addToWishlist(item)
//         if(success){
//             alert('item added to wishlist')
//         }
//     }

//     const showProductDetails=(name:Number)=>{
//         router.push(`/product-details?name=${name}`)
        
//     }
    
//     return(
//         <>
//             <>
//             <div className="flex md:px-3">
//                 <select defaultValue={""} className="select select-bordered select-sm w-40 max-w-xs rounded-none">
//                     <option className="text-sm ff-inter font-normal text-black" disabled selected>Featured</option>
//                     <option>Featured 1</option>
//                     <option>Featured 2</option>
//                     <option>Featured 3</option>
//                 </select>
//                 <div className="grow">
//                     <div className="flex justify-end">
//                         <div className="bg-custom-color-btn py-1 px-2 border rounded-sm"><img src='images/grid_svgrepo.com.png' className="w-4 h-4"></img></div>
//                         <div className="py-1 px-2 border rounded-md"><img src='images/carbon_list-boxes.png' className="w-4 h-4"></img></div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col text-black mt-5 md:px-3 mb-20">
//                 {finalData && <p className="font-semibold" >Showing 1-{finalData?.length} of 1,000 results</p>}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {finalData?.map((item:any, index:any) => (
//                         <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-lg"  onMouseEnter={() => setShowIcons(index)} onMouseLeave={() => setShowIcons(null)}>
//                             <div className="flex" onClick={()=>showProductDetails(item.name)}>
//                                 <div className="md:w-5/6 w-4/5 grid justify-items-stretch">
//                                 {/* <Image src={item.imageurl} alt={item.name} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4 justify-self-center ml-10" /> */}
//                                 <img src={item.image_url} alt={item.name} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4 justify-self-center ml-10"  />
//                                 </div>
//                                 {showIcons === index &&  (<div className="md:w-1/6 h-32 grid justify-items-stretch ml-4 w-1/5">
//                                     <img src='images/Frame168.png' className="w-7 h-7 justify-self-end"></img>
//                                     <img src='images/Frame168.png' className="w-7 h-7 justify-self-end"></img>
//                                     <img src='images/Frame169.png' className="w-7 h-7 justify-self-end"></img>
//                                 </div>)}
//                             </div>

//                             <div>
//                                 <h2 className="ff-inter text-sm text-zinc-500 font-medium text-left">{item.name}</h2>
//                                 <p className="ff-inter text-sm text-left font-semibold">{item.shortDescription}</p>
//                                 <div className="flex mt-1">
//                                     <span className="text-yellow-500">★</span>
//                                     <span className="text-yellow-500">★</span>
//                                     <span className="text-yellow-500">★</span>
//                                     <span className="text-yellow-500">★</span>
//                                     <span className="text-yellow-500">★</span>
//                                 </div>
//                                 <div className="text-xs text-gray-500 text-left">
//                                     <span className="bg-custom-color-heading ff-inter text-lg font-semibold ">&#8377;{item.sale_price}</span> <del className="font-medium text-sm color-remember-checkbox">&#8377;{item.listPrice}</del>
//                                 </div>
//                                 <div onClick={() => handleAddToCart(item)} style={{cursor:'pointer'}} className="flex justify-center items-center gap-2 my-2 bg-custom-color-btn border rounded-md text-white py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-custom-color-hover">
//                                     <button className="text-sm font-normal relative overflow-hidden">
//                                         <span className="relative z-10">Add to Cart</span>
//                                         <span className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
//                                     </button>
//                                     <img src='images/bx_cart.png' className="w-5 h-5 transition-transform duration-300 ease-in-out hover:translate-x-1" />
//                                 </div>

//                                 <div className="flex justify-center items-center gap-2 my-2 bg-custom-color-btn border rounded-md text-white py-2">
//                                     <button className="text-sm font-normal" onClick={() => handleAddToWishlist(item)}>Wishlist</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             </> 
//             {showMessage && (
//                 <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
//                     {message}
//                 </div>
//             )}
//     </>
//     )
// }


'use client'

import { useState } from "react";
import { addToCart } from '../../app/lib/cart';
import { addToWishlist } from '../../app/lib/wishlist';
import { useRouter } from "next/navigation";
import Image from "next/image";

const Skeleton = () => (
  <div className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between animate-pulse">
    <div className="w-full h-32 bg-gray-300 mb-4"></div>
    <div className="h-4 bg-gray-300 mb-2"></div>
    <div className="h-4 bg-gray-300 mb-2"></div>
    <div className="flex mt-1 space-x-1">
      <div className="h-4 w-4 bg-gray-300"></div>
      <div className="h-4 w-4 bg-gray-300"></div>
      <div className="h-4 w-4 bg-gray-300"></div>
      <div className="h-4 w-4 bg-gray-300"></div>
      <div className="h-4 w-4 bg-gray-300"></div>
    </div>
    <div className="h-4 bg-gray-300 mt-2"></div>
  </div>
);

export default function ProductList({ data, isLoading }: { data: any, isLoading: boolean }) {
  const finalData = data;
  const [showIcons, setShowIcons] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleAddToCart = async (productId: any) => {
    const success = await addToCart(productId);
    if (success) {
      setMessage('Product added to cart');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
      router.refresh();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleAddToWishlist = async (item: any) => {
    const success = await addToWishlist(item);
    if (success) {
      alert('Item added to wishlist');
    }
  };

  const showProductDetails = (name: Number) => {
    router.push(`/product-details?name=${name}`);
  };

  console.log("finalData===============>",finalData)

  return (
    <>
      <div className="flex md:px-3">
        <select defaultValue={""} className="select select-bordered select-sm w-40 max-w-xs rounded-none">
          <option disabled selected>Featured</option>
          <option>Featured 1</option>
          <option>Featured 2</option>
          <option>Featured 3</option>
        </select>
        <div className="grow">
          <div className="flex justify-end">
            <div className="bg-custom-color-btn py-1 px-2 border rounded-sm">
              <img src='images/grid_svgrepo.com.png' className="w-4 h-4" />
            </div>
            <div className="py-1 px-2 border rounded-md">
              <img src='images/carbon_list-boxes.png' className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-black mt-5 md:px-3 mb-20">
        {/* {finalData && <p className="font-semibold">Showing 1-{finalData?.length} of 1,000 results</p>} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          ) : (
            finalData?.map((item: any, index: any) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-lg"
                onMouseEnter={() => setShowIcons(index)}
                onMouseLeave={() => setShowIcons(null)}
              >
                <div className="flex" onClick={() => showProductDetails(item.name)}>
                  <div className="md:w-5/6 w-4/5 grid justify-items-stretch">
                    <Image src={item.image_url} alt={item.name} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4 justify-self-center ml-10" />
                  </div>
                  {showIcons === index && (
                    <div className="md:w-1/6 h-32 grid justify-items-stretch ml-4 w-1/5">
                      <img src='images/Frame168.png' className="w-7 h-7 justify-self-end" />
                      <img src='images/Frame168.png' className="w-7 h-7 justify-self-end" />
                      <img src='images/Frame169.png' className="w-7 h-7 justify-self-end" />
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="ff-inter text-sm text-zinc-500 font-medium text-left">{item.name}</h2>
                  <p className="ff-inter text-sm text-left font-semibold">{item.shortDescription}</p>
                  <div className="flex mt-1">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                  </div>
                  <div className="text-xs text-gray-500 text-left">
                    <span className="bg-custom-color-heading ff-inter text-lg font-semibold">&#8377;{item.sale_price}</span>
                    <del className="font-medium text-sm color-remember-checkbox">&#8377;{item.listPrice}</del>
                  </div>
                  <div onClick={() => handleAddToCart(item)} style={{ cursor: 'pointer' }} className="flex justify-center items-center gap-2 my-2 bg-custom-color-btn border rounded-md text-white py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-custom-color-hover">
                    <button className="text-sm font-normal relative overflow-hidden">
                      <span className="relative z-10">Add to Cart</span>
                      <span className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                    </button>
                    <img src='images/bx_cart.png' className="w-5 h-5 transition-transform duration-300 ease-in-out hover:translate-x-1" />
                  </div>

                  <div className="flex justify-center items-center gap-2 my-2 bg-custom-color-btn border rounded-md text-white py-2">
                    <button className="text-sm font-normal" onClick={() => handleAddToWishlist(item)}>Wishlist</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
          {message}
        </div>
      )}
    </>
  );
}





