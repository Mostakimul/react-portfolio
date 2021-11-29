import React from 'react';
import Sidebar from './Sidebar';
import SvgIcon from './SvgIcon';

const BaseLanding = () => {
  return (
    <div className="bg-gray-900">
      <div className="grid grid-cols-12 gap-5">
        {/* sidebar */}
        <div
          className="col-span-2 bg-gray-800 m-4 rounded-lg shadow-lg text-gray-50"
          style={{ minHeight: '96vh' }}>
          <img
            src="/images/Mostakimul_karim.jpg"
            alt="Mostakimul Karim"
            className="rounded-lg mt-5 w-4/5 mx-auto"
          />
          {/* Navigation bar */}
          <div className="mx-2">
            <Sidebar />
            {/* Connect */}
            <SvgIcon />
          </div>
        </div>
        {/* body */}
        <div className="col-span-10 bg-gray-800 m-4 rounded-lg shadow-lg text-gray-50">
          <h3>Body</h3>
        </div>
      </div>
    </div>
  );
};

export default BaseLanding;
