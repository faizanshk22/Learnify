import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

function Course() {
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

  // Filter the books to show only those with the category "Paid"
  const paidBooks = book.filter((data) => data.category === "Paid");

  // Filter based on search input
  const filteredBooks = paidBooks.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-[12vh] items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Welcome to paid courses with exceptional{" "}
            <span className="text-red-600 md:text-green-600">
              super easy learning here 🔥
            </span>
          </h1>
          <p className="mt-12 text-start">
            Explore a range of expertly crafted courses designed to make learning engaging and straightforward. Gain valuable skills at your own pace with comprehensive materials, clear instructions, and practical insights to help you succeed 🌟📚
          </p>
        </div>
        <div className="my-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a course..."
            className="w-full p-2 border text-black rounded-md"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => <Cards item={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500 mt-4 col-span-full">
              No matching courses found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
