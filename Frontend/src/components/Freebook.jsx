import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from 'axios';
import Cards from './Cards';
import About from './About';
import { Link } from 'react-router-dom';

function Freebook() {
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        setBook(res.data);
      } catch (error) {
      }
    };
    getBook();
  }, []);

  // Filter books for "Free" category
  const freeBooks = book.filter((data) => data.category === "Free");

  // Filter based on search input
  const filteredBooks = freeBooks.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Offered Courses 🆓</h1>
        <p>
          Discover complimentary courses on diverse subjects that offer essential
          skills in fields such as programming, data analytics, and digital marketing.
          Expand your expertise or improve your abilities without any cost. Confirm a
          course is free by checking for the "free" label in the course catalog. <span className='font-semibold'>For paid courses <Link to='/course'><span className='underline text-blue-500 cursor-pointer font-normal'>Click here</span></Link></span>
        </p>
      </div>
      <div className="my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a course..."
          className="w-full p-2 border rounded-md text-black"
        />
      </div>
      <div>
        {filteredBooks.length > 0 ? (
          <Slider {...settings}>
            {filteredBooks.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500 mt-4">No matching courses found.</p>
        )}
      </div>
      <About />
    </div>
  );
}

export default Freebook;
