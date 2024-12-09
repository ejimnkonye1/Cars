import abt from '../images/about.jpg'
 export const Abt = () => {
    return(
        <section className="py-24 relative">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row  pl-20 ">
                <div className="w-full lg:w-1/2 flex justify-center items-center z-[-1]">
                    <img src={abt} alt="About Carbook" className="object-cover w-full h-auto" />
                </div>
                <div className="w-full  p-8 absolute top-0 right-0 bottom-0 lg:w-2/4 bg-[#01d28e] z-[-2] h-auto">
                    <div className="text-left lg:pl-[40px] lg:pt-20 ">
                        <span className="block mb-1.5 text-lg text-white font-semibold tracking-wide uppercase">About us</span>
                        <h2 className="text-4xl text-white font-semibold mb-4">Welcome to Carbook</h2>
                        <p className="mb-4 text-white opacity-90 font-poppins">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className="mb-4 text-white opacity-90 font-poppins">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word `and` and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className='pt-3'>
                            <a href="#" className="bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition rounded">Search Vehicle</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
 }