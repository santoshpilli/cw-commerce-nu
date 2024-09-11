import Image from 'next/image';
import Link from 'next/link';
import linkedin from '../../public/images/001-linkedin.png';
import facebook from '../../public/images/002-facebook.png';
import instagram from '../../public/images/003-instagram.png';
import twitter from '../../public/images/004-twitter.png';
export function Footer(){
    const sidebarlinks = [
        {
            title: "Contact Info",
            url: "",
            subMenu: [
                {
                    title: "Insta Buys",
                    url: "",
                },
                {
                    title: "Norem ipsum dolor sit",
                    url: "",
                },
                {
                    title: "Support@instabuys.com",
                    url: "",
                },
            ],
        },
        {
            title: "Company",
            url: "",
            subMenu: [
                {
                    title: "Our Vision",
                    url: "",
                },
                {
                    title: "About Us",
                    url: "",
                },
                {
                    title: "Our Team",
                    url: "",
                },
            ],
        },
        {
            title: "Products",
            url: "",
            subMenu: [
                {
                    title: "Televisions",
                    url: "",
                },
                {
                    title: "Laptops",
                    url: "",
                },
                {
                    title: "Mobile Phones",
                    url: "",
                },
                {
                    title: "Home Appliances",
                    url: "",
                },
                {
                    title: "Smart Watches",
                    url: "",
                },
                {
                    title: "Headphones",
                    url: "",
                },
            ],
        },
        {
            title: "Support",
            url: "",
            subMenu: [
                {
                    title: "Customer Service",
                    url: "",
                },
                {
                    title: "Find The Store",
                    url: "",
                },
                {
                    title: "Legal & Privacy",
                    url: "",
                },
                {
                    title: "Contact Us",
                    url: "",
                },
                {
                    title: "Gift Card",
                    url: "",
                },
            ],
        },
        {
            title: "Useful Links",
            url: "",
            subMenu: [
                {
                    title: "Help & Support",
                    url: "",
                },
                {
                    title: "FAQs",
                    url: "",
                },
                {
                    title: "Return Policy",
                    url: "",
                },
                {
                    title: "Store Location",
                    url: "",
                },
            ],
        },
    ];
    return(
        <div className="flex flex-col bg-cover bg-gray-200 mt-7 h-screen overflow-hidden mt-auto">
        <h1 className="text-2xl font-bold mb-4 text-center mt-6">Get Our Latest Deals</h1>
        <p className="text-base font-medium mb-4 text-center mt-0">Our Best Promotions Sent To Your Inbox</p>
        <div className="border-b-[1px] border-gray-400 mr-16 ml-16">
            <form className="flex items-center w-full max-w-[550px] mx-auto h-[40px] sm:h-[50px] mb-8 ">
                <input
                    required
                    placeholder="Your Email Address"
                    type="email"
                    style={{ borderRadius: '4px' }}
                    className="bg-white h-10 w-full px-3 py-1 outline-none text-xs sm:text-sm mr-2 placeholder-gray-800"
                />
                <button
                    type="submit"
                    className="bg-[#9BD405] hover:bg-[#9BD405] text-black px-3 py-1 rounded-lg flex items-center justify-center h-[42px]  w-1/3 sm:w-1/3 border-b border-gray-400"
                >
                    <span className="flex text-center whitespace-nowrap">Subscribe</span>
                    <i className="bi bi-arrow-right text-white"></i>
                </button>
            </form>
            <hr style={{ color: 'black' }} />
        </div>
        {/* Sidebar Links */}
        <div className="flex flex-col mt-5 border-t-2 border-[#E4E7EC] max-w-[1434px] mx-3">
            <div className="flex flex-col lg:flex-row">
                {sidebarlinks.map((link, index) => (
                    <div key={index} className="flex flex-col lg:flex-1 mr-[6rem] mb-6 lg:mb-0">
                        <a href={link.url} className="text-lg font-semibold pl-[1rem] mb-2">{link.title}</a>
                        <ul>
                            {link.subMenu
                                .map((item, idx) => (
                                    <li key={idx} className="text-black hover:text-black text-sm mb-1 ml-4">
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="border-b-[1px] border-gray-400 mt-10 mr-16 ml-16 flex flex-col lg:flex-row items-center lg:items-start" />
            <div className="flex justify-between max-w-[603px] lg:w-auto lg:mr-auto">
                <Link
                    href="/info#privacy"
                    className="font-inter font-normal footer-text text-black mt-8  pl-14 mx-8  ml-6 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
                >
                    Privacy policy
                </Link>
                <Link
                    href="/info#cookie"
                    className="font-inter font-normal footer-text text-black mt-8 pr-14 mx-2 ml-6 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
                >
                    Cookies
                </Link>
                <Link
                    href="/info#terms"
                    className="font-inter font-normal footer-text text-black mt-8 pr-20 mx-2 ml-6 lg:mx-0 transition-all ease-in duration-200 hover:text-blue"
                >
                    Terms of Use
                </Link>
            </div>
            <div className="flex justify-end items-center lg:ml-auto">
                <Image src={facebook} alt="Facebook" className="w-6 h-6 mr-2 mb-[9rem]" />
                <Image src={instagram} alt="Instagram" className="w-6 h-6 mr-2 mb-[9rem]" />
                <Image src={twitter} alt="Twitter" className="w-6 h-6 mr-2 mb-[9rem]" />
                <Image src={linkedin} alt="Linkedin" className="w-6 h-6 mr-2 mb-[9rem]" />
            </div>
        </div>
    </div>
    )
}