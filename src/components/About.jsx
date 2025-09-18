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
                        I am a full-stack software engineer, AI enthusiast, and recent Computer Science graduate from California State University, Sacramento.
                    </p>
                    <p className='text-gray-300 mb-4'>
                        I like building things that help in solving real-world problems. Whether it’s an AI-driven styling assistant that helps users decide what to wear (ChicMate), a content decluttering tool that turns your saved links into a personal knowledge system (MindShelf), or an intelligent assistant that manages library inventories through natural language (LibBot), every project I work on starts with a real-world friction point - and ends in a working product that tries to solve it.
                    </p>
                    <h2 className='text-2xl sm:text-xl font-bold text-gray-400 mb-4'>
                        <strong>My Journey so far</strong>
                    </h2>
                    <p className="text-gray-300 mb-4">
                        While pursuing my Master's, I joined the <strong>Web & Mobile Services team at CSU Sacramento</strong>, where I automated classification and anlysis of over 20,000 PDFs and 4,000+ web pages across the university's digital ecosystem. I developed methods to flag stale or orphaned content, designed ML pipelines for intelligent document classification, and led performance audits using GA4 to help departments understand what their users were actually doing. It was less about code and more about clarity — and how to make systems more usable, maintainable, and accessible.
                    </p>
                    <p className="text-gray-300 mb-4">
                        I build products where backend logic, interface design, and AI integration all talk to each other. I love the backend — data modeling, API design, AI workflows — but I also care deeply about how the frontend feels. I’m especially excited by generative AI, multi-modal systems, and anything that turns human intent into intelligent action.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Lately, I’ve been exploring Unity and game development, because curiosity doesn’t sit still. I'm also interested in system design, scalable architectures, and the creative ways AI can power everyday tools.
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
                    className="w-full sm:w-1/2 flex flex-col items-center gap-6"
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
                    <motion.img
                        src="/CalHacks.jpg"
                        alt="Pragati Chaturvedi at Hackathon"
                        className="w-72 sm:w-96 h-auto rounded-xl object-cover border-4 border-green-400 shadow-xl transition-transform duration-300 hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default About;
