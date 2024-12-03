import bg from '../../images/bg_3.jpg'
import abt from '../../images/about.jpg'
import { Testimonial } from '../../components/testimonial'
import { Experience } from '../../components/experience'
export const About = () => {
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
                        <span className="text-white">About <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">About us</h1>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 py-12">
    <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={abt} alt="About Carbook" className="object-cover w-full h-full" />
            </div>
            <div className="w-full md:w-1/2 p-8">
                <div className="text-left">
                    <span className="text-gray-600 text-sm">About us</span>
                    <h2 className="text-3xl font-bold mb-4">Welcome to Carbook</h2>
                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p className="mb-4">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word `and` and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>
                        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Search Vehicle</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section 
    className="relative  bg-cover bg-no-repeat bg-top bg-center overflow-hidden z-0 h-[380px]" 
    style={{ backgroundImage: `url(${bg})` }}
>
<div className="absolute top-[-120px] left-[-100px] right-0 bottom-[-120px] w-[40%] lg:bg-[#01d28e] opacity-100 transform rotate-[20deg]"></div>
    <div className="container mx-auto relative z-10">
        <div className="flex flex-start lg:justify-end items-center pt-[100px] lg:pl-[150px]">
            <div className="md:w-1/2 text-white p-6">
                <h2 className="mb-5 text-3xl font-bold lg:leading-relaxed">Do You Want To Earn<br/> With Us? So Don&apos;t Be<br/> Late.</h2>
                <a href="#" className="btn btn-primary btn-lg bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Become A Driver</a>
            </div>
        </div>
    </div>
    
</section>
<Testimonial />
<Experience />

        </div>
    )
}