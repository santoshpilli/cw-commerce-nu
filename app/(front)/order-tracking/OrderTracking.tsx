
export function OrderTracking(){
    return(
        <div className="mt-16">
            <div className="text-center text-xl bg-custom-color-heading ff-inter font-bold">Track Your Order</div>
            <div className="text-center bg-custom-color-heading text-sm font-medium ff-inter md:mx-52 mt-6">
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            </div>
            <div className="md:flex md:gap-5 md:mx-32 mt-7">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-sm color-google-btn ff-inter font-semibold">Order ID</span>
                    </div>
                    <input type="text" className="input input-bordered w-full  rounded-none" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-sm color-google-btn ff-inter font-semibold">Billing Email</span>
                    </div>
                    <input type="text" className="input input-bordered w-full  rounded-none" />
                </label>
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn bg-custom-color-btn text-white w-52 ff-inter text-base font-normal">Track Order</button>
            </div>
        </div>
    )
}