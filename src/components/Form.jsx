import React, { useState } from 'react';
import emailjs from 'emailjs-com';



const Form = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure EmailJS service
    emailjs.sendForm(
      'service_n9bllgh',
      'template_9qxtska',
      name,
      '3K0SXXvr3w3DCJm4x'
    )
      .then((result) => {
        console.log(result.text);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error.text);
      });
  };



  return (
 <div className='w-full bg-white'>

        <div className="text-4xl text-black  mb-2 font-bold text-center " >
            <label >
             Any Queries ?  Contact us 
             </label> 
        </div>
        <div className="text-2xl text-black mt-2 mb-5 text-center  " >
            <label>
             We will Contact You in 24 Hours
             </label> 
        </div>
    <form   id='Contact' className=" bg-white max-w-lg mx-auto"  onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="block w-full  px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button  type='submit' className='bg-[#00df9a] w-[140px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Submit</button>
    </form>
 </div>
  )
}

export default Form