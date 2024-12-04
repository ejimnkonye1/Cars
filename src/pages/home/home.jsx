import bg from '../../images/bg_1.jpg';
import { FaPlay } from "react-icons/fa6";
import { Testimonial } from '../../components/testimonial'
export const Homepage = () => {
    return (
        <div>
            
        
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
        <section className="ftco-section ftco-no-pt bg-light">
    <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
            <div className="w-full featured-top">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/3 px-2 d-flex align-items-center">
                        <form action="#" className="request-form ftco-animate bg-primary p-6 rounded-lg">
                            <h2 className="text-white text-xl mb-4">Make your trip</h2>
                            <div className="form-group mb-4">
                                <label htmlFor="" className="label text-white">Pick-up location</label>
                                <input type="text" className="form-control w-full p-2 rounded" placeholder="City, Airport, Station, etc" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="" className="label text-white">Drop-off location</label>
                                <input type="text" className="form-control w-full p-2 rounded" placeholder="City, Airport, Station, etc" />
                            </div>
                            <div className="flex mb-4">
                                <div className="form-group mr-2 w-1/2">
                                    <label htmlFor="" className="label text-white">Pick-up date</label>
                                    <input type="text" className="form-control w-full p-2 rounded" id="book_pick_date" placeholder="Date" />
                                </div>
                                <div className="form-group ml-2 w-1/2">
                                    <label htmlFor="" className="label text-white">Drop-off date</label>
                                    <input type="text" className="form-control w-full p-2 rounded" id="book_off_date" placeholder="Date" />
                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="" className="label text-white">Pick-up time</label>
                                <input type="text" className="form-control w-full p-2 rounded" id="time_pick" placeholder="Time" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Rent A Car Now" className="btn btn-secondary py-3 px-4 bg-gray-600 text-white rounded" />
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-2/3 px-2 d-flex align-items-center">
                        <div className="services-wrap rounded-lg w-full bg-white p-6 shadow-md">
                            <h3 className="heading-section mb-4 text-2xl">Better Way to Rent Your Perfect Cars</h3>
                            <div className="flex flex-wrap mb-4">
                                <div className="w-full md:w-1/3 p-2 d-flex align-self-stretch">
                                    <div className="services w-full text-center p-4 border rounded-lg shadow">
                                        <div className="icon d-flex align-items-center justify-content-center mb-2">
                                            <span className="flaticon-route text-4xl"></span>
                                        </div>
                                        <div className="text w-full">
                                            <h3 className="heading mb-2 text-lg">Choose Your Pickup Location</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2 d-flex align-self-stretch">
                                    <div className="services w-full text-center p-4 border rounded-lg shadow">
                                        <div className="icon d-flex align-items-center justify-content-center mb-2">
                                            <span className="flaticon-handshake text-4xl"></span>
                                        </div>
                                        <div className="text w-full">
                                            <h3 className="heading mb-2 text-lg">Select the Best Deal</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/3 p-2 d-flex align-self-stretch">
                                    <div className="services w-full text-center p-4 border rounded-lg shadow">
                                        <div className="icon d-flex align-items-center justify-content-center mb-2">
                                            <span className="flaticon-rent text-4xl"></span>
                                        </div>
                                        <div className="text w-full">
                                            <h3 className="heading mb-2 text-lg">Reserve Your Rental Car</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                <a href="#" className="btn btn-primary py-3 px-4 bg-blue-600 text-white rounded">Reserve Your Perfect Car</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Testimonial />
        </div>
    );
};