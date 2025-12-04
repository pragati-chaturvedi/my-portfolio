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
                        I'm a full-stack engineer and AI enthusiast focused on turning real-world problems into polished, usable products. I’ve built tools like ChicMate (AI styling assistant), MindShelf (knowledge decluttering system), and LibBot (library automation through natural language).
                    </p>

                    <p className="text-gray-300 mb-4">
                        At CSU Sacramento’s Web & Mobile Services team, I automated analysis of 20,000+ PDFs and 4,000+ pages, built ML workflows, and led performance audits using GA4 to improve accessibility and site health across departments.
                    </p>

                    <p className="text-gray-300 mb-4">
                        I enjoy the intersection of backend engineering, interface design, and AI systems—especially generative AI, multimodal models, and emerging areas like game development.
                    </p>
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
                </motion.div>

            </div>
        </section>
    );
}

export default About;
