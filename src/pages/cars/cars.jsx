import bg from '../../images/bg_3.jpg'
import car1 from '../../images/car-1.jpg'
import car2 from '../../images/car-2.jpg'
import car3 from '../../images/car-3.jpg'
import car4 from '../../images/car-4.jpg'
import car5 from '../../images/car-5.jpg'
import car6 from '../../images/car-6.jpg'
import car7 from '../../images/car-7.jpg'
import car8 from '../../images/car-8.jpg'
import car9 from '../../images/car-9.jpg'
import car10 from '../../images/car-10.jpg'
import car11 from '../../images/car-11.jpg'
import car12 from '../../images/car-12.jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
export const Cars = () => {
    
    return(
        <div className="">
           <section 
            className="relative hero-wrap h-screen w-full bg-cover bg-center bg-top" 
            style={{ backgroundImage: `url(${bg})` }} 
            data-stellar-background-ratio="0.5"
        >
            <div className="absolute inset-0 bg-black opacity-0"></div>
            <div className="container mx-auto flex flex-col h-full justify-end">
                <div className="ftco-animate pb-5 pl-12">
                <p className="breadcrumbs text-white text-sm mb-2 z-50 uppercase font-medium">
    <span className="mr-2">
        <a href="index.html" className="hover:text-[#01d28e] font-poppins">
            Home<span> &gt;</span>
        </a>
    </span>
    <span className="text-white font-poppins">
        Cars<span> &gt;</span>
    </span>
</p>
                    <h1 className="mb-3 text-[44px] text-white leading-[1.1] font-normal z-50 font-poppins ">Choose Your Car</h1>
                </div>
            </div>
        </section>
   
        <section className="ftco-section bg-[#f8f9fa] py-16">
    <div className="container mx-auto lg:pl-20 lg:pr-20 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Car 1 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car1} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 2 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car2} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Range Rover</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Subaru</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 3 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car3} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href ="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 4 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car4} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 5 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car5} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Range Rover</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Subaru</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 6 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car6} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font -poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 7 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car7} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 8 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car8} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Range Rover</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Subaru</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 9 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car9} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 10 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car10} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 11 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car11} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Range Rover</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Subaru</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>

            {/* Car 12 */}
            <div className="car-wrap rounded overflow-hidden shadow-lg">
                <img src={car12} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                <div className="text pt-5 pr-7 pb-7 pl-7">
                    <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold text-[1.3rem] font-paci">Mercedes Grand Sedan</a></h2>
                    <div className="flex mb-3">
                        <span className="cat block mb-0 text-black/20 text-[1rem] font-normal font-sans">Chevrolet</span>
                        <p className="text-[#1089ff] mb-0 font-semibold ml-auto">$500 <span className='text-black/20 text-xs font-normal'>/day</span></p>
                    </div>
                    <p className="flex justify-center mb-0 w-full">
                        <a href="#" className="py-2 px-2 mr-1 bg-blue-500 text-white rounded w-1/2 text-center font-poppins">Book now</a>
                        <a href="car-single.html" className="bg-[#01d28e] border-[#01d28e] py-2 px-2 ml-1 text-white rounded w-1/2 text-center font-poppins">Details</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="flex justify-center pt-[100px]">
            <nav aria-label="Pagination">
                <ul className="flex items-center space-x-1">
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]" aria-label="Previous">
                            <FaChevronLeft />
                        </a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-white border border-[#e6e6e6] bg-[#1089ff] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]">1</a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]">2</a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]">3</a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]">4</a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]">5</a>
                    </li>
                    <li className="inline-block mb-1 font-normal">
                        <a href="#" className="inline-flex items-center justify-center text-[#1089ff] border border-[#e6e6e6] rounded-full w-10 h-10 leading-[40px] hover:bg-[#e6e6e6]" aria-label="Next">
                            <FaChevronRight />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</section>

        

        </div>
    )
}