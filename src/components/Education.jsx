import { motion } from 'framer-motion';

const education = [
    {
        title: "M.S. Computer Science",
        school: "California State University, Sacramento",
        duration: "2023 – 2025",
    },
    {
        title: "Postgraduate Diploma in Computer Science",
        school: "DAVV, Indore",
        duration: "2021 – 2022",
    },
    {
        title: "B.Sc. in Mathematics & Computer Science",
        school: "Govt. Science College, Indore",
        duration: "2017 – 2020",
    },
];

function Education() {
    return (
        <section
            id="education"
            className="px-6 sm:px-20 pt-16 pb-24 bg-black text-white font-sans"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-green-400 mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Education
            </motion.h2>

            <div className="relative w-full max-w-4xl mx-auto">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700 transform -translate-x-1/2"></div>

                {education.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            className={`mb-10 flex flex-col sm:flex-row items-center w-full ${isLeft ? 'sm:justify-start' : 'sm:justify-end'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Connector dot */}
                            <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-black z-10 sm:absolute left-1/2 transform sm:-translate-x-1/2 mb-4 sm:mb-0"></div>

                            {/* Text content */}
                            <div className="w-full sm:w-1/2 px-6 text-center sm:text-left sm:px-4 z-10 sm:pl-10 sm:pr-10">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.school}</p>
                                <p className="text-xs text-gray-500">{item.duration}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Education;
