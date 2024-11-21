import bg from '../../images/bg_1.jpg';
import { FaPlay } from "react-icons/fa6";

export const Homepage = () => {
    return (
        <div className="relative hero-wrap bg-cover bg-center w-full p-40 z-5" style={{ backgroundImage: `url('${bg}')` }}>
            <div className="absolute inset-0 bg-black opacity-15"></div>
            <div className="container mx-auto flex justify-center items-center h-screen">
                <div className="text-center w-full lg:w-[800px] lg:pb-[100px]"> 
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 z-10 lg:whitespace-nowrap">Fast &amp; Easy Way To Rent A Car</h1>
                    <p className="text-lg text-white mb-6">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.</p>
                    <a href="https://vimeo.com/45830194" className="flex items-center justify-center mt-4">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#01d28e] text-white">
                            <span className="text-sm"><FaPlay /></span> 
                        </div>
                        <div className="border-t border-white h-1 w-12 mx-2"></div>
                        <div className="ml-4 text-white">
                            <span>Easy steps for renting a car</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};