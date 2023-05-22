
import chart from "../assets/chart.png"
import phone from "../assets/phone.png"
import security from "../assets/security.png"
import world from "../assets/world.png"
import lock from "../assets/lock.png"
import laptop1 from "../assets/laptop1.png"

import Typed from "react-typed";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crouser = () => {

   
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      const customPrevButton = <button className="slider-button prev">Prev</button>;

      const customNextButton = <button className="slider-button next">Next</button>;

  return (
  

    <div className="sm:w-[93%] md:w-[93%] lg:w-[93%]  w-[93%]  z-0" >
    <Slider {...settings}>
      <div className="flex justify-center text-center text-white items-center ">
        <img
          className="object-contain w-full h-[19rem] flex"
          src={lock}
          alt=""
        />
         <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Authorization", "Integrity","Authenticity"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
       
      </div>

      <div className="flex justify-center text-center items-center">
        <img
          className="object-contain h-[19rem] w-full flex "
          src={world}
          alt=""
        />
      <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Explore the World with Us"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
      </div>

      <div className="flex justify-center text-center items-center">
        <img
          className="object-contain w-full h-[19rem] flex"
          src={phone}
          alt=""
        />
          <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Contact Us Anytime", "24X7 Available Service"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
      </div>



      <div className="flex justify-center text-center items-center">
        <img
          className="object-contain w-full h-[19rem] flex"
          src={laptop1}
          alt=""
        />
          <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Data Services at Best Price"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
      </div>


      <div className="flex justify-center text-center items-center">
        <img
          className="object-contain w-full h-[19rem] flex"
          src={chart}
          alt=""
        />
          <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Analytical Support"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
      </div>
     
    </Slider>
  </div>


          
  )
}

export default Crouser