import Image from "next/image";
import image1 from "../../public/images/image1.png";
import phone from '../../public/images/image2.png';
import headset from '../../public/images/image3.png';
import keyboard from '../../public/images/image4.png';

export function TopSelling(){
    const industryData = [
        {
            "title": "Mobiles, Tablets",
            "description": "POCO M6 Pro 5G(forest Green, 4GB RAM,128 Storage) ",
            "image": image1,
            "offerPrice": "10,000",
            "originalPrice": "15,000"
        },
        {
            "title": "Mobiles, Tablets",
            "description": "Realme nazro N53 (Feature Gold, 4GB+64GB",
            "image": phone,
            "offerPrice": "8,000",
            "originalPrice": "10,000"
        },
        {
            "title": "Headphones",
            "description": "Razer Black Shark V2x Wired, Gaming On Ear Headset",
            "image": headset,
            "offerPrice": "4,500",
            "originalPrice": "8,000"
        },
        {
            "title": "Keyboard",
            "description": "Basic Wired Keyboard And Optical Mouse Set ",
            "image": keyboard,
            "offerPrice": "599",
            "originalPrice": "1,000"
        }
    ];
    return(
        <>
                    <div className="flex flex-col justify-center items-center text-center text-black mt-7 px-8">
            <h1 className="text-lg md:text-lg lg:text-2xl font-bold mb-8 mt-15">
                Top Selling Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {industryData.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between">
                        <div className="flex justify-center items-center mb-4">
                            <Image src={item.image} alt={item.title} width={100} height={100} className="w-[7.5rem] h-[10rem] mb-4" />
                        </div>
                        <div>
                            <h2 className="text-sm text-zinc-500 font-semibold mb-2 text-left">{item.title}</h2>
                            <p className="text-xs text-left">{item.description}</p>
                            <div className="flex mt-1">
                                {/* Static stars */}
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                                <span className="text-yellow-500">★</span>
                            </div>
                            <div className="text-xs text-gray-500 text-left">
                                <span className="text-black">&#8377;{item.offerPrice}</span> <del>&#8377;{item.originalPrice}</del>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}