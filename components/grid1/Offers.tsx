import Image from 'next/image';
import headset from '../../public/images/image39.png';
import iphone from '../../public/images/images38.png';

export function Offers(){
    return(
        <>
            <div className="bg-lime-200 mx-8 border-1-4 border-1-4 rounded-lg mt-6 relative flex flex-col md:flex-row items-center justify-center">
                <div className="md:absolute md:left-0 md:bottom-0">
                    <Image src={iphone} alt="iPhone" className="h-[6rem] w-[12rem] pl-14 pb-0" />
                </div>
                <div className="flex flex-col  items-center justify-center md:items-start"> {/* Centering items horizontally on small screens, start align on medium and above */}
                    <h1 className="font-inter items-center font-medium text-sm text-main-text-color ml-20 mt-7 mb-1">SUMMER SAVINGS</h1>
                    <p className="font-inter font-semibold items-center text-2xl text-main-text-color mb-1">Get 30% OFF On Your Next Order</p>
                    <button className="bg-blue-950 text-xs text-white p-2 border-2-4 rounded h-8 w-40 ml-20 font-light mb-4">USE CODE: SUMMER24</button>
                </div>
                <div className="md:absolute md:right-0 md:top-0">
                    <Image src={headset} alt="Headset" className="h-[8rem] w-[12rem] pr-14" />
                </div>
            </div>
        </>
    )
}