
export function DropUs(){
    return(
        <>
            <div className='flex flex-col md:flex-row pt-2 '>
                <div className="flex flex-col justify-center items-left text-black pl-[5.5rem] md:w-1/2  mb-12">
                    <h1 className="text-lg md:text-base lg:text-lg xl:text-xl font-bold mb-8 mt-2 mr-2 ">
                        Drop us a message
                    </h1>
                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="mb-4 md:mr-4 md:mb-0">
                            <h2 className="text-sm flex items-center">
                                Name
                                <span className="text-red-500">*</span>
                            </h2>
                            <input type="text" className="input input-bordered max-w-md h-9 md:w-72 placeholder-sm" placeholder="First Name" style={{ fontSize: '12px' }} />
                        </div>
                        <div className="mb-4 md:ml-4 md:mb-0">
                            <h2 className="text-sm flex items-center">


                            </h2>
                            <input type="text" className="input input-bordered max-w-md h-10 mt-4 md:w-72" placeholder="Last Name" style={{ fontSize: '12px' }} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="mb-4 md:mr-4 md:mb-0">
                            <h2 className="text-sm flex items-center ">
                                Email
                                <span className="text-red-500">*</span>
                            </h2>
                            <input type="email" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " placeholder="Enter your email address" style={{ fontSize: '12px' }} />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="mb-4 md:mr-4 md:mb-0 m">
                            <h2 className="text-sm flex items-center mt-1">
                                Contact Number
                                <span className="text-red-500">*</span>

                            </h2>
                            <input type="text" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " placeholder="Enter your contact number" style={{ fontSize: '12px' }} />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row mb-4 mt-2">
                        <div className="mb-4 md:mr-4 md:mb-0 m">
                            <h2 className="text-sm flex items-center">
                                Message Or Comment
                                <span className="text-red-500">*</span>
                            </h2>
                            <input type="text" className="input input-bordered max-w-[38rem]  h-32 md:w-lvw align-top placeholder-top text-sm " placeholder="Your message" style={{ fontSize: '12px' }} />
                        </div>

                    </div>
                    <button className="btn btn-xs sm:btn-sm md:btn-md bg-blue-950  w-36 text-white">Submit</button>
                    {/* <button className="btn btn-xs sm:btn-sm md:btn-md bg-blue-950 w-full md:w-36 text-white self-en">Submit</button> */}







                </div>
                <div className="mx-auto sm:ml-[5.3rem] sm:mt-5 sm:mx-4 md:mx-[11rem] md:mr-[3rem]  w-[27rem] sm:w-sm md:w-[40rem] lg:w-[40rem] h-[36rem] bg-gray-200 rounded-lg mt-5">
                    <div className=" mt-[2.5rem] ml-5 h-10">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M15 2.8125C10.3418 2.8125 6.5625 6.40957 6.5625 10.8398C6.5625 15.9375 12.1875 24.0158 14.2529 26.8061C14.3387 26.9238 14.451 27.0197 14.5809 27.0858C14.7107 27.1518 14.8543 27.1863 15 27.1863C15.1457 27.1863 15.2893 27.1518 15.4191 27.0858C15.549 27.0197 15.6613 26.9238 15.7471 26.8061C17.8125 24.017 23.4375 15.9416 23.4375 10.8398C23.4375 6.40957 19.6582 2.8125 15 2.8125Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 14.0625C16.5533 14.0625 17.8125 12.8033 17.8125 11.25C17.8125 9.6967 16.5533 8.4375 15 8.4375C13.4467 8.4375 12.1875 9.6967 12.1875 11.25C12.1875 12.8033 13.4467 14.0625 15 14.0625Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className="text-black font-semibold">Our Store</h1>
                        </div>
                        <div>
                            <p className="text-xs text-black mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et elit fermentum vulputate libero et velit interdum, ac aliquet odio </p>
                        </div>
                    </div>
                    <div className=" mt-[5rem] ml-5 h-10 ">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M15 3.75C8.78906 3.75 3.75 8.78906 3.75 15C3.75 21.2109 8.78906 26.25 15 26.25C21.2109 26.25 26.25 21.2109 26.25 15C26.25 8.78906 21.2109 3.75 15 3.75Z" stroke="black" stroke-miterlimit="10" />
                                <path d="M15 7.5V15.9375H20.625" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className="text-black font-semibold">Hours Of Operation</h1>
                        </div>
                        <div>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                            <p className="text-xs text-black mt-3">Monday: 12-6 PM </p>
                        </div>
                    </div>
                    <div className=" mt-[13rem] ml-5 h-10 ">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M24.9375 26.25C22.3333 26.25 19.7604 25.6821 17.2188 24.5462C14.6771 23.4104 12.3646 21.8013 10.2813 19.7188C8.19792 17.6354 6.58875 15.3229 5.45375 12.7812C4.31875 10.2396 3.75083 7.66667 3.75 5.0625C3.75 4.6875 3.875 4.375 4.125 4.125C4.375 3.875 4.6875 3.75 5.0625 3.75H10.125C10.4167 3.75 10.6771 3.84917 10.9063 4.0475C11.1354 4.24583 11.2708 4.48 11.3125 4.75L12.125 9.125C12.1667 9.45833 12.1562 9.73958 12.0938 9.96875C12.0312 10.1979 11.9167 10.3958 11.75 10.5625L8.71875 13.625C9.13542 14.3958 9.63 15.1404 10.2025 15.8588C10.775 16.5771 11.4054 17.27 12.0938 17.9375C12.7396 18.5833 13.4167 19.1825 14.125 19.735C14.8333 20.2875 15.5833 20.7925 16.375 21.25L19.3125 18.3125C19.5 18.125 19.745 17.9842 20.0475 17.89C20.35 17.7958 20.6467 17.77 20.9375 17.8125L25.25 18.6875C25.5417 18.7708 25.7812 18.9221 25.9688 19.1412C26.1562 19.3604 26.25 19.605 26.25 19.875V24.9375C26.25 25.3125 26.125 25.625 25.875 25.875C25.625 26.125 25.3125 26.25 24.9375 26.25ZM7.53125 11.25L9.59375 9.1875L9.0625 6.25H6.28125C6.38542 7.10417 6.53125 7.94792 6.71875 8.78125C6.90625 9.61458 7.17708 10.4375 7.53125 11.25ZM18.7188 22.4375C19.5312 22.7917 20.3596 23.0729 21.2037 23.2812C22.0479 23.4896 22.8967 23.625 23.75 23.6875V20.9375L20.8125 20.3438L18.7188 22.4375Z" fill="black" />
                            </svg>
                            <h1 className="text-black font-semibold">Phone Number</h1>
                        </div>
                        <div>
                            <p className="text-xs text-black mt-3">Mobile : (+ 91-9902345103)</p>

                        </div>
                    </div>
                    <div className=" mt-[3rem] ml-5 h-10 ">

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 30" fill="none">
                                <path d="M6.5625 5H23.4375C24.4752 4.99993 25.4735 5.39694 26.2278 6.10959C26.982 6.82224 27.435 7.79649 27.4938 8.8325L27.5 9.0625V20.9375C27.5001 21.9752 27.1031 22.9735 26.3904 23.7278C25.6778 24.482 24.7035 24.935 23.6675 24.9938L23.4375 25H6.5625C5.52483 25.0001 4.52646 24.6031 3.77221 23.8904C3.01796 23.1778 2.565 22.2035 2.50625 21.1675L2.5 20.9375V9.0625C2.49993 8.02483 2.89694 7.02646 3.60959 6.27221C4.32224 5.51796 5.29649 5.065 6.3325 5.00625L6.5625 5ZM25.625 11.7163L15.4375 17.0788C15.3225 17.1395 15.196 17.1757 15.0663 17.1849C14.9365 17.1942 14.8062 17.1763 14.6838 17.1325L14.5638 17.08L4.375 11.7175V20.9375C4.37502 21.4865 4.58146 22.0154 4.95335 22.4192C5.32524 22.8231 5.83537 23.0723 6.3825 23.1175L6.5625 23.125H23.4375C23.9867 23.125 24.5158 22.9183 24.9196 22.5462C25.3235 22.174 25.5726 21.6636 25.6175 21.1162L25.625 20.9375V11.7163ZM23.4375 6.875H6.5625C6.01351 6.87502 5.4846 7.08146 5.08076 7.45335C4.67692 7.82524 4.42767 8.33537 4.3825 8.8825L4.375 9.0625V9.59875L15 15.19L25.625 9.5975V9.0625C25.625 8.51331 25.4183 7.98424 25.0462 7.58036C24.674 7.17649 24.1636 6.92738 23.6162 6.8825L23.4375 6.875Z" fill="black" />
                            </svg>
                            <h1 className="text-black font-semibold">Email Address</h1>
                        </div>
                        <div>
                            <p className="text-xs text-black mt-3">Example@example.com</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}