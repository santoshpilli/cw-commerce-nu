// 'use client';
// import axios from "axios";
// import React,{useState,useEffect} from "react";
// import image1 from "../../../public/images/image1.png";
// import image2 from "../../../public/images/image2.png";
// import image3 from "../../../public/images/image3.png";
// import image4 from "../../../public/images/image4.png";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// export default function ProductDetails(){
//     const [productDetails, setProductDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const industryData = [
//         {
//             "title": "Mobiles, Tablets",
//             "description": "POCO M6 Pro 5G(forest Green, 4GB RAM,128 Storage) ",
//             "image": image1,
//             "offerPrice": "10,000",
//             "originalPrice": "15,000"
//         },
//         {
//             "title": "Mobiles, Tablets",
//             "description": "Realme nazro N53 (Feature Gold, 4GB+64GB",
//             "image": image2,
//             "offerPrice": "8,000",
//             "originalPrice": "10,000"
//         },
//         {
//             "title": "Headphones",
//             "description": "Razer Black Shark V2x Wired, Gaming On Ear Headset",
//             "image": image3,
//             "offerPrice": "4,500",
//             "originalPrice": "8,000"
//         },
//         {
//             "title": "Keyboard",
//             "description": "Basic Wired Keyboard And Optical Mouse Set ",
//             "image": image4,
//             "offerPrice": "599",
//             "originalPrice": "1,000"
//         }
//     ];
//     const searchParams = useSearchParams();
//   const name = searchParams.get('name');

//   useEffect(() => {
//     const fetchProductDetails = async (name:any) => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`/api/product-details?name=${name}`);
//             // if (!response.ok) {
//             //     throw new Error('Failed to fetch product details');
//             // }
//             const details = await response.data;
//             setProductDetails(details);
//         } catch (err) {
//             console.error('Error fetching product details:', err);
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (name) {
//         fetchProductDetails(name);
//     }
// }, [name]);
// console.log(productDetails,'products')

//     return(
//         <>
//         {loading?(<div>Loading...</div>):(

//         <div>

//             <div className="md:flex md:px-12 mt-2">
//                 { productDetails.map((product,index)=>(
//                     <div key={index} className="flex">
//                         {/*left container */}
//                 <div className="md:w-2/5 sm:w-full">
//                     <div className="relative">
//                         <img className="border h-102" src={product.imageurl} alt={product.name}></img>
//                         <div className="absolute md:top-4 md:left-[30vw] top-3 left-[80vw] p-1 rounded-full bg-gray-200"><img className="w-5 h-5" src='images/ph_heart.png'></img></div>
//                     </div>
//                     <div className="flex gap-2">
//                         <div><img className="h-40" src='images/mobileImg2.png'></img></div>
//                         <div><img className="h-40" src='images/mobileImg3.png'></img></div>
//                         <div><img className="h-40"  src='images/mobileImg4.png'></img></div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <button className="btn ff-inter font-normal text-base bg-custom-login-btn  text-white">Add To Cart</button>
//                         <button className="btn ff-inter font-normal text-base bg-custom-login-btn  text-white">Buy Now</button>
//                     </div> 
//                 </div>

//                 {/*right container */}
//                 <div className="md:w-3/5 sm:w-full md:pl-16 md:mt-0 mt-6">
//                     <div className="ff-inter md:text-3xl text-xl font-medium pb-2">
//                        {product.name}
//                     </div>
//                     <p className="ff-inter  text-sm  pr-2">{product.description}</p>
//                     <div className="flex pb-1">
//                         <span className="ff-inter text-base font-medium pr-2">4.6</span>
//                         <div className="pt-2 pr-2">
//                             <img className="w-35 h-3" src='images/rating_stars.png'></img>
//                         </div>
//                         <span className="color-remember-checkbox">24,906 Ratings</span>
//                     </div>
//                     <div className="ff-inter text-[10px] font-medium pb-2">5K+ Bought in past month</div>
//                     <hr className="border"></hr>
//                     <div className="py-2">
//                         <span className="pr-2 ff-inter md:text-2xl text-lg font-semibold">₹52,000</span>
//                         <span className="ff-inter font-semibold md:text-sm text-xs color-remember-checkbox">₹69,000</span>
//                     </div>
//                     <div className="ff-inter font-medium text-[13px]">
//                         Inclusive of all taxes
//                     </div>
//                     <div className="pb-2">
//                         <span className="ff-inter font-medium text-[13px]">EMI starts at </span>
//                         <span className="ff-inter font-medium text-[13px]">₹2000.</span>
//                     </div>
//                     <hr className="border"></hr>
//                     <div className="py-2">
//                         <div className="ff-inter font-semibold text-[14px]">Available Offers</div>
//                         <div className="flex p-1">
//                             <div className="pt-1 pr-1"><img className="md:w-4 md:h-4 w-6 h-4" src='images/bxs_offer.png'></img></div>
//                             <span className="ff-inter font-medium text-[13px]">Bank Offer Get ₹25 instant discount for 1st order using UPI</span>
//                         </div>
//                         <div className="flex p-1">
//                             <div className="pt-1 pr-1"><img className="md:w-4 md:h-4 w-6 h-4" src='images/bxs_offer.png'></img></div>
//                             <span className="ff-inter font-medium text-[13px]">Bank Offer Get ₹25 instant discount for 1st order using UPI</span>
//                         </div>
//                         <div className="flex p-1">
//                             <div className="pt-1 pr-1"><img className="md:w-4 md:h-4 w-6 h-4" src='images/bxs_offer.png'></img></div>
//                             <span className="ff-inter font-medium text-[13px]">Bank Offer Get ₹25 instant discount for 1st order using UPI</span>
//                         </div>
//                         <div className="flex p-1">
//                             <div className="pt-1 pr-1"><img className="md:w-4 md:h-4 w-6 h-4" src='images/bxs_offer.png'></img></div>
//                             <span className="ff-inter font-medium text-[13px]">Bank Offer Get ₹25 instant discount for 1st order using UPI</span>
//                         </div>
//                         <div className="form-control border p-4">
//                             <label className="label cursor-pointer">
//                                 <span className="label-text ff-inter font-semibold text-[14px]">With Exchange</span>
//                                 <input type="radio" name="radio-1" className="radio checked:bg-black-500"/>
//                             </label>
//                             <span className="label-text ff-inter text-[12px] font-medium pl-2">Up to ₹36,850 off</span>
//                         </div>
//                         <div className="border p-4">
//                             <div className="form-control">
//                                 <label className="label cursor-pointer">
//                                     <span className="label-text ff-inter font-semibold text-[14px]">Without Exchange</span>
//                                     <input type="radio" name="radio-1" checked className="radio checked:bg-black-500"/>
//                                 </label>
//                                 <div className="label-text ff-inter text-[12px] font-medium pl-2">₹52,000</div>
//                             </div>
                            
//                             <div className="ff-inter font-semibold text-[14px] p-2 ">Delivery Options</div>
//                             <div className="md:pl-2 pl-1">
//                                 <label className="input input-bordered md:w-72 h-8 flex items-center gap-2">
//                                     <input type="text" className="grow" placeholder="Enter Pincode" />
//                                     <span className="ff-inter font-normal text-sm color-remember-checkbox">Check</span>
//                                 </label>
//                             </div>
//                             <div className="ff-inter font-semibold text-[14px] pt-2 pl-2">
//                                 Free Delivery 9 - 15 March
//                             </div>
//                             <div className="flex pl-2 pt-2">
//                                 <span><img className="md:w-5 md:h-5 w-10 h-6" src='images/carbon_location.png'></img></span>
//                                 <span className="ff-inter text-[10px] font-medium color-remember-checkbox pl-1">Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, a</span>
//                             </div>
//                             <div>
//                                 <div className="ff-inter font-semibold text-[14px] pt-2 pl-2">In Stock</div>
//                                 <div className="flex">
//                                 <div className="pt-2 w-32">
//                                     <p className="ff-inter font-normal text-[10.5px] pl-2">Ships From</p>
//                                     <p className="ff-inter font-normal text-[10.5px] ml-2">Sold</p>
//                                 </div>
//                                 <div className="pt-2 w-32">
//                                     <p className="ff-inter font-normal text-[10.5px] pl-2">Amazon</p>
//                                     <p className="ff-inter font-normal text-[10.5px] ml-2">Darshita e zone</p>
//                                 </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ff-inter font-semibold text-[14px] pt-4">Color : Starlight</div>
//                         <div className="flex gap-2 mt-2">
//                             <div className="border w-9 h-9 bg-red-700 rounded-full"></div>
//                             <div className="border w-9 h-9 bg-blue-800 rounded-full"></div>
//                             <div className="border w-9 h-9 bg-green-900 rounded-full"></div>
//                             <div className="border w-9 h-9 bg-black rounded-full"></div>
//                             <div className="border w-9 h-9 bg-pink-400 rounded-full"></div>
//                             <div className="border w-9 h-9 bg-gray-400 rounded-full"></div>
//                         </div>
//                         <div className="ff-inter font-semibold text-[14px] mt-2">Size: 128GB</div>
//                         <div className="flex gap-4 mt-2">
//                             <div className="border p-2 w-20 h-9 ff-inter font-medium text-center text-[14px]">128GB</div>
//                             <div className="border p-2 w-20 h-9 ff-inter font-normal text-center text-[14px] color-remember-checkbox">256GB</div>
//                             <div className="border p-2 w-20 h-9 ff-inter font-normal text-center text-[14px] color-remember-checkbox">512GB</div>
//                         </div>
//                     </div>
//                 </div>
//                     </div>

//                 ))}
//             </div>
//             <div className="mt-16">
//                 {/*Description */}
//                 <div className="text-center space-x-10">
//                     <span className="ff-inter md:text-xl text-base font-semibold bg-custom-color-heading">Description</span>
//                     <span className="ff-inter md:text-xl text-base font-medium color-remember-checkbox">Reviews&#40;3&#41;</span>
//                 </div>
//                 <hr className="border mt-4 md:mx-10"></hr>
//                 <ul className="md:mx-10 p-5 list-disc">
//                     <li className="ff-inter md:text-lg text-xs font-medium bg-custom-color-heading py-3">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,</li>
//                     <li className="ff-inter md:text-lg text-xs font-medium bg-custom-color-heading py-3">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.</li>    
//                     <li className="ff-inter md:text-lg text-xs font-medium bg-custom-color-heading py-3">Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.</li>
//                 </ul>   
//             </div>
//             <div>
//                 {/* carousals */}            
//                 <div className="flex flex-col text-black mt-7 px-8 mb-20">
//                     <h1 className="ff-inter text-lg md:text-lg lg:text-2xl font-semibold mb-8 mt-15">
//                         People Also Buy
//                     </h1>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                         {industryData.map((item, index) => (
//                             <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
//                                 <div className="flex justify-center items-center">
//                                     <Image src={item.image} alt={item.title} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4" />
//                                 </div>
//                                 <div>
//                                     <h2 className="ff-inter text-sm text-zinc-500 font-medium text-left">{item.title}</h2>
//                                     <p className="ff-inter text-sm text-left font-semibold">{item.description}</p>
//                                     <div className="flex mt-1">
//                                         {/* Static stars */}
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                     </div>
//                                     <div className="text-xs text-gray-500 text-left">
//                                         <span className="bg-custom-color-heading ff-inter text-lg font-semibold ">&#8377;{item.offerPrice}</span> <del className="font-medium text-sm color-remember-checkbox">&#8377;{item.originalPrice}</del>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="flex flex-col text-black mt-7 px-8 mb-6">
//                     <h1 className="text-lg md:text-lg lg:text-2xl font-semibold mb-12 mt-15">
//                     Inspired By Your Browsing History
//                     </h1>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//                         {industryData.map((item, index) => (
//                             <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
//                                 <div className="flex justify-center items-center">
//                                     <Image src={item.image} alt={item.title} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4" />
//                                 </div>
//                                 <div>
//                                     <h2 className="ff-inter text-sm text-zinc-500 font-medium text-left">{item.title}</h2>
//                                     <p className="ff-inter text-sm text-left font-semibold">{item.description}</p>
//                                     <div className="flex mt-1">
//                                         {/* Static stars */}
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                         <span className="text-yellow-500">★</span>
//                                     </div>
//                                     <div className="text-xs text-gray-500 text-left">
//                                         <span className="bg-custom-color-heading ff-inter text-lg font-semibold ">&#8377;{item.offerPrice}</span> <del className="font-medium text-sm color-remember-checkbox">&#8377;{item.originalPrice}</del>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )}
//         </>
//     )
// }

export default function ProductDetails(){
    return(
        <h2>Product Details111</h2>
    )    
}