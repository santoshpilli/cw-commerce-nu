import Image from 'next/image';
import headphones from '../../public/images/Headphones2.png';
import home2 from '../../public/images/HomeAudio2.png';
import tablet from '../../public/images/Tablet.png';
import video from '../../public/images/VideoGames.png';
import laptop from '../../public/images/laptop2.png';
import mobile from '../../public/images/mobile.png';
import watch from '../../public/images/watch.png';

export function Gadgets(){
    return(
        <>
            <div className="flex flex-col md:flex-row px-4 md:px-8">
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start mt-10 md:mt-24 bg-gray-200 rounded-lg p-4 md:w-1/3">
                {/* Image */}
                <div className="mr-[1.5rem] mb-4 md:mb-0">
                    <div className="w-52 h-40 overflow-hidden rounded-lg">
                        <Image src={home2} alt="Image" layout="responsive" width={208} height={170} />
                    </div>
                </div>
                {/* Text */}
                <div className="text-center md:text-left">
                    <h1 className="font-semibold text-base">Home & Audio Entertainment</h1>
                    <p className="text-sm text-gray-500">10 products</p>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col md:ml-8 mt-10 md:mt-24">
                <h1 className="font-semibold text-lg text-center md:text-left mb-4">Must Have Gadgets</h1>

                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={mobile} alt="Card 1 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Mobiles</h1>
                            <p className="text-xs text-gray-500">50 products</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={headphones} alt="Card 2 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Headphones</h1>
                            <p className="text-xs text-gray-500">50 products</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={video} alt="Card 3 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Video Games & Consoles</h1>
                            <p className="text-xs text-gray-500">30 products</p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Card 4 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={watch} alt="Card 4 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Smart Watches</h1>
                            <p className="text-xs text-gray-500">100 products</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={laptop} alt="Card 5 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Laptops</h1>
                            <p className="text-xs text-gray-500">100 products</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-gray-300 p-5 md:p-6 rounded-lg flex items-center">
                        <div className="w-16 h-16 overflow-hidden">
                            <Image src={tablet} alt="Card 6 Image" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <h1 className="text-xs">Tablets</h1>
                            <p className="text-xs text-gray-500">30 products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}