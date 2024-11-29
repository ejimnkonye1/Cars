import bg from '../../images/bg_3.jpg'
import car1 from '../../images/car-1.jpg' 
import car2 from '../../images/car-2.jpg' 
import { FaStar } from 'react-icons/fa';
export const Pricing = () => {
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
                        <span className="text-white">Pricing <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">Pricing</h1>
                </div>
            </div>
        </section>
        
        <section className="ftco-section ftco-cart">
            <div className="container mx-auto pl-[100px] pr-[70px] pt-[100px] py-10 w-full  mx-auto">
                <div className="row">
                    <div className="col-md-12 animate__animated">
                        <div className="car-list">
                            <table className="min-w-full bg-white ">
                                <thead className=" text-white">
                                    <tr className="text-center">
                                        <th className="px-4 py-2">&nbsp;</th>
                                        <th className="px-4 py-2">&nbsp;</th>
                                        <th className="relative bg-[#1089ff] heading px-2 py-10">
    Per Hour Rate
    <span className="absolute bottom-[-20px] w-full px-0  left-0 right-0 block w-0 h-0 border-solid border-[10px] border-transparent border-t-[#1089ff] border-l-[100px] border-r-[100px] mx-auto z-10"></span>
</th>
<th className="relative bg-gray-700 heading px-2 py-10">
    Per Hour Rate
    <span className="absolute bottom-[-20px] w-full px-0  left-0 right-0 block w-0 h-0 border-solid border-[10px] border-transparent border-t-gray-700 border-l-[100px] border-r-[100px] mx-auto z-10"></span>
</th>
<th className="relative bg-black  heading px-2 py-10">
Leasing
    <span className="absolute bottom-[-20px] w-full px-0  left-0 right-0 block w-0 h-0 border-solid border-[10px] border-transparent border-t-black  border-l-[100px] border-r-[100px] mx-auto z-10"></span>
</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Car 1 */}
                                    <tr className="border-b">
                                        <td className="car-image">
                                            <img src={car1} alt="Chevrolet SUV Car" className="h-full w-[180px] object-cover" />
                                        </td>
                                        <td className="product-name  flex flex-col items-center py-8 ">
                                            <h3 className="text-gray-800 font-normal text-lg mb-2">Chevrolet SUV Car</h3>
                                            <p className="mb-0 rated flex flex-row" >
                                                <span className='font-poppins font-normal text-[15px]'>rated:</span>
                                                <FaStar  className='text-[#01d28e] mt-1' />
                                                <FaStar className='text-[#01d28e]  mt-1'  />
                                                <FaStar className='text-[#01d28e]  mt-1' />
                                                <FaStar className='text-[#01d28e]  mt-1' />
                                                <FaStar className=' mt-1 text-gray-200' />

                                            </p>
                                        </td>
                                        <td className="price  px-6 py-6 text-center relative bg-[#0000000D] group hover:bg-green-500">
    <p className="btn-custom hidden group-hover:block bg-blue-500 text-white px-2 py-2 mx-auto text-center">
        <a href="#" className=''>Rent a car</a>
    </p>
    <div className="price-rate p-4 group-hover:hidden ">
        <h3 className="text-xl mb-3">
            <span className="num relative text-xl text-blue-500">
                <small className="currency">$</small> 10.99
            </span>
            <span className="per text-sm text-gray-400">/per hour</span>
        </h3>
        <span className="subheading text-[15px] text-black">$3/hour fuel surcharges</span>
    </div>
</td>
                                        <td className="price px-4 py-2 text-center">
                                            <p className="btn-custom"><a href="#" className="text-blue-500 underline">Rent a car</a></p>
                                            <div className="price-rate">
                                                <h3 className="text-xl">
                                                    <span className="num"><small className="currency">$</small> 60.99</span>
                                                    <span className="per">/per day</span>
                                                </h3>
                                                <span className="subheading text-gray-500">$3/hour fuel surcharges</span>
                                            </div>
                                        </td>
                                        <td className="price px-4 py-2 text-center">
                                            <p className="btn-custom"><a href="#" className="text-blue-500 underline">Rent a car</a></p>
                                            <div className="price-rate">
                                                <h3 className="text-xl">
                                                    <span className="num"><small className="currency">$</small> 995.99</span>
                                                    <span className="per">/per month</span>
                                                </h3>
                                                <span className="subheading text-gray-500">$3/hour fuel surcharges</span>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Car 2 */}
                                    <tr className="border-b">
                                        <td className="car-image">
                                            <img src={car2} alt="Chevrolet SUV Car" className="h-32 w-32 object-cover" />
                                        </td>
                                        <td className="product-name px-4 py-2">
                                            <h3 className="text-lg font-semibold">Chevrolet SUV Car</h3>
                                            <p className="mb-0 rated">
                                                <span>rated:</span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"> </span>
                                                <span className="ion-ios-star"></span>
                                            </p>
                                        </td>
                                        <td className="price px-4 py-2 text-center">
                                            <p className="btn-custom"><a href="#" className="text-blue-500 underline">Rent a car</a></p>
                                            <div className="price-rate">
                                                <h3 className="text-xl">
                                                    <span className="num"><small className="currency">$</small> 10.99</span>
                                                    <span className="per">/per hour</span>
                                                </h3>
                                                <span className="subheading text-gray-500">$3/hour fuel surcharges</span>
                                            </div>
                                        </td>
                                        <td className="price px-4 py-2 text-center">
                                            <p className="btn-custom"><a href="#" className="text-blue-500 underline">Rent a car</a></p>
                                            <div className="price-rate">
                                                <h3 className="text-xl">
                                                    <span className="num"><small className="currency">$</small> 60.99</span>
                                                    <span className="per">/per day</span>
                                                </h3>
                                                <span className="subheading text-gray-500">$3/hour fuel surcharges</span>
                                            </div>
                                        </td>
                                        <td className="price px-4 py-2 text-center">
                                            <p className="btn-custom"><a href="#" className="text-blue-500 underline">Rent a car</a></p>
                                            <div className="price-rate">
                                                <h3 className="text-xl">
                                                    <span className="num"><small className="currency">$</small> 995.99</span>
                                                    <span className="per">/per month</span>
                                                </h3>
                                                <span className="subheading text-gray-500">$3/hour fuel surcharges</span>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Continue for other cars */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}