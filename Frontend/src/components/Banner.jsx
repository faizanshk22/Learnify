import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import banner from "../../public/banner2.png";

function Banner() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({
    email: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const newErrors = {};
    let formValid = true;

    if (!form.current.email.value) {
      newErrors.email = 'Email cannot be empty';
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
      <div className="w-full container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-8 md:mt-32 md:ml-0">
          <div className="space-y-6 md:space-y-12">
            <h1 className="text-3xl md:text-4xl font-bold text-left md:text-left">
              Hello, Welcome to learnify by <span className="text-yellow-600"> FS Group<span  style={{ fontSize: '40px' }}>💡</span>
              </span> <br /> Enjoy the variety <span className="text-red-600 md:text-green-600"> of new courses every day</span>.
            </h1>
            <p className="text-lg md:text-xl text-left md:text-left px-2 md:px-0">
              Discover an ever-growing collection of courses tailored to your personal and professional growth.
              Unlock new skills and knowledge every day with expertly designed content. Whether you're looking to master a new technology, explore creative pursuits, or enhance your career, Learnify is here to guide your journey. Start learning today and take the first step toward achieving your goals ⭐
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70 text-black">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  name="email"
                  className={`grow text-black ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Email"
                />
              </label>
              {errors.email && <p className="text-red-500 text-sm mb-2 -mt-2">{errors.email}</p>}
              <button type="submit" className="btn mt-6 text-white bg-blue-600 hover:bg-blue-900 hover:text-white">Submit</button>
            </form>
            {status && (
              <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded">
                {status}
              </div>
            )}
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-10 ml-0 md:ml-[10vw]">
          <img src={banner} alt=" banner" className="w-auto h-auto md:w-[50vw] md:h-[40vh]" />
        </div>
      </div>
    </>
  );
}

export default Banner;
