import Image from 'next/image';
import Gaming from '../../public/images/Group10.png';
import Zone from '../../public/images/Group11.png';
import Game from '../../public/images/Group12.png';

export function GaimingStore(){
    return(
        <>
            <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center text-center text-black mt-14">
                <h1 className="text-lg md:text-lg lg:text-2xl font-bold">Gaming Store</h1>
            </div>

            <div className="flex flex-wrap justify-center mt-4">
                {/* First Card */}
                <div className="relative flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden mb-4 sm:mb-0">
                <div className="relative w-full h-80 sm:h-96">
                    <Image src={Gaming} alt="Background Image" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h1 className="font-inter font-semibold text-sm">GAMING CONSOLES</h1>
                    <p className="font-inter font-normal text-sm">Up To 20% OFF</p>
                    <button className="btn w-24 h-9 font-light text-sm mt-2 bg-white text-black">Shop Now</button>
                </div>
                </div>

                {/* Second Card */}
                <div className="relative flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden mb-4 sm:mb-0">
                <div className="relative w-full h-80 sm:h-96">
                    <Image src={Zone} alt="Background Image" layout="fill" objectFit="cover" className="rounded-lg ml-2" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h1 className="font-inter font-semibold text-sm">GAME ZONE</h1>
                    <p className="font-inter font-normal text-sm">Best Deals On Consoles, Games And Accessories</p>
                    <button className="btn w-24 h-9 font-light text-sm mt-2 bg-white text-black">Shop Now</button>
                </div>
                </div>

                {/* Third Card */}
                <div className="relative flex justify-center items-center w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
                <div className="relative w-full h-80 sm:h-96">
                    <Image src={Game} alt="Image" layout="fill" objectFit="cover" className="rounded-lg ml-2" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                    <h1 className="font-inter font-semibold text-sm">GAMING ACCESSORIES</h1>
                    <p className="font-inter font-normal text-sm">Up To 30% OFF</p>
                    <button className="btn w-24 h-9 font-light text-sm mt-2 bg-white text-black">Shop Now</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}