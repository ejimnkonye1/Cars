import car1 from '../images/car-1.jpg'
import car2 from '../images/car-2.jpg'
import car3 from '../images/car-3.jpg'
import car4 from '../images/car-4.jpg'
import car5 from '../images/car-5.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Car2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cars = [
    {
      image: car1,

    },
    {
      image: car2,

    },
    {
      image: car3,

    },
    {
      image: car4,

    },
    {
        image: car5,
  
      },
  
  ];

  return (
    <section className="">
      <div className="container mx-auto">
      <div className="text-center mb-5">
          <span className="text-sm block mb-1.5 text-[#1089ff] font-semibold tracking-wider uppercase">
          What we offer
          </span>
          <h2 className="mb-3 text-3xl font-semibold">Feeatured Vehicles</h2>
        </div >
        <Carousel responsive={responsive}
         infinite={true}
          autoPlay={true}
          showDots={true} // Enable dots for navigation
          arrows={false} // Disable arrows
          autoPlaySpeed={3000} 
          containerClass="pb-5">
          {cars.map((car, index) => (
            <div key={index} className="p-9">
              <div className="car-wrap rounded overflow-hidden shadow-lg bg-white">
                <div className="flex items-center justify-center mb-4">
                <img src={car.image} alt="Mercedes Grand Sedan" className="rounded h-48 w-full object-cover" />
                </div>
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
          ))}
        </Carousel>
      </div>
      
    </section>
  );
};
