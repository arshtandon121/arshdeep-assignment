import React from "react";
import gif from "../assets/teacher.gif";
import Typed from "react-typed";


const AboutCompany = () => {
  return (
    <div className="w-full bg-white py-16 px-4 " id="Services"> 
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[400px] mx-auto my-4" src={gif} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold "></p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            How We
            <Typed
              className="md:text-5xl sm:text-5xl text-base font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Work", "Grow"]}
              typeSpeed={190}
              backSpeed={140}
              loop
            />{" "}
          </h1>

          <p>
            <Typed
              className="md:text-lg sm:text-s text-base  md:pl-4 pl-2"
              strings={[
                "We earn the trust of our customers, employees, and extended family through transparency, security, compliance, privacy, and performance. And we deliver the industry's most trusted infrastructure.Trust is our #1 value. Customers trust our technology and infrastructure to perform, to be available, and to be secure.",
              ]}
              typeSpeed={20}
            />
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Explore More
          </button>
        </div>
      </div>

      <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-2 mt-15 mb-10 text-center">
            What We Provide
          
          </h1>


      <div class="  text-center mx-10  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://trust.salesforce.com/_next/image?url=%2Fimages%2Fstatus.png&w=384&q=75"
            alt="Card Image"
            class="w-full h-auto rounded-md mb-4"
          />
          <h2 class="text-xl font-bold mb-2">Status</h2>
          <p class="text-gray-600">
            Salesforce Status provide transparency around service availability
            and performance for the best results
          </p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://trust.salesforce.com/_next/image?url=%2Fimages%2Fsecurity.png&w=384&q=75"
            alt="Card Image"
            class="w-full h-auto rounded-md mb-4"
          />
          <h2 class="text-xl font-bold mb-2">Security</h2>
          <p class="text-gray-600">
            Salesforce builds security into everything we do so businesses can
            focus on growing and innovating.
          </p>
          <button class="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://trust.salesforce.com/_next/image?url=%2Fimages%2Fcompliance.png&w=384&q=75"
            alt="Card Image"
            class="w-full h-auto rounded-md mb-4"
          />
          <h2 class="text-xl font-bold mb-2">Compliance</h2>
          <p class="text-gray-600">Compliance engineered for the Cloud and new technology which make it easier to get better results</p>
        
          <button class="bg-blue-500   hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4">
          <img
            src="https://trust.salesforce.com/_next/image?url=%2Fimages%2Favailability.png&w=384&q=75"
            alt="Card Image"
            class="w-full h-auto rounded-md mb-4"
          />
          <h2 class="text-xl font-bold mb-2">Availability</h2>
          <p class="text-gray-600">
            Achieving high availability is a shared responsibility between
            Salesforce and our customers.
          </p>
          <button class="bg-blue-500  hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
