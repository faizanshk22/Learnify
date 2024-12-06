import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = {};
    let formValid = true;

    // Validate fields
    if (!form.current.name.value) {
      newErrors.name = 'Name cannot be empty';
      formValid = false;
    }

    if (!form.current.email.value) {
      newErrors.email = 'Email cannot be empty';
      formValid = false;
    }

    if (!form.current.message.value) {
      newErrors.message = 'Message cannot be empty';
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      emailjs
        .sendForm(
          'service_d8z7w8c',
          'template_w56gpso',
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setStatus('SUCCESS! Your message has been sent.');
            form.current.reset();
            setErrors({});
          },
          (error) => {
            setStatus(`FAILED: ${error.text}`);
          }
        );
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <div className="w-full min-h-[100vh] flex flex-col lg:flex-row justify-between py-20">
        {/* Left Side */}
        <div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-start p-6 lg:ml-20 w-full lg:w-1/2"
        >
          <div className="mb-10">
            <p className="dark:text-white  text-xl sm:text-2xl md:text-4xl lg:text-3xl">
              Should you need or any query, <br /> <span className='text-red-600 md:text-yellow-600'>  Contact here! </span>
            </p>
          </div>
          <div className="p-4 mb-4">
            <div className="flex items-center mb-2">
              <img width="48" height="48" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1" />
              <p className="text-blue-600 text-xl lg:text-2xl">Location</p>
            </div>
            <p className="dark:text-white text-sm lg:text-base">3rd Floor, Dubai Tower, Shalimar Link Road, Lahore,Pakistan.</p>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img width="48" height="48" src="https://img.icons8.com/color/48/new-post.png" alt="new-post" />
              <p className="text-blue-600 text-xl lg:text-2xl">Email</p>
            </div>
            <p className="dark:text-white text-sm lg:text-base">info.learnify@gmail.com</p>
          </div>
          {/* <div className="p-4">
            <div className="flex items-center mb-2">
              <img width="48" height="48" src="https://img.icons8.com/color/48/phone.png" alt="phone" />
              <p className="text-blue-600 text-xl lg:text-2xl">Phone</p>
            </div>
            <p className="dark:text-white text-sm lg:text-base">
              +92 3244282516 <br /> +92 3114518787
            </p>
          </div> */}
        </div>

        {/* Right Side */}
        <div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="flex flex-col justify-center items-center mt-2 p-6 lg:mr-20 w-full lg:w-1/2"
        >
          <form ref={form} onSubmit={sendEmail} className="bg-white text-black p-6 rounded-lg w-full">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className={`border p-2 mb-4 w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm mb-2 -mt-2">{errors.name}</p>}

            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className={`border p-2 mb-4 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mb-2 -mt-2">{errors.email}</p>}

            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              className={`border p-2 mb-4 w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.message && <p className="text-red-500 text-sm mb-2 -mt-2">{errors.message}</p>}

            <input
              type="submit"
              value="Send"
              className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
            />
          </form>

          {/* Status Message */}
          {status && (
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded">
              {status}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
