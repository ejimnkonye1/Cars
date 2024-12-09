import person1 from '../images/person_1.jpg';
import person2 from '../images/person_2.jpg';
import person3 from '../images/person_3.jpg';
import person4 from '../images/person_4.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Testimonial = () => {
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

  const testimonials = [
    {
      image: person1,
      name: 'Roger Scott',
      position: 'Marketing Manager',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      image: person2,
      name: 'Emily Johnson',
      position: 'Interface Designer',
      text: 'The copy warned the Little Blind Text that where it came from it would have been rewritten a thousand times.',
    },
    {
      image: person3,
      name: 'Michael Lee',
      position: 'UI Designer',
      text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    },
    {
      image: person4,
      name: 'Anna Brown',
      position: 'Web Developer',
      text: 'Far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: person1,
        name: 'Roger Scott',
        position: 'Marketing Manager',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-5">
          <span className="text-sm block mb-1.5 text-[#1089ff] font-semibold tracking-wider uppercase">
            Testimonial
          </span>
          <h2 className="mb-3 text-3xl font-semibold">Happy Clients</h2>
        </div >
        <Carousel responsive={responsive}
         infinite={true}
          autoPlay={true}
          showDots={true} // Enable dots for navigation
          arrows={false} // Disable arrows
          autoPlaySpeed={3000} 
          containerClass="pb-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-9">
              <div className="testimony-wrap bg-white px-6 py-8 rounded shadow-md text-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full h-24 w-24 object-cover"
                  />
                </div>
                <div className="text">
                  <p className="mb-4 text-gray-600 opacity-90">{testimonial.text}</p>
                  <p className="font-[500] text-[20px]">{testimonial.name}</p>
                  <span className="text-[#1089ff] text-[16px]">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      
    </section>
  );
};
