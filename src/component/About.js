import React from 'react';
import CommonHeader from './CommonHeader';

const About = () => {
  return (
    <div className="p-5">
      <CommonHeader
        title="About Me"
        iconShape="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
      {/* about body */}
      <div className="mt-5">
        <p>
          Love to design and develop websites. Want to explore new technologies. Always try to keep
          updated with the new era. Passionate for working with web technologies and helping others.
        </p>
        <p>
          There is a lot of technologies to work within the web application sector, but now I am
          working on Laravel, Vue js, and Nuxt js. Trying to improve me more for creating amazing
          things. Also completed some projects using React, Node, Express, and MongoDB. the
          authentication part was handled by Firebase and for the frontend used Tailwind CSS. It was
          a great experience working with the MERN stack.
        </p>
        <p>
          My main web technology strength is HTML5, CSS3, JavaScript, PHP. But improved by working
          with SASS, Bootstrap, Tailwind CSS also working with Parcel and Vite. For more readability
          of class name using BEM. But when I see the industry there are a lot of things to learn
          and, I have to explore more.
        </p>
        <p>
          Looking forward to learning, exploring. Cannot say I am a complete package but can do best
          for my passion as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
