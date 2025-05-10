import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ title, image, description, tech, github, demo }) {
    return (
        <motion.div
            className="bg-[#1a1a1a]/70 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300 shadow-lg"
            whileHover={{ y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.1 }}
        >
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            {image && (
                <img
                    src={image}
                    alt={`${title} screenshot`}
                    className="w-full h-auto object-contain rounded-md mb-4 border border-gray-700"
                />
            )}
            <p className="text-gray-300 text-sm mb-4">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.split(',').map((item, index) => (
                    <span
                        key={index}
                        className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full"
                    >
                        {item.trim()}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 mt-auto">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1 text-sm"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1 text-sm"
                    >
                        <FaExternalLinkAlt size={14} />
                        Live
                    </a>
                )}
            </div>
        </motion.div>
    );
}

export default ProjectCard;
