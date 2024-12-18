/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import { Homepage } from './pages/home/home';
import { Footer } from './components/Footer';
import { Navbar } from './components/navbar';
import { Contact } from './pages/contact.jsx/contact';
import { Service } from './pages/services/service';
import { Blog } from './pages/blog/blog';
import { Cars } from './pages/cars/cars';
import { Pricing } from './pages/pricing/pricing';
import { About } from './pages/about/about';



function App() {
  
const Loader = () => (
<div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="animate-spin rounded-full border-t-2 border-b-2 border-[#FEA116] w-12 h-12" >
        <span className="sr-only">Loading...</span>
    </div>
</div>
  
  
  );
  
  const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      setIsLoading(true); 
      const delayLoader = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(delayLoader);
    }, [location]);
  
    return isLoading ? <Loader /> : children;
  };

  return (
      <div>
      
      <Router >

      <Layout>
        <Navbar />
          <Routes>
            <Route path='/'  element={<Homepage/>}/>
            <Route path='/contact'  element={<Contact/>}/>
            <Route path='/services'  element={<Service/>}/>
            <Route path='/cars'  element={<Cars/>}/>
            <Route path='/blog'  element={<Blog/>}/>
            <Route path='/pricing'  element={<Pricing/>}/>
            <Route path='/about'  element={<About/>}/>
          </Routes>
          </Layout>
          <Footer  />
        
        </Router>
        
      </div>
  )
}

export default App
