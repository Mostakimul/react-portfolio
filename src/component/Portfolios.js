import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommonHeader from './CommonHeader';

const Portfolios = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get('/projects.json')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-5">
      <CommonHeader
        title="Projects"
        iconShape="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
      {/* project body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="bg-gray-700 p-5 rounded-lg shadow-lg hover:bg-gray-600 duration-300 transition">
            <img src={project.image} alt={project.name} className="w-full rounded-lg" />
            <h3 className="text-center text-xl font-semibold my-5">{project.name}</h3>
            {project.technology.map((tech) => (
              <p
                key={tech}
                className="inline-block mx-1 bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                {tech}
              </p>
            ))}
            <hr className="my-2" />

            <div className="flex gap-3 text-center mt-2 justify-center">
              <a href={project?.live} className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                Live link
              </a>
              <a href={project?.client} className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                Client
              </a>
              {project?.server && (
                <a
                  href={project?.server}
                  className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                  Server
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
