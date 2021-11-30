import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className="h-full grid place-content-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-ubu my-5">
        Mostakimul Karim
      </h1>
      <h2 className="text-xl font-tit sm:text-2xl md:text-3xl mb-5">
        <Typical
          steps={['I am a', 1000, 'I am a Fullstack Developer...', 500]}
          loop={Infinity}
          wrapper="p"
        />
      </h2>
      <hr />
      <div className="mt-5">
        <a
          href="/Mostakimul_Karim_Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2 px-5 text-lg rounded-lg shadow-lg inline-block mx-1 font-ral">
          Download Resume
        </a>
        <Link
          to="/contact"
          className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2 px-5 text-lg rounded-lg font-ral shadow-lg inline-block mx-1">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
