import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Contact() {
    return (
        <section
            id="contact"
            className="px-6 sm:px-20 pt-20 pb-32 bg-black text-white font-sans"
        >
            <motion.div
                className="text-center max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-4">
                    Let’s Connect
                </h2>

                <p className="text-gray-300 mb-6 text-base sm:text-lg">
                    I’m actively seeking full-time roles in Software Engineering or Machine Learning.
                    Feel free to reach out — I’d love to chat about cool projects, opportunities, or collaborations.
                </p>

                <div className="flex flex-col items-center gap-4">
                    {/* Email & LinkedIn */}
                    <div className="flex gap-6 flex-wrap justify-center">
                        <a
                            href="mailto:pragatic810@icloud.com"
                            className="text-green-400 hover:text-white flex items-center gap-2 text-lg"
                        >
                            <FaEnvelope /> Email Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pragati-chaturvedi-2b2885219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-white flex items-center gap-2 text-lg"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                    <div className="flex flex-col items-center mb-4">
                        <img
                            src="/Resume_QR.jpeg"
                            alt="QR Code for Resume"
                            className="w-24 h-24 object-contain border border-gray-700 rounded-md"
                        />
                        <p className="text-xs text-gray-400">
                            My Resume
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;
