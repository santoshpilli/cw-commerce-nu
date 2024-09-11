import {DetailsSection} from './DetailsSection'

export function BillingDetails(){
    return(
        <div className='flex flex-col md:flex-row'>
        <div className="flex flex-col justify-center items-left text-black pl-[5.5rem] md:w-1/2  ">
            <h1 className="text-lg md:text-base lg:text-lg xl:text-xl font-bold mb-8 mt-15 mr-2 ">
                Billing Details
            </h1>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        First Name
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>
                <div className="mb-4 md:ml-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        Last Name
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>
            </div>
            {/* Additional input fields */}
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0 w-full">
                    <h2 className="text-sm flex items-center w-full">
                        Email Address
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="email" className="input input-bordered max-w-xl h-10 md:w-72" />
                </div>
                <div className="mb-4 md:ml-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        Contact Number
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>
            </div>
            {/* Additional input fields below First Name and Last Name */}
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0 m">
                    <h2 className="text-sm flex items-center">
                        Company Name(Optional)

                    </h2>
                    <input type="text" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " />
                </div>

            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0 m">
                    <h2 className="text-sm flex items-center">
                        Country / Region
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " />
                </div>

            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0 m">
                    <h2 className="text-sm flex items-center">
                        Address
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " />
                </div>

            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0 m">
                    <h2 className="text-sm flex items-center">


                    </h2>
                    <input type="text" className="input input-bordered max-w-[38rem]  h-10 md:w-lvw " />
                </div>

            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        Town / City
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>
                <div className="mb-4 md:ml-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        State
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>



            </div>
            <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mr-4 md:mb-0">
                    <h2 className="text-sm flex items-center">
                        Pincode
                        <span className="text-red-500">*</span>
                    </h2>
                    <input type="text" className="input input-bordered max-w-md h-10 md:w-72" />
                </div>




            </div>
            <div className="mb-4 md:mr-4 md:mb-0">
                {/* Checkbox */}
                <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                <label htmlFor="checkbox" className="ml-2 text-sm mb-4">Ship to a different address</label>

            </div>
            <div className="mb-4 md:mr-4 md:mb-0">
                {/* Checkbox */}
                <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                <label htmlFor="checkbox" className="ml-2 text-sm mb-4">Save this information for next time</label>

            </div>
            {/* More input fields */}
        </div>
        <div className="md:w-1/2 md:ml-10">
            <DetailsSection />
        </div> 
    </div>
    )
}