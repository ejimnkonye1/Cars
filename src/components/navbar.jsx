import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`w-full flex items-center fixed top-0 z-50 p-4 lg:p-10 ${scrolled ? 'bg-black' : 'bg-transparent'} ${menuOpen ? 'bg-black w-full' : ''}`}>
            <nav className="text-white w-full">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-[1.3rem] font-extrabold uppercase lg:pl-8" to="/">Car<span className="text-[#01d28e]">Book</span></div>

                    <button className="lg:hidden border rounded p-2 text-gray-400" onClick={toggleMenu}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className={`absolute lg:relative lg:flex lg:items-center lg:w-auto bg-black lg:bg-transparent lg:pr-10 ${menuOpen ? "block" : "hidden"} lg:block w-full top-14 lg:top-0 left-0`}>
                        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 p-4 lg:p-0 md:ml-0 lg:space-x-12 font-semibold text-[15px]">
                            <li>
                                <NavLink 
                                    to="/" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink 
                                    to="/about" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/services" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/pricing" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/cars" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Cars
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/blog" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    onClick={() => setMenuOpen(false)} 
                                    className={({ isActive }) => `hover:text-[#01d28e] ${isActive ? 'text-[#01d28e]' : 'text-white'}`}
                                >
                                    Contact
 </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};