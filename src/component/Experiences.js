import React from 'react';
import CommonHeader from './CommonHeader';

const Experiences = () => {
  return (
    <div className="p-5">
      <CommonHeader
        title="My Experiences"
        iconShape="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
      {/* <Experience body */}
      <div className="mt-5 font-ral">
        {/* aak */}
        <div className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2.5 px-2 rounded-lg shadow-lg">
          <h2 className="text-xl uppercase mb-2">
            AAK Tele-Science INC. -{' '}
            <span className="text-sm capitalize">Fullstack Developer | Davis, CA, USA</span>
          </h2>
          <p>( April-2021 - June-2021 )</p>
          <ul className="list-inside list-disc mt-2">
            <li>
              Worked mostly in the frontend part, interacting with API, JavaScript, HTML, CSS.
            </li>
            <li>Making plugins for Elgg (PHP social framework).</li>
            <li>Developed interfaces using amcharts.</li>
          </ul>
        </div>
        {/* upwork */}
        <div className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2.5 px-2 mt-5 rounded-lg shadow-lg">
          <h2 className="text-xl uppercase mb-2">
            UpWork - <span className="text-sm capitalize">Freelance Web Developer</span>
          </h2>
          <p>( 2020 - Present )</p>
          <ul className="list-inside list-disc mt-2">
            <li>
              Developed an agency website for online presence and gave quotes to the users as their
              requirements using WordPress and elementor.
            </li>
          </ul>
        </div>
        {/* fiverr */}
        <div className="bg-gray-900 hover:bg-gray-700 duration-300 transition py-2.5 px-2 mt-5 rounded-lg shadow-lg">
          <h2 className="text-xl uppercase mb-2">
            Fiverr - <span className="text-sm capitalize">Freelance Web Developer</span>
          </h2>
          <p>( May, 2020 - April, 2021 )</p>
          <ul className="list-inside list-disc mt-2">
            <li>Achieved level 1 seller badge.</li>
            <li>Guided over 10 clients for implementation for their websites.</li>
            <li>Boosted client website for fast loading speed using wp rocket plugin.</li>
            <li>Worked on SEO for better search results using Yoast SEO plugin.</li>
            <li>Built WordPress website for a learning management system using Learndash</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
