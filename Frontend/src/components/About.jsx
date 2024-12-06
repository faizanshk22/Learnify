import React from 'react';

function About() {
  return (
    <div className='h-full flex items-center justify-center md:text-center'>
      <div className='font-semibold m-20 text-3xl'>
        <h2>About Us</h2>
        <p className='font-normal text-start text-xl mt-8'>
          Welcome to <strong className='text-yellow-600'>Learnify</strong>, your go-to platform for transformative learning experiences. We believe that education is the key to unlocking potential, and we are here to help you achieve your goals through innovative, accessible, and high-quality learning resources.

          At Learnify, we offer a wide range of online courses designed to equip learners with the skills and knowledge they need to thrive in today’s fast-paced world. Whether you're looking to advance your career, explore new interests, or simply learn something new, we’ve got you covered.

          Our courses are crafted by industry experts and tailored to provide practical, real-world insights. We offer a variety of subjects, from technology and business to creative arts and personal development, ensuring that there’s something for everyone.

          Our mission is to make learning accessible, engaging, and impactful. We use cutting-edge tools and technologies to provide an immersive learning experience, with features like interactive lessons, quizzes, and forums to foster a community of like-minded learners.  

          <strong className='text-red-600 md:text-green-600'> Why Learn with Us? 🤔</strong>
          <ul className='list-disc text-left mx-auto mt-4'>
            <li><strong className='text-red-600'>Expert-Led Courses</strong>: Learn from top professionals in your field ✅ </li>
            <li><strong className='text-red-600'>Flexible Learning</strong>: Study at your own pace, anytime, anywhere ✅ </li>
            <li><strong className='text-red-600'>Practical Knowledge</strong>: Gain skills that you can immediately apply in your career ✅ </li>
            <li><strong className='text-red-600'>Interactive Community</strong>: Join a network of learners to share ideas, insights, and support ✅ </li>
          </ul>

          We are committed to empowering learners of all backgrounds and providing them with the resources they need to succeed. At Learnify, learning never stops, and neither should you. Together, we can make education a lifelong journey.

          Start your learning adventure today with <strong className='text-blue-600'>Learnify</strong> — <span className='text-gray-500'> where learning meets opportunity.</span>
        </p>
      </div>
    </div>
  );
}

export default About;
