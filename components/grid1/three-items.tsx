import laptop from '../../public/images/laptop.jpg';
import Image from "next/image";
import { TopCategories } from './TopCategories';
import {TopSelling} from './TopSelling';
import {Gadgets} from './Gadgets'
import { HomeAppliances } from './HomeAppliances';
import { Offers } from './Offers';
import { GaimingStore } from './GamingStore';
import { HappyCustomers } from './HappyCustomers';

export function ThreeItemGrid(){
    return(
        <>
            <div className="relative px-4 md:px-8">
                <div className="relative overflow-hidden rounded-lg shadow-md">
                    <Image src={laptop} alt="Background Image" className="object-cover w-full h-60 md:h-80 lg:h-96" />
                    <div className="absolute inset-0 flex flex-col justify-center items-end px-4 md:px-8 lg:px-12">
                        <div className="text-right md:text-left">
                            <h1 className="font-inter font-semibold text-lg md:text-xl lg:text-2xl leading-tight md:leading-normal lg:leading-snug text-main-text-color mb-1">LAPTOPS | Up To 30% OFF</h1>
                            <p className="font-inter font-normal text-sm md:text-base lg:text-lg leading-normal lg:leading-snug text-main-text-color mb-4">The ultimate laptops destination <br />
                                shop now and get the best deals</p>
                            <div className="w-full flex justify-center md:justify-start">
                                <button className="bg-blue-950 text-white p-2 border-2-4 rounded w-28 font-light text-sm">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopCategories/>
            <TopSelling/>
            <Gadgets/>
            <HomeAppliances/>
            <Offers/>
            <GaimingStore/>
            <HappyCustomers/>
        </>

    )
}