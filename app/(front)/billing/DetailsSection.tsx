import Image from 'next/image';
import tab from "../../../public/images/Tablet.png";
import headset2 from "../../../public/images/headset2 5.png";
import watch from "../../../public/images/watch4.png";

export function DetailsSection(){
    return (
        <div className="flex-col mt-24  mr-24 md:w-full md:ml-[6rem] ">
            <div className="ml-[3.5rem] flex col mb-[1rem]  ">
                <Image src={watch} alt="Page Image" className="h-[3rem] w-[3rem]" />
                <p className="text-xs ml-5 ">Fire Bolt Smart Watch Ninja Pro  <br /> Plus <br />x1 </p>
                <div className="flex  mt-1">
                    <span className="text-xs ml-6 text-black-500">₹</span>
                    <p className="text-xs ml-1 font-bold">2000</p>
                </div>

            </div>

            <div className="ml-[3.5rem] flex col mb-[1rem] ">
                <Image src={headset2} alt="Page Image" className="h-[3rem] w-[3rem]" />
                <p className="text-xs ml-5">Fire Bolt Smart Watch Ninja Pro <br /> Plus <br />x1 </p>
                <div className="flex  mt-1">
                    <span className="text-xs ml-6 text-black-500">₹</span>
                    <p className="text-xs ml-1 font-bold">2000</p>
                </div>

            </div>
            <div className="ml-[3.5rem] flex col mb-[1rem] ">
                <Image src={tab} alt="Page Image" className="h-[3rem] w-[3rem]" />
                <p className="text-xs ml-5">Fire Bolt Smart Watch Ninja Pro <br /> Plus <br />x1 </p>
                <div className="flex  mt-1">
                    <span className="text-xs ml-6 text-black-500">₹</span>
                    <p className="text-xs ml-1 font-bold">2000</p>
                </div>
            </div>
            <div>
                <hr className="my-1 border-gray-300 ml-14 mr-[8rem]" />
                <p className="text-xs ml-[3.5rem] mt-4">Subtotal <span className="text-xs   ml-[13.5rem]">₹219</span> </p>
                <p className="text-xs ml-[3.5rem] mt-2">Shipping Cost <span className="text-xs   ml-[11.7rem]">₹0</span> </p>
                <hr className="my-1 border-gray-300 mt-4 ml-14 mr-[8rem]" />
                <p className="font-semibold ml-[3.5rem] mt-2">Total Amount <span className="text-xs   ml-[10rem]">₹219</span> </p>
            </div>
            <div className="bg-gray-100 p-4 ml-2 md:ml-[3rem]  max-w-[24rem] md:max-w-fit">
                <div className="mr-8">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md ml-0 md:ml-16 mt-2 md:mt-12" />
                    <label htmlFor="checkbox" className="ml-2 mb-2 text-md mt-2 md:mt-0">Check Payment</label> <br />
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md ml-0 md:ml-16 mt-2" />
                    <label htmlFor="checkbox" className="ml-2 text-md mt-2 md:mt-0">Direct Bank Transfer</label> <br />
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md ml-0 md:ml-16 mt-2" />
                    <label htmlFor="checkbox" className="ml-2 text-md mt-2 md:mt-0">Cash On Delivery</label> <br />
                    <p className="text-xs ml-[5.7rem] md:ml-[6rem] text-gray-600">Pay with cash upon delivery</p>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-md ml-0 md:ml-16 mt-2" />
                    <label htmlFor="checkbox" className="ml-2 text-md mt-2 md:mt-0">PayPal</label>
                </div>

                <div className="mt-5 md:mt-0">
                    <button className="btn btn-wide bg-sky-950 text-white h-10">Place Order</button>
                </div>
            </div>
        </div>
    );
}


