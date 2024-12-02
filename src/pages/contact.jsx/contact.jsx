import bg from '../../images/bg_3.jpg'
import { FaMap } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
export const Contact = () => {
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
                        <span className="text-white">Contact <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">Contact Us</h1>
                </div>
            </div>
        </section>
        <section className="ftco-section contact-section py-10">
            <div className="container mx-auto lg:p-12 p-4">
                <div className="flex flex-wrap mb-5 contact-info">
                    <div className="w-full lg:w-1/3">
                        <div className="mb-5">
                            <div className="border w-full p-4 rounded mb-2 flex">
                                <div className="icon mr-3">
                                    <span className=""><FaMap size='30px' className='text-[#007bff]' /></span>
                                </div>
                                <p>
                                    <span className="font-semibold text-gray-500">Address:<br/></span > <span className='font-semibold text-md font-poppins text-black mb-0'>198 West 21th Street, Suite 721 New York NY 10016</span> 
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="border w-full p-4 rounded mb-2 flex">
                                <div className="icon mr-3">
                                    <span className="icon-mobile-phone"><MdOutlinePhoneIphone size='20px' className='text-[#007bff]' />
                                    </span>
                                </div>
                                <p>
                                    <span className="font-semibold text-gray-500">Phone:</span><br/> <a href="tel://1234567920" className="font-semibold text-md font-poppins text-black mb-0">+ 1235 2355 98</a>
                                </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="border w-full p-4 rounded mb-2 flex">
                                <div className="icon mr-3">
                                    <span className="icon-envelope-o"><IoMdMail size='20px' className='text-[#007bff]'  />
                                    </span>
                                </div>
                                <p>
                                    <span className="font-semibold text-gray-500">Email:</span><br/> <a href="mailto:info@yoursite.com" className="font-semibold text-md font-poppins text-black mb-0">info@yoursite.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 mb-5 lg:pl-5">
                        <form action="#" className="bg-gray-100 p-12 rounded shadow-md font-poppins">
                            <div className="mb-4">
                                <input type="text" className="form-control w-full p-2 border rounded" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control w-full p-2 border rounded" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control w-full p-2 border rounded" placeholder="Subject" />
                            </div>
                            <div className="mb-4">
                                <textarea cols="30" rows="7" className="form-control w-full p-2 border rounded" placeholder="Message"></textarea>
                            </div>
                            <div className="mb-4">
                                <input type="submit" value="Send Message" className="bg-blue-500 text-white py-3 px-5 rounded cursor-pointer" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center">
            <div className="w-full md:w-3/3">
                <div className="relative bg-white w-full h-[400px]  rounded-lg shadow overflow-hidden"> 
                <iframe 
    className="absolute top-0 left-0 w-full h-screen rounded-lg border-0" 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
    frameBorder="0" 
    allowFullScreen 
    aria-hidden="false" 
    tabIndex="0">
</iframe>
                </div>
            </div>
        </div>

            </div>
        </section>

        </div>
    )
}