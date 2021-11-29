import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
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
      name: 'Portfolio',
      icon: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z',
      link: '/portfolios',
    },
    {
      id: 5,
      name: 'Education',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      link: '/education',
    },
    {
      id: 6,
      name: 'Contact',
      icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
      link: '/contact',
    },
  ];
  return (
    <div className="w-11/12 mx-auto min-h-full space-y-4 divide-y divide-gray-600 mt-5">
      {menus.map((menu) => (
        <Link
          to={menu.link}
          key={menu.id}
          className="flex items-center hover:bg-gray-700 transition duration-300 rounded-lg p-1.5">
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
    </div>
  );
};

export default Sidebar;
