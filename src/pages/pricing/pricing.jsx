import bg from '../../images/bg_3.jpg'
import car1 from '../../images/car-1.jpg' 
import car2 from '../../images/car-2.jpg' 
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
            <div className="container mx-auto px-4">
                <div className="row">
                    <div className="col-md-12 animate__animated">
                        <div className="car-list">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-800 text-white">
                                    <tr className="text-center">
                                        <th className="px-4 py-2">&nbsp;</th>
                                        <th className="px-4 py-2">&nbsp;</th>
                                        <th className="bg-blue-500 heading px-4 py-2">Per Hour Rate</th>
                                        <th className="bg-gray-700 heading px-4 py-2">Per Day Rate</th>
                                        <th className="bg-black heading px-4 py-2">Leasing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Car 1 */}
                                    <tr className="border-b">
                                        <td className="car-image">
                                            <img src={car1} alt="Chevrolet SUV Car" className="h-32 w-32 object-cover" />
                                        </td>
                                        <td className="product-name px-4 py-2">
                                            <h3 className="text-lg font-semibold">Chevrolet SUV Car</h3>
                                            <p className="mb-0 rated">
                                                <span>rated:</span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
                                                <span className="ion-ios-star"></span>
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