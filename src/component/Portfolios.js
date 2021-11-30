import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonHeader from './CommonHeader';
import TheSpinner from './TheSpinner';

const Portfolios = () => {
  const [projects, setProjects] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
    axios
      .get('https://vast-lowlands-02066.herokuapp.com/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  return (
    <div className="p-5">
      <CommonHeader
        title="Projects"
        iconShape="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
      {/* project body */}
      {isLoad && <TheSpinner />}
      {!isLoad && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {projects?.map((project) => (
            <div
              key={project._id}
              className="bg-gray-700 p-5 rounded-lg shadow-lg hover:bg-gray-600 duration-300 transition">
              <img src={project.image} alt={project.name} className="w-full rounded-lg" />
              <h3 className="text-center text-xl font-semibold font-ubu my-5">{project.name}</h3>

              <div className="flex gap-3 text-sm text-center mt-2 font-ral justify-center">
                <a
                  href={project?.live}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                  Live link
                </a>
                <a
                  href={project?.client}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                  Client
                </a>
                {project?.server && (
                  <a
                    href={project?.server}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="bg-gray-900 rounded-lg shadow-lg py-1 px-2 my-1">
                    Server
                  </a>
                )}
              </div>
              {/* Details */}
              <div className="text-center">
                <Link
                  to={`/project/${project._id}`}
                  className="mt-3 inline-block bg-gray-900 rounded-lg font-ral shadow-lg py-1.5 w-4/5">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolios;
