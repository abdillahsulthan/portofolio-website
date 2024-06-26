import React, { useState, useEffect } from 'react';
import faKotlin from '../../assets/kotlin.png'
import faAndroid from '../../assets/android.png'
import faFirebase from '../../assets/firebase.png'
import faReact from '../../assets/react.png'
import faPHP from '../../assets/php.png'
import faCpanel from '../../assets/cpanel.png'
import faMySql from '../../assets/mysql.png'
import faBootstrap from '../../assets/bootstrap.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const workExperiences = [
  {
    title: 'netZAP',
    description: 'Collaborated in a team of four to develop a website for product recognition, career development, and company insight for netZAP utilizing the React framework and PHP. Developed features for product recognition, career advancement, and company insight on the netZAP platform.',
    role: 'Full Stack Developer',
    time: 'Jan - May, 2024',
    image: require('../../assets/Work-netZAP.png'),
    techStacks: [
      faReact, faPHP, faCpanel, faMySql, faBootstrap
    ]
  },
  {
    title: 'Bangkit Academy 2024',
    description: 'Bangkit Academy is a technology and professional development training program supported by Google, GoTo, and Traveloka. With a comprehensive curriculum and interactive learning approach, the program aims to equip participants with the skills necessary for success in the technology industry. At Bangkit Academy, participants engage in coursework on the Dicoding website, attend self-improvement seminars, and collaborate on capstone projects to enhance technical skills and professional development.',
    role: 'Android Developer',
    time: 'Feb - Jun, 2024',
    image: require('../../assets/Work-Bangkit.png'),
    techStacks: [
      faAndroid, faKotlin, faFirebase
    ]
  },
  {
    title: 'Faculty of Computer Science',
    description: 'Assisted in teaching and grading for Linear Algebra and Introduction to Computer Architecture courses. Developed instructional materials for Linear Algebra topics and provided support using AVR Studio 4 and Logisim for Computer Architecture. ',
    role: 'Teaching Assistant',
    time: 'Jan 2023 - Jan 2024',
    image: require('../../assets/Work-TA.png'),
  },
];

const WorkExperienceCard = ({ experience, onReadMore, onImageLoad }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent text-white">
      <div className="relative mx-4 mt-4 overflow-hidden text-white rounded-xl">
        <img src={experience.image} alt={experience.title} onLoad={onImageLoad}/>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal">
            {experience.title}
          </h5>
        </div>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-white">
          {experience.role}
        </p>
        <p className="block font-sans antialiased font-light leading-relaxed mt-4 text-sm">
          <span className="bg-gray-400 bg-opacity-50 px-4 py-1 rounded-xl border-2 border-gray-300">{experience.time}</span>
        </p>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-gray-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white"
          type="button"
          onClick={() => onReadMore(experience)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div
      className="bg-blue-600 h-2.5 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const Modal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 md:mx-0 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{experience.title}</h2>
        <div className="flex flex-col md:flex-row">
          <img src={experience.image} alt={experience.title} className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-4" />
          <div className="flex-1">
            <p className="text-gray-500 text-justify">{experience.description}</p>
            {experience.techStacks && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap space-x-4">
                  {experience.techStacks.map((tech, index) => (
                    <img key={index} src={tech} alt="Tech Stack" className="h-8 w-auto mb-2" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Work() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalImages = workExperiences.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadedCount < totalImages) {
        setLoadedCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [loadedCount, totalImages]);  

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };


  const progress = (loadedCount / totalImages) * 100;

  return (
    <div className="flex flex-col items-center py-10">
      <div className="content-center mb-12">
        <h1 className="text-start lg:text-4xl md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300 font-semibold">
          Work Experiences
        </h1>
      </div>
      {loadedCount < totalImages ? (
        <div className="w-full max-w-md">
          <ProgressBar progress={progress} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {workExperiences.map((experience) => (
            <WorkExperienceCard key={experience.title} experience={experience} onReadMore={handleReadMore} onImageLoad={handleImageLoad} />
          ))}
        </div>
      )}
      {selectedExperience && (
        <Modal experience={selectedExperience} onClose={handleCloseModal} />
      )}
    </div>
  );
}