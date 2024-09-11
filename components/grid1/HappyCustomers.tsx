import Image from 'next/image';
import albert from '../../public/images/Albert3.png';
import wilson from '../../public/images/Wilson4.png';
import jack from '../../public/images/jack2.png';
import marado from '../../public/images/marado1.png';

export function HappyCustomers(){
    const industryData = [
        {
            "title": "Jenny Wilson",
            "description": "Stylish solutions to stay ahead in fast-paced fashion retailing, delivering trends seamlessly from runway to checkout",
            "image": wilson,
            "role": "Founder",
        },
        {
            "title": "Marado Siris",
            "description": "Fresh approaches to inventory, sales, and customer experiences, ensuring every aisle meets the highest standards",
            "image": marado,
            "role": "Co-Founder",
        },
        {
            "title": "JJ Jackson",
            "description": "Dynamic systems to keep up with the active demands of sports retail, from equipment tracking to fast checkout",
            "image": jack,
            "role": "Founder",
        },
        {
            "title": "Albert John",
            "description": "Versatile tools for a variety of departments, creating unified shopping experiences under one roof ",
            "image": albert,
            "role": "Founder",
        },
    ];
    return(
        <>
            <div>
                <div className="flex flex-col justify-center items-center text-center mx-8 text-black mt-14">
                    <h1 className="text-lg md:text-lg lg:text-2xl font-bold">Our Happy Customers</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9 pl-3 pr-3 mx-8">
                    {industryData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4 mt-4 border border-[#9BD405]">
                            <div className="flex justify-center items-center mb-3">
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center">
                                    <Image src={item.image} alt={item.title} width={100} height={100} className="object-cover" />
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mt-2 text-center">{item.title}</h2>
                            <div className="text-sm font-semibold text-black text-center">{item.role}</div>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
        </div>
        </>
    )
}