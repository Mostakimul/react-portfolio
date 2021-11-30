import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const BaseLanding = () => {
  const menus = [
    {
      id: 1,
      name: 'Home',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      link: '/',
    },
    {
      id: 2,
      name: 'About Me',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      link: '/about',
    },
    {
      id: 3,
      name: 'Experiences',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      link: '/experiences',
    },
    {
      id: 4,
      name: 'Projects',
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      link: '/projects',
    },
    {
      id: 5,
      name: 'Education',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      link: '/education',
    },
    {
      id: 6,
      name: 'Blogs',
      icon: 'M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z',
      link: '/blogs',
    },
    {
      id: 7,
      name: 'Contact',
      icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
      link: '/contact',
    },
  ];
  const [isdashOpen, setIsDashOpen] = useState(true);
  const showSideBar = () => {
    setIsDashOpen(!isdashOpen);
  };
  return (
    <div className="bg-gray-900 pt-1">
      {/* Mobile Side bar */}
      <div className="bg-gray-800 md:hidden m-4 py-3 px-2 rounded-lg shadow-lg text-gray-50">
        <div className="flex justify-between">
          {/* logo */}
          <div>
            <h2 className="font-ubu">MK LOGO</h2>
          </div>

          {/* mobile menu butn */}
          <button onClick={showSideBar} className="cursor-pointer md:hidden">
            {isdashOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {/* sidebar */}
        <div
          className="hidden md:block md:col-span-3 bg-gray-800 m-4 rounded-lg shadow-lg text-gray-50"
          style={{ minHeight: '96vh' }}>
          <img
            src="/images/Mostakimul_karim.jpg"
            alt="Mostakimul Karim"
            className="rounded-lg mt-5 w-2/5 mx-auto"
          />
          {/* <h2 className="text-center text-3xl">MK Logo</h2> */}
          {/* Navigation bar */}
          <div className="mx-2">
            <Sidebar />
            {/* Connect */}
            <div className="bg-gray-900 py-2 mt-2 px-2 rounded-lg shadow-lg mx-2">
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/mostakimul/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src="/images/linkedin.png"
                    alt="linkedin"
                    className="inline-block bg-gray-300 w-4/5 rounded-lg"
                  />
                </a>
                <a href="https://github.com/Mostakimul" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/github.png"
                    alt="github"
                    className="inline-block bg-gray-300 w-4/5 rounded-lg"
                  />
                </a>
              </div>
              <p className="text-xs font-tit text-center mt-2">
                Copyright &#169; 2021 - Mostakimul Karim
              </p>
            </div>
          </div>
        </div>
        {/* body */}
        <div
          className="col-span-full md:col-span-9 bg-gray-800 m-4 rounded-lg shadow-lg text-gray-50"
          style={{ minHeight: '96vh' }}>
          <Outlet />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`bg-gray-900 md:hidden text-gray-50 w-2/4 md:w-1/6 space-y-6 absolute inset-y-0 left-0 transform md:relative transition duration-200 ease-in md:translate-x-0 ${
          isdashOpen ? '-translate-x-full' : '-translate-x-0'
        }`}>
        <nav onClick={showSideBar} className="pt-5">
          {menus.map((menu) => (
            <Link
              to={menu.link}
              key={menu.id}
              className="flex font-ral items-center hover:bg-gray-700 transition duration-300 rounded-lg p-1.5 m-2 bg-gray-800">
              <svg
                className="w-6 h-6 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menu.icon} />
              </svg>
              <p className="text-lg ml-2">{menu.name}</p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BaseLanding;
