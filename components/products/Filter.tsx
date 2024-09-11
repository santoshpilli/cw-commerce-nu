'use client'
import { useState ,useEffect} from "react";

interface Filters {
    inStock: any;  // Ensure this type matches what you expect
  }
  
interface FilterProps {
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  }


const Filter: React.FC<FilterProps> = ({ setFilters }) => {
    const [inStock, setInStock] = useState(false);

    const handleInStockFilter=()=>{
        setInStock(prev=>!prev)

    }
    useEffect(() => {
        setFilters({inStock});
      }, [inStock, setFilters]);

    return(
        <>
            <div className="md:w-1/4">
                <div className="ff-inter font-normal text-lg text-black">Filter</div>
                <div className="ff-inter font-normal text-sm text-gray-300 pb-2">1000 Products</div>
                <hr className="border text-gray-300"></hr>
                <div className="ff-inter font-normal text-lg text-black py-3">Brand</div>
                <div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Apple</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Nokia</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Google</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Samsung</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">One Plus</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Vivo</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                </div>
                <div className="ff-inter font-normal text-xs text-gray-400 pl-8">+100 More</div>
                <hr className="my-3"></hr>
                <div className="ff-inter font-normal text-lg text-black pb-2">Price</div>
                {/* <input type="range" min={0} max="100" value="40" className="range range-xs" />  */}
                {/* <input type="range" min={0} max="100" value="40" className="range range-xs" /> */}

                <div className="ff-inter font-normal text-sm text-black py-2"><span className="text-gray-400 font-normal">Price: </span>50 - 1000 </div>
                <hr className="my-3"></hr>
                <div className="ff-inter font-normal text-lg text-black">Availability</div>
                <div>
                    <div className="flex py-2">
                            <input type="checkbox" className="checkbox border-2" checked={inStock} onChange={()=>handleInStockFilter()} />
                            <div className="pl-2 ff-inter font-normal text-sm text-black">In Stock</div>
                            <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    {/* <div className="flex py-2">
                            <input type="checkbox" className="checkbox border-2" />
                            <div className="pl-2 ff-inter font-normal text-sm text-black">Out of Stock</div>
                            <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;0&#41;</div>
                    </div> */}
                </div>
                <hr className="my-3"></hr>
                <div className="ff-inter font-normal text-lg text-black">Color</div>
                <div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1 border rounded-full w-3 h-3 bg-blue-600"></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Blue</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1  border rounded-full w-3 h-3 bg-black"></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Black</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1  border rounded-full w-3 h-3 bg-red-500"></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Red</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1  border rounded-full w-3 h-3 bg-yellow-300" ></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Yellow</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1 border rounded-full w-3 h-3 bg-white"></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">White</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                    <div className="flex py-2">
                        <input type="checkbox" className="checkbox border-2" />
                        <div className="ml-2 mt-1 border rounded-full w-3 h-3 bg-green-700"></div>
                        <div className="pl-2 ff-inter font-normal text-sm text-black">Green</div>
                        <div className="ml-auto ff-inter font-normal text-xs text-gray-400">&#40;10&#41;</div>
                    </div>
                </div>
                <div className="ff-inter font-normal text-xs text-gray-400 pl-8">+100 More</div>
            </div>
        </>
    )
}
export default Filter