import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Work from '../Work/Work';
import Project from '../Project/Project';

const WorkAndProject = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <Tabs className="w-full max-w-6xl px-4">
        <TabList className="flex justify-center space-x-4 md:space-x-8 px-4 md:px-0">
          <Tab
            selectedClassName="border-b-2 border-blue-500 text-blue-500 font-semibold"
            className="cursor-pointer px-4 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300 font-semibold focus:outline-none text-center hover:text-blue-400"
          >
            Work Experiences
          </Tab>
          <Tab
            selectedClassName="border-b-2 border-blue-500 text-blue-500 font-semibold"
            className="cursor-pointer px-4 py-2 text-xl text-transparent bg-clip-text bg-gradient-to-br from-gray-500 to-gray-300 font-semibold focus:outline-none text-center hover:text-blue-400"
          >
            Project Experiences
          </Tab>
        </TabList>

        <TabPanel className="mt-8">
          <Work />
        </TabPanel>

        <TabPanel className="mt-8">
          <Project />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WorkAndProject;