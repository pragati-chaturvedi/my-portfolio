import { motion } from 'framer-motion';

function About() {
    return (
        <section
            id="about"
            className="px-6 sm:px-20 pt-16 pb-24 bg-black text-white font-sans"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-green-400 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>

            {/* Text and Image Row */}
            <div className="flex flex-col sm:flex-row justify-between gap-12 items-start sm:items-start">
                {/* Text Section */}
                <motion.div
                    className="w-full sm:w-[58%] text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-300 mb-4">
                        I’m a soon-to-graduate Master’s student in Computer Science at California State University, Sacramento, currently working as a Web Developer with the University's IT department.
                    </p>
                    <p className="text-gray-300 mb-4">
                        My journey has taken me through AI-driven projects like <strong>ChicMate</strong> and <strong>LibBot</strong>, where I combined full-stack and mobile development with machine learning to build scalable, real-world applications.
                    </p>
                    <p className="text-gray-300 mb-4">
                        I specialize in software development, AI integration, and accessibility. <strong>My main focus these days is</strong> building realiable, intelligent systems that bridge engineering with applied machine learning - and I'm actively seeking full-time opportunities in Software or ML engineering.
                    </p>

                    <div className="mt-6">
                        <p className="text-gray-300 mb-2">
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm text-gray-400">
                            <ul className="space-y-1 list-disc list-inside">
                                <li>React Native</li>
                                <li>Flask</li>
                                <li>PyTorch</li>
                                <li>Generative Models</li>
                            </ul>
                            <ul className="space-y-1 list-disc list-inside">
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                            <ul className="space-y-1 list-disc list-inside">
                                <li>FastAPI</li>
                                <li>JavaScript</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="w-full sm:w-1/2 flex justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.img
                        src="/DP.jpg"
                        alt="Pragati Chaturvedi"
                        className="w-72 sm:w-96 h-auto rounded-xl object-cover border-4 border-green-400 shadow-xl transition-transform duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default About;
