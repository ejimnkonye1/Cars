import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/'); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link); 
        setMenuOpen(false); 
    };

    return (
        <div className={`w-full flex items-center fixed top-0 z-50 p-4 lg:p-10 ${scrolled ? 'bg-gray-900' : 'bg-transparent'} ${menuOpen? 'bg-black w-full':''}`}>
            <nav className="text-white w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <Link className="text-[1.3rem] font-extrabold uppercase lg:pl-8" to="/">Car<span className="text-[#01d28e]">Book</span></Link>

                    <button className="lg:hidden border rounded p-2 text-gray-400 mr-4" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className={`lg:flex flex-grow justify-end pr-10 ${menuOpen ? 'block   ' : 'hidden'}`}>
                        <ul className="flex space-x-12 text-[15px]">
                            <li>
                                <Link 
                                    to="/" 
                                    onClick={() => handleLinkClick('/')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    onClick={() => handleLinkClick('/about')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/about' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/services" 
                                    onClick={() => handleLinkClick('/services')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/services' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/pricing" 
                                    onClick={() => handleLinkClick('/pricing')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/pricing' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/cars" 
                                    onClick={() => handleLinkClick('/cars')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/cars' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Cars
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/blog" 
                                    onClick={() => handleLinkClick('/blog')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/blog' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    onClick={() => handleLinkClick('/contact')} 
                                    className={`hover:text-[#01d28e] ${activeLink === '/contact' ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};