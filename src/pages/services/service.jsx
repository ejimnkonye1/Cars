import bg from '../../images/bg_3.jpg'
import { FaRoute } from "react-icons/fa";
export const Service = () => {
    return(
        <div className="">
           <section 
            className="relative hero-wrap h-screen w-full bg-cover bg-center bg-top" 
            style={{ backgroundImage: `url(${bg})` }} 
            data-stellar-background-ratio="0.5"
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto flex flex-col h-full justify-end">
                <div className="ftco-animate pb-5 pl-12">
                    <p className="breadcrumbs text-white">
                        <span className="mr-2">
                            <a href="index.html" className="hover:text-[#01d28e]">Home <i className="ion-ios-arrow-forward"></i></a>
                        </span>
                        <span className="text-white">Service <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">Our Services</h1>
                </div>
            </div>
        </section>
        <section className="py-16">
    <div className="container mx-auto pl-[100px] pr-[50px]">
        <div className="flex justify-center mb-10">
            <div className="md:w-1/2 text-center">
                <span className="text-[#1089ff] uppercase text-[14px] font-nun leading-loose">Services</span>
                <h2 className="mb-3 text-3xl font-bold font-poppins text-gray-800 tracking-widest">Our Latest Services</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-7 pt-4">
            <div className="text-center ">
                <div className="services services-2 w-full flex flex-col items-center ">
                    <div className="icon flex items-center justify-center mb-4 w-[110px] h-[110px] bg-[#1089ff] rounded-full border-none">
                        <span className=""><FaRoute size='50px' className='text-white ' /> </span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-lg font-semibold  text-gray-900">Wedding Ceremony</h3>
                        <p className='text-gray-700'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full flex flex-col items-center">
                <div className="icon flex items-center justify-center mb-4 w-[110px] h-[110px] bg-[#1089ff] rounded-full border-none">
                        <span className=""><FaRoute size='50px' className='text-white ' /> </span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-lg font-semibold text-gray-900">City Transfer</h3>
                        <p className='text-gray-700'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full flex flex-col items-center">
                <div className="icon flex items-center justify-center mb-4 w-[110px] h-[110px] bg-[#1089ff] rounded-full border-none">
                        <span className=""><FaRoute size='50px' className='text-white ' /> </span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-lg font-semibold text-gray-900">Airport Transfer</h3>
                        <p className='text-gray-700'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full flex flex-col items-center">
                <div className="icon flex items-center justify-center mb-4 w-[110px] h-[110px] bg-[#1089ff] rounded-full border-none">
                        <span className=""><FaRoute size='50px' className='text-white ' /> </span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-lg font-semibold text-gray-900">Whole City Tour</h3>
                        <p className='text-gray-700'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section 
    className="relative  bg-cover bg-no-repeat bg-top bg-center overflow-hidden z-0 h-[380px]" 
    style={{ backgroundImage: `url(${bg})` }}
>
<div className="absolute top-[-120px] left-[-100px] right-0 bottom-[-120px] w-[40%] bg-[#01d28e] opacity-100 transform rotate-[20deg]"></div>
    <div className="container mx-auto relative z-10">
        <div className="flex justify-end items-center pt-[100px] pl-[150px]">
            <div className="md:w-1/2 text-white p-6">
                <h2 className="mb-5 text-3xl font-bold leading-relaxed">Do You Want To Earn<br/> With Us? So Don&apos;t Be<br/> Late.</h2>
                <a href="#" className="btn btn-primary btn-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Become A Driver</a>
            </div>
        </div>
    </div>
    
</section>

        </div>
    )
}