
import { FaRoute } from "react-icons/fa";
 export const Services = () => {
    return(
        <section className="py-16">
        <div className="container mx-auto lg:pl-[100px] lg:pr-[50px]">
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
    )
 }