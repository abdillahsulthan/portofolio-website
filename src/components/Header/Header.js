import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';
import imageSulthan from '../../assets/sulthan-removedbg.png';

export default function Header() {
  return (
    <div className="flex flex-col items-center px-20 py-20">
        <div className="content-center relative flex items-center">
            <div className="mr-10">
                <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-white">
                    <img className="w-full h-full object-cover" src={imageSulthan} alt="Profile" />
                </div>
            </div>
            <div>
                <h1 className="text-start lg:text-7xl md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-500">
                    Hello, I am Abdillah Sulthan
                </h1>
                <p className="text-start lg:text-5xl md:text-4xl text-2xl font-semibold text-white mt-4">
                    Specializing in <span className="hidden sm:inline">
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                'Frontend Development', 
                                2000,
                                'Backend Development', 
                                2000,
                                'Android Development', 
                                2000
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                        />
                    </span>
                    <span className="sm:hidden xs:visible">Mobile and Web Development</span>
                </p>
                <div className="flex mt-10">
                    <a href="https://github.com/abdillahsulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://linkedin.com/in/abdillahsulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://instagram.com/abdillah.sulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://instagram.com/abdillah.sulthan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGoogleDrive} className="text-white text-2xl hover:text-gray-400" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
