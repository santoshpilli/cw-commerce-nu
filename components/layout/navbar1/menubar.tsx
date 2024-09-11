import Home from '../../menu-items/home'
import Products from '../../menu-items/products'
import Pages from '../../menu-items/pages'
import Blog from '../../menu-items/blog'
import SideBar from '../../menu-items/side-bar'

import { useState } from 'react'
import Image from 'next/image'

export function MenuBar(){
    const [home, setHome] = useState(false)
    const [products, setProducts] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const handleMouseOver=(item:string)=>{
        if(item==='Home'){
            setHome(true)
            setPages(false)
            setProducts(false)
            setBlog(false)
        }
        else if(item==='Products'){
            setHome(false)
            setPages(false)
            setProducts(true)
            setBlog(false)
        }
        else if(item==='Blog'){
            setHome(false)
            setPages(false)
            setProducts(false)
            setBlog(true)
        }
        else if(item==='Pages'){
            setHome(false)
            setPages(true)
            setProducts(false)
            setBlog(false)
        }
    }
   const handleMouseLeave=()=>{
    setHome(false)
    setPages(false)
    setProducts(false)
    setBlog(false)
   }
    return(
        <div className='relative'>
            <div className=" mx-16 pl-1 hidden lg:inline-flex ">
                <div className="w-1/5 ">
                    <div className="bg-custom-color-btn border flex mr-5 h-12">
                        {/* <img src='images/bitcoin-icons_menu-filled.png' className="w-5 h-5 my-3 ml-3"></img> */}
                        {/* <Image alt='' src='/images/bitcoin-icons_menu-filled.png' width={20} height={20} className="w-5 h-5 my-3 ml-3"/> */}
                        <select className="text-white bg-custom-color-btn ff-inter p-3" >
  <option className="text-black bg-gray-200 "    >Select By Category</option>
  <optgroup className="text-black bg-gray-200 " label="Electronics">
    <option className="text-black bg-gray-200 ">Mobile</option>
    <option className="text-black bg-gray-200">Laptop</option>
    <option className="text-black bg-gray-200">Tv</option>
  </optgroup>
  <optgroup className="text-black bg-gray-200 " label="Accessories">
    <option className="text-black bg-gray-200 ">Speaker</option>
    <option className="text-black bg-gray-200">SmartWatch</option>
    <option className="text-black bg-gray-200">HeadPhone</option>
  </optgroup>

</select>
                        {/* <img src='images/mingcute_down-line2.png' className="w-5 h-5 mt-3"></img> */}
                        {/* <Image alt='' src='/images/mingcute_down-line2.png' width={20} height={20} className="w-5 h-5 mt-3"/> */}

                    </div>
                </div>
                <div className="w-4/5 flex gap-8 ml-20" onMouseLeave={handleMouseLeave}>
                    <div className="flex flex-col  relative" >
                        <div onMouseOver={()=>handleMouseOver('Home')} className='flex flex-row'>
                        <div className="py-3 color-menu-headings text-sm ff-inter font-medium ">Home</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            {/* <img src='images/mingcute_down-line.png' className="h-4 w-4"></img> */}
                        <Image alt='' src='/images/mingcute_down-line.png' width={20} height={20} className={`h-4 w-4 ${home ? 'rotate-180' : ''}`}/>
                        </div>
                        </div>
                        <div>
                    {home && <Home variant="default" />}
                        </div>
                    </div>
                    <div className="flex flex-col relative" >
                        <div  onMouseOver={()=>handleMouseOver('Products')} className='flex flex-row'>
                        <div className="py-3 color-menu-headings text-sm ff-inter font-medium ">Products</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            {/* <img src='images/mingcute_down-line.png' className="h-4 w-4"></img> */}
                        <Image alt='' src='/images/mingcute_down-line.png' width={20} height={20} className={`h-4 w-4 ${products ? 'rotate-180' : ''}`}/>
                        </div>
                        </div>
                        <div >
                    {products && <Products  variant="default"/>}
                        </div>
                    </div>
                    <div className="flex flex-col relative" >
                        <div  onMouseOver={()=>handleMouseOver('Blog')}  className='flex flex-row'>
                        <div className="py-3 color-menu-headings text-sm ff-inter font-medium ">Blog</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            {/* <img src='images/mingcute_down-line.png' className="h-4 w-4"></img> */}
                        <Image alt='' src='/images/mingcute_down-line.png' width={20} height={20} className={`h-4 w-4 ${blog ? 'rotate-180' : ''}`}/>
                        </div>
                        </div>
                        <div>
                    {blog && <Blog  variant="default" />}
                        </div>
                    </div>
                    <div className="flex flex-col  relative" >
                        <div  onMouseOver={()=>handleMouseOver('Pages')}  className='flex flex-row'>
                        <div className="py-3 color-menu-headings text-sm ff-inter font-medium ">Pages</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            {/* <img src='images/mingcute_down-line.png' className="h-4 w-4"></img> */}
                        <Image alt='' src='/images/mingcute_down-line.png' width={20} height={20} className={`h-4 w-4 ${pages ? 'rotate-180' : ''}`}/>
                        </div>
                        </div>
                        <div >
                    {pages && <Pages variant="default"/>}
                        </div>
                    </div>
                    {/* <div className="flex">
                        <div className="pt-3 color-menu-headings ff-inter text-sm font-medium">Products</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            <Image alt=''src='/images/mingcute_down-line.png' height={20} width={20} className="h-4 w-4" />
                            <img src='images/mingcute_down-line.png' className="h-4 w-4"></img>
                            </div>
                    </div> */}
                    {/* <div className="flex">
                        <div className="pt-3 color-menu-headings ff-inter text-sm font-medium">Blog</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            <img src='images/mingcute_down-line.png' className="h-4 w-4"></img>
                            <Image alt=''height={20} width={20} src='/images/mingcute_down-line.png' className="h-4 w-4"/>
                            </div>
                    </div> */}
                    {/* <div className="flex">
                        <div className="pt-3 color-menu-headings ff-inter text-sm font-medium">Pages</div>
                        <div className="ml-1 mt-3 pt-0.5">
                            {/* <img src='images/mingcute_down-line.png' className="h-4 w-4"></img> */}
                            {/* <Image alt='' height={20} width={20} src='/images/mingcute_down-line.png' className="h-4 w-4"/> */}
                            {/* </div> */}
                    {/* </div>  */}
                    <div className="pt-3 ff-inter color-menu-headings text-sm font-medium">Contact</div>
                    <div className="pt-3 ff-inter color-menu-headings text-sm font-medium">Today`s Deals</div>
                    
                </div>
            </div>
                <span
            className="lg:hidden  cursor-pointer"
            onClick={() => setSideBarOpen(prevState => !prevState)}
            >
                        <Image alt='' src='/images/bitcoin-icons_menu-filled.png' width={40} height={40} className={`w-5 h-5 my-3 ml-3 bg-black ${sideBarOpen?'rotate-90':''}`}/>
                        {sideBarOpen && <SideBar setSideBarOpen={setSideBarOpen}/>}
                        </span>
        </div>
    )
}