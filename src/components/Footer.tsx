import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="p-4 bg-blue-600 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm sm:text-base">Crafted with passion and precision by Akshat Tandon.</p>
            <div className="flex gap-4 ">
                <a href="https://github.com/akshattnd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/akshat-tandon-a29190242" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FaLinkedin size={25} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
