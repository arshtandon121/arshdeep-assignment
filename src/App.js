import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Form from './components/Form';
import AboutCompany from './components/AboutCompany';
import { ToastContainer } from 'react-toastify';
import Crouser from './components/Crouser';


function App() {
  return (
   <>
<ToastContainer/>
    <Navbar />
    <Hero />
    <Analytics />
    <Crouser/>
    <Newsletter />
    <AboutCompany/>
    <Cards />
    <Form/>
    <Footer />

   
    
   
   
   </>

    
   
   
  );
}

export default App;
