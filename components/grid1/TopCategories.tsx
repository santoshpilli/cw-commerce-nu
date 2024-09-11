import Image from "next/image";
import ellipse from '../../public/images/Ellipse47.png';
import mobile from '../../public/images/Ellipse48.png';
import laptop from '../../public/images/Ellipse_49.png';
import tab from '../../public/images/Ellipse50.png';
import netflix from '../../public/images/Ellipse51.png';
import watch from '../../public/images/Ellipse52.png';
import mic from '../../public/images/Frame50.png';
export function TopCategories(){
    return(
        <>
        <div className="container mx-8 px-8 ">
            <div className="flex flex-col justify-center items-center    text-center text-black">
                <h1 className="text-lg md:text-lg lg:text-2xl font-bold mb-8 mt-15 mr-2">
                    Top Categories
                </h1>
                <div className="flex justify-center gap-10 mt-2">

                    <div className="rounded-lg overflow-hidden">
                        <Image src={ellipse} alt="Category 1" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Buy iphones</h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={mobile} alt="Category 2" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Mobiles</h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={laptop} alt="Category 3" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Laptops </h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={tab} alt="Category 4" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Tablets</h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={netflix} alt="Category 5" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Televisions </h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={watch} alt="Category 6" className="w-auto max-w-full h-hug-235" />
                        <h1 className='mt-2'> Smart Watches</h1>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image src={mic} alt="Category 7" className="w-auto max-w-full h-hug-235" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}