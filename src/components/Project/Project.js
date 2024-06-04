import React from 'react';

const workExperiences = [
  {
    title: 'Sport Activities',
    description: 'Description for project one.',
    role: 'Android Developer',
    time: 'Mar 2024',
    image: require('../../assets/Project-Sport.png'),
  },
  {
    title: 'GitHub Users',
    description: 'Description for project three.',
    role: 'Android Developer',
    time: 'Mar 2024',
    image: require('../../assets/Project-GitHub.png'),
  },
  {
    title: 'Cancer Detection',
    description: 'Description for project two.',
    role: 'Android Developer',
    time: 'Apr 2024',
    image: require('../../assets/Project-Cancer.png'),
  },
  {
    title: 'Katab Story',
    description: 'Description for project two.',
    role: 'Android Developer',
    time: 'May 2024',
    image: require('../../assets/Project-Story.png'),
  },
  {
    title: 'SILOGISTIK',
    description: 'Description for project two.',
    role: 'Full Stack Developer',
    time: 'Oct 2023',
    image: require('../../assets/Project-SILOGISTIK.png'),
  },
  {
    title: 'SILK',
    description: 'Description for project two.',
    role: 'Full Stack Developer',
    time: 'May 2024',
    image: require('../../assets/Project-SILK.png'),
  },
];

const WorkExperienceCard = ({ experience }) => {
  return (
    <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent text-white">
      <div
        class="relative mx-4 mt-4 overflow-hidden text-white rounded-xl">
        <img src={experience.image} alt={experience.title} />
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal">
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
          class="block w-full select-none rounded-lg bg-gray-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white"
          type="button">
          Read More
        </button>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="content-center mb-12">
        <h1 className="text-start lg:text-4xl md:text-3xl text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300 font-semibold">
          Project Experiences
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {workExperiences.map((experience) => (
          <WorkExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </div>
  );
}