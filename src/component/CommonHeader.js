import React from 'react';

const CommonHeader = ({ title, iconShape }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-4xl">{title}</h2>
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconShape} />
        </svg>
      </div>
      <hr />
    </>
  );
};

export default CommonHeader;
