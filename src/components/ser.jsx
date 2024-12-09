import bg from '../images/about.jpg'
export const Ser = () => {
    return(
        <section 
    className="relative  bg-cover bg-no-repeat bg-top bg-center overflow-hidden z-0 h-[380px]" 
    style={{ backgroundImage: `url(${bg})` }}
>
<div className="absolute top-[-120px] left-[-100px] right-0 bottom-[-120px] w-[40%] lg:bg-[#01d28e] opacity-100 transform rotate-[20deg]"></div>
    <div className="container mx-auto relative z-10">
        <div className="flex flex-start lg:justify-end items-center pt-[100px] lg:pl-[150px]">
            <div className="md:w-1/2 text-white p-6">
                <h2 className="mb-5 text-3xl font-bold lg:leading-relaxed">Do You Want To Earn<br/> With Us? So Don&apos;t Be<br/> Late.</h2>
                <a href="#" className="btn btn-primary btn-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Become A Driver</a>
            </div>
        </div>
    </div>
    
</section>
    )
}