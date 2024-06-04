import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogleDrive} from '@fortawesome/free-brands-svg-icons';
import imageSulthan from '../../assets/sulthan-removedbg.png';

export default function Header() {
  return (
    <div className="flex flex-row justify-center items-center px-20 py-20">
        <div className="mr-10">
            <div className="lg:w-44 lg:h-44 md:w-32 md:h-32 w-30 h-30 rounded-full overflow-hidden border-2 border-white">
                <img className="w-full h-full object-cover" src={imageSulthan} alt="Profile" />
            </div>
        </div>
        <div className="text-start">
            <h1 className="lg:text-7xl md:text-4xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-blue-500">
                Hello, I am Abdillah Sulthan
            </h1>
            <p className="lg:text-5xl md:text-3xl text-2xl font-semibold text-white mt-4">
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
                <span className="sm:hidden xs:visible">Web and Mobile Development</span>
            </p>
            <div className="flex flex-wrap mt-10 items-start">
                <a href="https://github.com/abdillahsulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-gray-400" />
                </a>
                <a href="https://linkedin.com/in/abdillahsulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-400" />
                </a>
                <a href="https://instagram.com/abdillah.sulthan" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-gray-400" />
                </a>
                <a href="https://drive.google.com/drive/folders/1y9adkHWEg_d8dBTRLq64gCZPYB5rmzQ7?usp=share_link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGoogleDrive} className="text-white text-2xl hover:text-gray-400" />
                </a>
            </div>
        </div>
    </div>
  );
}
