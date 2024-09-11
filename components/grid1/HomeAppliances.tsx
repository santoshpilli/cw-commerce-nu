import Image from "next/image";
import camera from '../../public/images/image10.png';
import smart from '../../public/images/image11.png';
import machine from '../../public/images/washing.png';

export function HomeAppliances(){
    const industryData = [
        {
            "title": "Camera",
            "description": "Xiaomi MI Wireless Home Security ",
            "image": camera,
            "offerPrice": "3,999",
            "originalPrice": "5,000"
        },
        {
            "title": "Home",
            "description": "Amazon Echo Pop Smart Speaker With Alexa",
            "image": smart,
            "offerPrice": "5,000",
            "originalPrice": "9,000"
        },
        {
            "title": "",
            "description": "",
            "image": "", // You can add an image path here if available
            "offerPrice": "", // Add offer price if available
            "originalPrice": "", // Add original price if available
            "background": "#0C173A"
        }
    ];
    return(
        <>  
        <div className="flex flex-col px-8 justify-center items-center text-center text-black mt-7">
            <h1 className="text-lg md:text-lg lg:text-2xl font-bold mb-8 mt-15">
                Home Appliances Store
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {industryData.map((item, index) => (
                    <div key={index} className={`border border-gray-200 rounded-lg p-4 flex flex-col justify-between  ${index === 2 ? 'w-[32rem]' : ''}`} style={{ background: item.background }}>
                        <div className="flex justify-left items-center mb-4">
                            {index === 2 ? (
                                <div className="flex flex-col">
                                    <div className="w-72 flex flex-row justify-between h-44 border-1-4 border-1-4 rounded mr-3 relative">
                                        <div className="absolute top-0 left-0  p-4" style={{ textAlign: 'left', marginRight: '100px' }}>
                                            {/* Text and button */}
                                            <h2 className="text-lg text-white font-semibold mb-2">Limited Week <br />Offer</h2>
                                            <p className="text-white text-sm">Starting from  <span className="text-red-500">&#8377;5000/-</span> </p>
                                            <button className="bg-white text-black px-2 h-7   py-2 mt-2 rounded flex items-center">Shop Now</button>
                                        </div>
                                        <Image src={machine} alt="Background Image" className="bg-image left h-[13rem] mt-8 ml-[12.7rem] " />
                                    </div>
                                </div>



                            ) : (
                                <Image src={item.image} alt={item.title} width={100} height={100} />
                            )}
                        </div>
                        <div>
                            <h2 className="text-sm text-zinc-500 font-semibold mb-2 text-left">{item.title}</h2>
                            <p className="text-xs text-left">{item.description}</p>
                            {index !== 2 && (
                                <>
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
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}