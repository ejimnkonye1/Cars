import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto lg:pl-20 lg:pr-10 p-4 lg:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
                    <div className="mb-6">
                        <div className="mb-4">
                            <h2 className="text-[1.3rem] font-poppins font-extrabold mb-10 uppercase">
                                <a href="#" className="logo text-white">Car<span className="text-[#01d28e]">book</span></a>
                            </h2>
                           <div className=''>
                           <p className="text-gray-300 mt-0 mb-4 text-lg">
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
</p>
                            <ul className="flex lg:pt-10">
                                <li className="relative w-12 h-12 mr-4">
                                    <a href="#" className="flex items-center justify-center w-full h-full bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition">
                                        <FaTwitter className="text-xl" />
                                    </a>
                                </li>
                                <li className="relative w-12 h-12 mr-4">
                                    <a href="#" className="flex items-center justify-center w-full h-full bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition">
                                        <FaFacebookF className="text-xl" />
                                    </a>
                                </li>
                                <li className="relative w-12 h-12">
                                    <a href="#" className="flex items-center justify-center w-full h-full bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition">
                                        <FaInstagram className="text-xl" />
                                    </a>
                                </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                    <div className="mb-6 lg:pl-12">
                        <div className="mb-4">
                            <h2 className="font-normal text-white font-poppins mb-10 text-xl">Information</h2>
                            <ul className="list-none ">
                                <li><a href="#" className="py-2 block text-gray-300 text-lg ">About</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Services</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Terms and Conditions</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Best Price Guarantee</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Privacy &amp; Cookies Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="mb-4">
                            <h2 className="font-normal text-white font-poppins mb-10 text-xl">Customer Support</h2>
                            <ul className="list-none ">
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">FAQ</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Payment Option</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Booking Tips</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">How it works</a></li>
                                <li><a href="#" className="py-2 block text-gray-300  text-lg">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-6 lg:pr-10">
                        <div className="mb-4">
                            <h2 className="font-normal text-white font-poppins mb-10 text-xl">Have a Questions?</h2>
                            <div className="mt-5">
                            <ul className="list-none ">
    <li className="flex items-start mb-4 leading-6">
        <FaMapMarkerAlt size='25'  className="w-10 text-lg pt-1 text-white" />
        <span className="block ml-2 pl-6 align-top text-gray-300">203 Fake St. Mountain View, San Francisco, California, USA</span>
    </li>
    <li className="flex items-start mb-4 leading-6">
        <FaPhoneAlt size='25'  className="w-10 text-lg pr-6 pt-1 text-white" />
        <span className="block ml-2 align-top">+2 392 3929 210</span>
    </li>
    <li className="flex items-start mb-4 leading-6">
        <FaEnvelope size='25' className="w-10 text-lg pr-6 pt-1 text-white" />
        <span className="block ml-2 align-top">info@yourdomain.com</span>
    </li>
</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center text-lg text-gray-300">
                    <p>
                        Copyright &copy; 2024 All rights reserved 
                    </p>
                </div>
            </div>
        </footer>
    )
}