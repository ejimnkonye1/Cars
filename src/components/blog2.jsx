import blog1 from '../images/image_1.jpg'
import blog2 from '../images/image_2.jpg'
import blog3 from '../images/image_3.jpg'
import { MdOutlineChat } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6";

export const Blog2 = () => {

  const Blog = [
    {
      image: blog1,

    },
    {
      image: blog2,

    },
    {
      image: blog3,

    },
  
  ];

  return (
    <section className="">
      <div className="container mx-auto">
      <div className="text-center mb-5">
          <span className="text-sm block mb-1.5 text-[#1089ff] font-semibold tracking-wider uppercase">
          Blog
          </span>
          <h2 className="mb-3 text-3xl font-semibold">Recent Blog</h2>
        </div >
        <div className='grid grid-cols-1 lg:grid-cols-3'>
        {Blog.map((blog, index) => (
            <div key={index} className="p-9">
              <div className="car-wrap rounded overflow-hidden shadow-lg bg-white">
                <div className="flex  justify-center mb-4">
                <img src={blog.image} alt="blog" className="rounded h-48 w-full object-cover" />
                </div>
                <div className="text px-5 pt-4 flex flex-col  font-nun ">
        <div className="meta mb-3 flex flex-row  text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>

            <p>
                <div className='flex mb-4'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex ">
        Read More
    </a>
    </div>
 
</p>
        </div>
              </div>
            </div>
          ))}
        </div>
       
     
      </div>
      
    </section>
  );
};
