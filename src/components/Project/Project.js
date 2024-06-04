import React, { useState } from 'react';
import faKotlin from '../../assets/kotlin.png'
import faAndroid from '../../assets/android.png'
import faReact from '../../assets/react.png'
import faSpringBoot from '../../assets/springboot.png'
import faPostgresql from '../../assets/postgresql.png'
import faDocker from '../../assets/docker.png'
import faFlutter from '../../assets/flutter.png'
import faDjango from '../../assets/django.png'
import faTailwind from '../../assets/tailwind.png'
import faBootstrap from '../../assets/bootstrap.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projectExperiences = [
  {
    title: 'Sport Activities',
    description: 'The Sport Activities Application is an Android app developed as the culminating project for the "Belajar Membuat Aplikasi Android untuk Pemula" course by Dicoding. Built with Kotlin, it enables users to view sports activities offered by the Faculty of Computer Science UI. Users can access detailed information about each activity, including descriptions, practice locations, and supervisors.',
    role: 'Android Developer',
    time: 'Mar 2024',
    image: require('../../assets/Project-Sport.png'),
    techStacks: [
      faKotlin, faAndroid
    ],
    githubRepo: 'https://github.com/abdillahsulthan/sport-activities-application'
  },
  {
    title: 'GitHub Users',
    description: 'The GitHub Users Application is an Android app developed as the culminating project for the "Belajar Fundamental Aplikasi Android" course by Dicoding. Built with Kotlin, it enables users to explore GitHub users. Leveraging the GitHub API, it features user search functionality, the ability to add favorites for quick access, and offers a convenient dark mode option for improved readability in low-light environments.',
    role: 'Android Developer',
    time: 'Mar 2024',
    image: require('../../assets/Project-GitHub.png'),
    techStacks: [
      faKotlin, faAndroid
    ],
    githubRepo: 'https://github.com/abdillahsulthan/github-user-application'
  },
  {
    title: 'Cancer Detection',
    description: 'The Cancer Detection Application is an Android app developed as the culminating project for the "Belajar Penerapan Machine Learning untuk Android" course by Dicoding. Built with Kotlin, It enables users to upload images and detects whether they contain cancer using a machine learning model. Additionally, it includes a feature to view the analysis history of user-uploaded images and provides articles about cancer from an external API.',
    role: 'Android Developer',
    time: 'Apr 2024',
    image: require('../../assets/Project-Cancer.png'),
    techStacks: [
      faKotlin, faAndroid
    ],
    githubRepo: 'https://github.com/abdillahsulthan/cancer-detection-application'
  },
  {
    title: 'Katab Story',
    description: 'The Katab Story Application is an Android app developed as the culminating project for the "Belajar Pengembangan Aplikasi Android Intermediate" course by Dicoding. Built with Kotlin, it enables users to log in and view stories from all users of the Story Application. Additionally, it allows users to upload their own stories using either the gallery or CameraX.',
    role: 'Android Developer',
    time: 'May 2024',
    image: require('../../assets/Project-Story.png'),
    techStacks: [
      faKotlin, faAndroid
    ],
    githubRepo: 'https://github.com/abdillahsulthan/story-application'
  },
  {
    title: 'SILOGISTIK',
    description: 'Developed a web application with Spring Boot, offers an advanced logistics solution for efficient supply chain management.',
    role: 'Full Stack Developer',
    time: 'Oct 2023',
    image: require('../../assets/Project-SILOGISTIK.png'),
    techStacks: [
      faSpringBoot, faDocker, faPostgresql, faBootstrap
    ],
    githubRepo: 'https://github.com/abdillahsulthan/SILOGISTIK'
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
    githubRepo: 'https://github.com/PropenFroz'
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
    githubRepo: 'https://github.com/ngetech'
  },
];

const Modal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div
        className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
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

const ProjectExperienceCard = ({ experience, onReadMore }) => {
  return (
    <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent text-white">
      <div
        class="relative mx-4 mt-4 overflow-hidden text-white rounded-xl">
        <img src={experience.image} alt={experience.title} />
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <h5 class="block font-sans text-xl antialiased font-bold leading-snug tracking-normal">
            {experience.title}
          </h5>
        </div>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-white">
          {experience.role}
        </p>
        <p className="block font-sans antialiased font-light leading-relaxed mt-4 text-sm">
          <span className="bg-gray-400 bg-opacity-50 px-4 py-1 rounded-xl border-2 border-gray-300">{experience.time}</span>
        </p>
      </div>
      <div class="p-6 pt-3">
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

  const handleReadMore = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="content-center mb-12">
        <h1 className="text-start lg:text-4xl md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300 font-semibold">
          Project Experiences
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {projectExperiences.map((experience) => (
          <ProjectExperienceCard key={experience.title} experience={experience} onReadMore={handleReadMore} />
        ))}
      </div>
      {selectedExperience && (
        <Modal experience={selectedExperience} onClose={handleCloseModal} />
      )}
    </div>
  );
}