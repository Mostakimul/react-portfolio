import React from 'react';
import CommonHeader from './CommonHeader';

const Education = () => {
  return (
    <div className="p-5">
      <CommonHeader
        title="Education"
        iconShape="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
      {/* education body */}
      <div className="mt-5">
        <div className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2.5 px-2 rounded-lg shadow-lg">
          <h2 className="text-xl capitalize mb-2">
            United International University - <span className="text-sm">(2017 - 2021)</span>
          </h2>
          <p>Bachelor of Computer Science & Engineering </p>
        </div>
        <div className="bg-gray-900 hover:bg-gray-700 duration-300 transition mt-3 py-2.5 px-2 rounded-lg shadow-lg">
          <h2 className="text-xl capitalize mb-2">
            Govt. Science College, Dhaka - <span className="text-sm">(2014 - 2016)</span>
          </h2>
          <p>Higher Secondary Certificate</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
