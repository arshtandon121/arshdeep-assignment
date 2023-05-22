import React, {  useState } from "react";
import emailjs from "emailjs-com";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import load from "../assets/load.gif";

const Form = () => {
 

  // for toasts
  const notify = () => {
    toast.success("We have received your query ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notify1 = () => {
    toast.error("Something is wrong ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const NameError = () => {
    toast.warn("Name can't be Empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const EmailError = () => {
    toast.warn("Enter Valid Email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const MessageError = () => {
    toast.warn("Message Field Can't be Empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const formError = () => {
    toast.error(" Fill all Fields ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  const [isLoading, setIsLoading] = useState(false);
  const [form, setform] = useState(false);


  // for getting values in state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // validate  fields

  const [nameOK, setNameOK] = useState(false)
  const [emailOK, setEmailOK] = useState(false)
  const [messageOK, setMessageOK] = useState(false)

  
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    

  const handleNameError = () => {
    if (name === "") {
      NameError()
      setNameOK(false);
      return;
    }
 console.log(nameOK)
    setNameOK(true);
  };

  const handleEmailError = () => {
    

    if (!emailRegex.test(email) || email === "") {
      
      EmailError()
      setEmailOK(false)
      return;
    }
    console.log(emailOK)
    setEmailOK(true)
  };

  const handleMessageError = () => {
    if (message ==="") {
      MessageError()
      
      setMessageOK(false);
      return;
    }
    console.log(messageOK)
    console.log(message)
    setMessageOK(true)
    console.log(messageOK)
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if(nameOK && emailOK && messageOK){

      setIsLoading(true);
    // Configure EmailJS service
    emailjs
      .sendForm(
        "service_n9bllgh",
        "template_f0zst7s",
        e.target,
        "3K0SXXvr3w3DCJm4x"
        )
      .then((result) => {
        notify();

        console.log(result.text);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        notify1();
        console.error(error.text);
      });
    }
    else{
      formError()
    }
  }

  return (
    <div className="w-full px-4 py-2 bg-white">
      <div className="text-4xl text-black  mb-2 font-bold text-center ">
        <label>Any Queries ? Contact us</label>
      </div>
      <div className="text-2xl text-black mt-2 mb-5 text-center  ">
        <label>We will Contact You in 24 Hours</label>
      </div>
      <form
        id="Contact"
        className=" bg-white max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            name="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full  px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your name"
            value={name}
            onBlur={handleNameError}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            name="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onBlur={handleEmailError}
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            name="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onBlur={handleMessageError}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {isLoading ? (
          <img className="w-[50px] mx-auto my-4" src={load} alt="/" />
        ) : (
          <button
            type="submit"
            className="bg-[#00df9a] w-[140px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
