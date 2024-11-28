import bg from '../../images/bg_3.jpg'

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
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    {/* Blog Entry 1 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_1.jpg" alt="Blog 1" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Entry 2 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_2.jpg" alt="Blog 2" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Entry 3 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_3.jpg" alt="Blog 3" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Entry 4 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_4.jpg" alt="Blog 4" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Entry 5 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_5.jpg" alt="Blog 5" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>

                    {/* Blog Entry 6 */}
                    <div className="w-full mb-5">
                        <div className="blog-entry flex flex-col md:flex-row justify-between">
                            <a href="blog-single.html" className="block w-full md:w-1/3">
                                <img src="images/image_6.jpg" alt="Blog 6" className="w-full h-48 object-cover rounded" />
                            </a>
                            <div className="text px-5 pt-4">
                                <div className="meta mb-3">
                                    <div><a href="#">Oct. 29, 2019</a></div>
                                    <div><a href="#">Admin</a></div>
                                    <div><a href="#" className="meta-chat"><span className="icon-chat"></span> 3</a></div>
                                </div>
                                <h3 className="heading mt-2">
                                    <a href="#">Why Lead Generation is Key for Business Growth</a>
                                </h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p><a href="blog-single.html" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Continue <span className="icon-long-arrow-right"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div> <div className="row mt-5">
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   


        </div>
    )
}