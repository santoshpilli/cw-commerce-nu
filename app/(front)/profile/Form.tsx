'use client'

const Form = () => {

  return (
    <>
    <div className="flex md:mx-10 mx-0 md:my-8 my-0">
        <div className="border md:w-1/4 w-2/12 rounded-lg h-[345px] ">
            {/*left screen */}
            <div className="flex gap-3 md:bg-gray-100 p-3" >
                <div className="md:px-3"><img className="w-6 h-6" src='images/material-symbols_dashboard-outline.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Dashboard</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/bag-check_svgrepo.com.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Orders History</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/ph_heart.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Wishlist</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/carbon_location.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Addresses</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/fluent_payment-16-regular.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Payment Methods</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/settings_svgrepo.com.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Account Settings</div>
            </div>
            <div className="flex gap-3 p-3">
                <div className="md:px-3"><img className="w-6 h-6" src='images/logout_svgrepo.com.png'></img></div>
                <div className="ff-inter text-base font-medium text-black hidden md:inline">Log Out</div>
            </div>
        </div>
   
        <div className="md:w-3/4 w-10/12 md:grid md:grid-cols-2">
            {/*right screen */}
            <div className="md:ml-8 ml-2 border rounded-lg h-52">
                <div className="flex justify-center pt-10"><img className="w-16 h-16" src='images/Ellipse49.png'></img></div>
                <div className="text-center ff-inter text-base text-black font-medium">John cane</div>
                <div className="text-center ff-inter text-xs text-gray-400 font-normal">Customer</div>
                <div className="text-center ff-inter text-base text-black font-medium">Edit Profile</div>
            </div>
            <div className="border rounded-lg md:ml-8 ml-2 h-52 mt-4 md:mt-0">
                <div className="pl-7 pt-5 pb-2 ff-inter text-base text-black font-normal">BILLING ADDRESS</div>
                <div className="pl-7 ff-inter text-sm text-black font-normal">John Cane</div>
                <div className="pl-7 font-light ff-inter text-sm text-gray-400">4140 Parker street, Allenton, Tampa, Florida</div>
                <div className="pl-7 ff-inter text-sm text-black font-normal">John.cane@gmail.com</div>
                <div className="pl-7 ff-inter text-sm text-black font-normal pb-4">&#40;651&#41; 555-0110</div>
                <div className="pl-7 ff-inter text-base text-black font-normal">Edit Address</div>
            </div>
            <div className="border rounded-lg ml-8 mt-8 col-span-2 hidden md:inline">
                {/*Only for full screen table code is visble */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="md:p-7 p-2 ff-inter md:text-xl text-sm text-black  font-medium">Recent Order History</div>
                    <div className="md:p-7 p-2 ff-inter md:text-base text-right text-sm text-black font-normal">View All</div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="ff-inter text-sm text-black font-medium">Order ID</th>
                                <th className="ff-inter text-sm text-black font-medium">Date</th>
                                <th className="ff-inter text-sm text-black font-medium">Status</th>
                                <th className="ff-inter text-sm text-black font-medium">Payment status</th>
                                <th className="ff-inter text-sm text-black font-medium">Total amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12345</td>
                                <td className="ff-inter text-sm text-black font-medium">Jan 20,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Delivered</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#19845</td>
                                <td className="ff-inter text-sm text-black font-medium">Feb 2,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Delivered</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12300</td>
                                <td className="ff-inter text-sm text-black font-medium">Mar 11,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">On the way</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#10245</td>
                                <td className="ff-inter text-sm text-black font-medium">April 2,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Order placed</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12995</td>
                                <td className="ff-inter text-sm text-black font-medium">May 12,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Out for delivery</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
    <div className="ml-2 md:hidden inline">
        {/*Only for mobile screen table code is visble */}
        <div className="border rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                    <div className="md:p-7 p-2 ff-inter md:text-xl text-sm text-black  font-medium">Recent Order History</div>
                    <div className="md:p-7 p-2 ff-inter md:text-base text-right text-sm text-black font-normal">View All</div>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="ff-inter text-sm text-black font-medium">Order ID</th>
                                <th className="ff-inter text-sm text-black font-medium">Date</th>
                                <th className="ff-inter text-sm text-black font-medium">Status</th>
                                <th className="ff-inter text-sm text-black font-medium">Payment status</th>
                                <th className="ff-inter text-sm text-black font-medium">Total amount</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12345</td>
                                <td className="ff-inter text-sm text-black font-medium">Jan 20,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Delivered</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#19845</td>
                                <td className="ff-inter text-sm text-black font-medium">Feb 2,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Delivered</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12300</td>
                                <td className="ff-inter text-sm text-black font-medium">Mar 11,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">On the way</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#10245</td>
                                <td className="ff-inter text-sm text-black font-medium">April 2,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Order placed</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                            <tr>
                                <td className="ff-inter text-sm text-black font-medium">#12995</td>
                                <td className="ff-inter text-sm text-black font-medium">May 12,2024</td>
                                <td className="ff-inter text-sm text-black font-medium">Out for delivery</td>
                                <td className="ff-inter text-sm text-black font-medium">Paid</td>
                                <td className="ff-inter text-sm text-black font-medium">₹100</td>
                                <td className="ff-inter text-sm text-black font-medium">View Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>        
    </div>
</>
  )
}

export default Form
