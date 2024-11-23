import bg from '../../images/bg_3.jpg'

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
    <div className="container mx-auto">
        <div className="flex justify-center mb-5">
            <div className="md:w-1/2 text-center">
                <span className="text-gray-500">Services</span>
                <h2 className="mb-3 text-3xl font-bold">Our Latest Services</h2>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="services services-2 w-full">
                    <div className="icon flex items-center justify-center mb-4">
                        <span className="flaticon-route text-4xl"></span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-xl font-semibold">Wedding Ceremony</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full">
                    <div className="icon flex items-center justify-center mb-4">
                        <span className="flaticon-route text-4xl"></span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-xl font-semibold">City Transfer</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full">
                    <div className="icon flex items-center justify-center mb-4">
                        <span className="flaticon-route text-4xl"></span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-xl font-semibold">Airport Transfer</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="services services-2 w-full">
                    <div className="icon flex items-center justify-center mb-4">
                        <span className="flaticon-route text-4xl"></span>
                    </div>
                    <div className="text w-full">
                        <h3 className="heading mb-2 text-xl font-semibold">Whole City Tour</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section 
    className="relative bg-cover bg-center" 
    style={{ backgroundImage: `url(${bg})` }}
>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto relative z-10">
        <div className="flex justify-end">
            <div className="md:w-1/2 text-white p-6">
                <h2 className="mb-3 text-3xl font-bold">Do You Want To Earn With Us? So Don&apos;t Be Late.</h2>
                <a href="#" className="btn btn-primary btn-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Become A Driver</a>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}