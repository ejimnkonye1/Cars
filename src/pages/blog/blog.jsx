import bg from '../../images/bg_3.jpg'
import blog1 from '../../images/image_1.jpg'
import blog2 from '../../images/image_2.jpg'
import blog3 from '../../images/image_3.jpg'
import blog4 from '../../images/image_4.jpg'
import blog5 from '../../images/image_5.jpg'
import blog6 from '../../images/image_6.jpg'
import { MdOutlineChat } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
export const Blog = () => {
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
                        <span className="text-white">Blog <i className="ion-ios-arrow-forward"></i></span>
                    </p>
                    <h1 className="mb-3 text-4xl text-white">Our Blog</h1>
                </div>
            </div>
        </section>

        <section className="ftco-section">
            <div className="container mx-auto pt-6">
                <div className="flex flex-col items-center justify-center">
                    {/* Blog Entry 1 */}
                    <div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog1} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>

                    {/* Blog Entry 2 */}
                    <div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog2} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>

                    {/* Blog Entry 3 */}
                    <div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog3} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>

<div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog4} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>

<div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog5} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>

<div className="w-full mb-5 lg:p-20 p-4 ">
    <div className="blog-entry flex flex-col  justify-center items-center">
        <a href="blog-single.html" className="block w-full ">
            <img src={blog6} alt="Blog 1" className="w-full h-[700px] object-cover rounded" />
        </a>
        <div className="text px-5 pt-4 flex justify-center flex-col text-center font-nun ">
        <div className="meta mb-3 flex flex-row justify-center text-[#007bff] space-x-4">
    <div><a href="#">Oct. 29, 2019</a></div>
    <div><a href="#">Admin</a></div>
    <div><a href="#" className="meta-chat flex items-center"><span className="icon-chat"><MdOutlineChat className='pr-2' size='24px' /></span> 3</a></div>
</div>
            <h3 className="heading mt-2 text-lg mb-4 font-medium font-nun font-semibold text-black">
                <a href="#">Why Lead Generation is Key for Business Growth</a>
            </h3>
            <p className='text-[#999999] font-poppins mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>
                <div className='flex items-center justify-center'>
            
    <a href="blog-single.html" className=" bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center ">
        Continue 
        <FaArrowRightLong className="ml-2" />
    </a>
    </div>
 
</p>
        </div>
    </div>
</div>
                </div>
                <div className="flex justify-center mb-10">
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