import React, { useState, useEffect } from 'react';
import faKotlin from '../../assets/kotlin.png';
import faAndroid from '../../assets/android.png';
import faReact from '../../assets/react.png';
import faSpringBoot from '../../assets/springboot.png';
import faPostgresql from '../../assets/postgresql.png';
import faDocker from '../../assets/docker.png';
import faFlutter from '../../assets/flutter.png';
import faDjango from '../../assets/django.png';
import faTailwind from '../../assets/tailwind.png';
import faBootstrap from '../../assets/bootstrap.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const projectExperiences = [
  {
    title: 'Katab Story',
    description: 'The Katab Story Application is an Android app developed as the culminating project for the "Belajar Pengembangan Aplikasi Android Intermediate" course by Dicoding. Built with Kotlin, it enables users to log in and view stories from all users of the Story Application. Additionally, it allows users to upload their own stories using either the gallery or CameraX.',
    role: 'Android Developer',
    time: 'May 2024',
    image: require('../../assets/Project-Story.png'),
    techStacks: [
      faKotlin, faAndroid
    ],
    githubRepo: 'https://github.com/abdillahsulthan/story-application',
  },
  {
    title: 'SILK',
    description: 'An application for Purwacaraka company aimed at enhancing operational efficiency concerning the provision of financial transaction reports occurring within the Purwacaraka company.',
    role: 'Full Stack Developer',
    time: 'May 2024',
    image: require('../../assets/Project-SILK.png'),
    techStacks: [
      faSpringBoot, faDocker, faPostgresql, faReact, faBootstrap
    ],
    githubRepo: 'https://github.com/PropenFroz',
  },
  {
    title: 'NgeTech',
    description: 'Creating a web app with Django and extending functionality to mobile with Flutter for a unified, seamless user experience across platforms.',
    role: 'Web and Mobile Developer',
    time: 'Jun 2022',
    image: require('../../assets/Project-Ngetech.png'),
    techStacks: [
      faDjango, faFlutter, faTailwind
    ],
    githubRepo: 'https://github.com/ngetech',
  },
];

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
          <img src={experience.image} alt={experience.title} className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-4"/>
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
            {experience.githubRepo && (
              <div className="mt-4 flex flex-col items-start">
                <h3 className="text-lg font-semibold mb-2">Repository:</h3>
                <a href={experience.githubRepo} target="_blank" rel="noopener noreferrer" className='flex items-center'>
                  <FontAwesomeIcon icon={faGithub} className="text-black text-3xl hover:text-gray-400" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectExperienceCard = ({ experience, onReadMore, onImageLoad }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent text-white">
      <div className="relative mx-4 mt-4 overflow-hidden text-white rounded-xl">
        <img src={experience.image} alt={experience.title} onLoad={onImageLoad} />
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

export default function Project() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = projectExperiences.map(
      (experience) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = experience.image;
          img.onload = resolve;
        })
    );

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  const Spinner = () => (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="flex flex-col items-center py-10">
      {!allImagesLoaded ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projectExperiences.map((experience) => (
            <ProjectExperienceCard key={experience.title} experience={experience} onReadMore={handleReadMore} />
          ))}
        </div>
      )}

      {selectedExperience && <Modal experience={selectedExperience} onClose={handleCloseModal} />}
    </div>
  );  
}