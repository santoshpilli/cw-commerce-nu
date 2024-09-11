'use client';
import React,{useState} from 'react';
import Home from './home';
import Pages from './pages';
import Products from './products';
import Blog from './blog';

const SideBar = ({setSideBarOpen}) => {
  const handleSideBar=(e)=>{
e.preventDefault()
console.log('clicked')
setSideBarOpen(false)
console.log('clicked 2')
  }
const [home, setHome] = useState(false)
const [products, setProducts] = useState(false)
const [blog, setBlog] = useState(false)
const [pages, setPages] = useState(false)

const handleMouseOver=(item)=>{
  if(item==='Home'){
    setHome(true)
    setBlog(false)
    setPages(false)
    setProducts(false)
  }else if(item==='Products'){
    setHome(false)
    setBlog(false)
    setPages(false)
    setProducts(true)
  }
  else if(item==='Blog'){
    setHome(false)
    setBlog(true)
    setPages(false)
    setProducts(false)
  }
  else if(item==='Pages'){
    setHome(false)
    setBlog(false)
    setPages(true)
    setProducts(false)
  }
}
const handleMouseLeave=()=>{
  setHome(false)
    setBlog(false)
    setPages(false)
    setProducts(false)
}

  return (
    <div className=' z-50 flex align-i flex-row h-[400px]  bg-white w-[200px] absolute top-[38px] left-0'>
      <ul className='flex flex-col text-start text-black gap-2 pl-5' onMouseLeave={handleMouseLeave}>
        <li className="footer-text  w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9] transform transition-transform duration-300 ease-in-out"
                onMouseOver={()=>handleMouseOver('Home')}
        >Home</li>
        {home &&  <Home variant="other"/> }
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]"
                onMouseOver={()=>handleMouseOver('Products')}
        >Products</li>
        {products && <Products variant='other'/>}
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]"
                onMouseOver={()=>handleMouseOver('Blog')}
        >Blog</li>
        {blog && <Blog variant='other'/>}
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]"
                onMouseOver={()=>handleMouseOver('Pages')}
      >Pages</li>
        {pages && <Pages variant='other'/>}
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]">Contact</li>
        <li className="footer-text   w-full cursor-pointer px-4 py-2 text-[101828] hover:bg-[#D9D9D9]">Todays deals</li>
      </ul>
      <button className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-md" onClick={handleSideBar} >X</button>
    </div>
  );
}

export default SideBar;
