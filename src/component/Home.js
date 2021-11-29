import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="par h-full grid place-content-center text-center">
      <h1 className="text-6xl font-semibold my-5">Mostakimul Karim</h1>
      <h2 className="text-3xl mb-5">Full Stack Developer</h2>
      <hr />
      <div className="mt-5">
        <a
          href="/"
          download="/Mostakimul Karim Resume.pdf"
          className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2 px-5 text-lg rounded-lg shadow-lg inline-block mx-1">
          Download Resume
        </a>
        <Link
          to="/contact"
          className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2 px-5 text-lg rounded-lg shadow-lg inline-block mx-1">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
