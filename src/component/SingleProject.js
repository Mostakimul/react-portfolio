import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommonHeader from './CommonHeader';
import TheSpinner from './TheSpinner';

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  // fecth
  useEffect(() => {
    setIsLoad(true);
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, [id]);

  return (
    <div className="p-5">
      <CommonHeader
        title={project?.name}
        iconShape="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
      {isLoad && <TheSpinner />}
      {/* Single project body */}
      {!isLoad && (
        <div className="font-ral">
          {/* images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gray-900 p-2 m-2 rounded-lg shadow-lg">
              <img src={project?.image} alt="img1" className="rounded-lg" />
            </div>
            <div className="bg-gray-900 p-2 m-2 rounded-lg shadow-lg">
              <img src={project?.image2} alt="img1" className="rounded-lg" />
            </div>
            <div className="bg-gray-900 p-2 m-2 rounded-lg shadow-lg">
              <img src={project?.image3} alt="img1" className="rounded-lg" />
            </div>
          </div>
          {/* Technology Used */}
          <div className="flex flex-wrap items-center mt-5">
            <h2 className="text-xl">Technology used:</h2>
            {project?.technology
              ? project.technology.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mx-2 my-1 bg-gray-900 py-1.5 px-2 rounded-lg shadow-lg text-sm">
                      {tech}
                    </span>
                  );
                })
              : ''}
          </div>
          {/* Details */}
          <div className="mt-5 bg-gray-900 p-3 rounded-lg shadow-lg">
            <h2 className="text-xl mb-3">Features: </h2>
            <ul className="list-disc list-inside">
              {project.details
                ? project?.details.map((det, index) => <li key={index}>{det}</li>)
                : ''}
            </ul>
          </div>
          {/* Links */}
          <div className="flex flex-wrap items-center mt-5">
            <h2 className="text-xl">Links: </h2>
            <a
              href={project?.live}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-gray-900 hover:bg-gray-700 duration-300 transition m-1 rounded-lg shadow-lg py-1.5 px-2">
              Live link
            </a>
            <a
              href={project?.client}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-gray-900 hover:bg-gray-700 duration-300 transition m-1 rounded-lg shadow-lg py-1.5 px-2">
              Frontend Code
            </a>
            <a
              href={project?.server}
              rel="noopener noreferrer"
              target="_blank"
              className="bg-gray-900 hover:bg-gray-700 duration-300 transition m-1 rounded-lg shadow-lg py-1.5 px-2">
              Server Code
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
