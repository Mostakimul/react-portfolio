import React from 'react';
import CommonHeader from './CommonHeader';

const About = () => {
  return (
    <div className="p-5">
      <CommonHeader
        title="About Me"
        iconShape="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      <h3 className="text-center font-semibold">Coming Soon!</h3>
    </div>
  );
};

export default About;
