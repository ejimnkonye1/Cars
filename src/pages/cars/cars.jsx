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
export const Cars = () => {
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
                        <span className="text-white">Cars <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">Our Cars</h1>
                </div>
            </div>
        </section>
   
        <section className="ftco-section bg-light">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Car 1 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car1} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 2 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car2} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Range Rover</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Subaru</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 3 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car3} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 4 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car4} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </ div>
                    </div>

                    {/* Car 5 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car5} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Range Rover</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Subaru</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 6 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car6} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 7 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car7} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 8 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car8} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Range Rover</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Subaru</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 9 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car9} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb- 0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 10 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car10} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 11 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car11} alt="Range Rover" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Range Rover</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Subaru</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>

                    {/* Car 12 */}
                    <div className="car-wrap rounded overflow-hidden shadow-lg">
                        <img src={car12} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                        <div className="text p-4">
                            <h2 className="mb-0"><a href="car-single.html" className="text-lg font-semibold">Mercedes Grand Sedan</a></h2>
                            <div className="flex mb-3">
                                <span className="cat">Chevrolet</span>
                                <p className="price ml-auto">$500 <span>/day</span></p>
                            </div>
                            <p className="flex mb-0">
                                <a href="#" className="btn btn-primary py-2 mr-1 bg-blue-500 text-white rounded">Book now</a>
                                <a href="car-single.html" className="btn btn-secondary py-2 ml-1 bg-gray-300 text-gray-700 rounded">Details</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            <ul className="flex justify-center">
                                <li><a href="#">&lt;</a></li>
                                <li className="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul ></div>
                        </div>
                    </div>
                </div>
            
        </section>

        

        </div>
    )
}