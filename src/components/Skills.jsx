import { motion } from 'framer-motion';
import {
    SiJavascript, SiPython, SiCplusplus, SiMysql,
    SiReact, SiNodedotjs, SiHtml5, SiCss3, SiFastapi, SiFlask, SiFirebase, SiAngular,
    SiTensorflow, SiVite, SiPytorch, SiKeras, SiOpenai, SiScikitlearn, SiMongodb, SiPostman, SiGithub, SiGooglegemini, SiTailwindcss, SiPandas
} from 'react-icons/si';
import { FaJava, FaAws } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";

const categories = [
    {
        title: "Languages",
        icons: [
            { icon: <SiPython />, label: "Python" },
            { icon: <SiJavascript />, label: "JavaScript" },
            { icon: <FaJava />, label: "Java" },
            { icon: <SiCplusplus />, label: "C++" },
            { icon: <SiMysql />, label: "MySQL" },
        ],
    },
    {
        title: "Web & Mobile",
        icons: [
            { icon: <SiReact />, label: "React" },
            { icon: <SiVite />, label: "Vite" },
            { icon: <TbBrandReactNative />, label: "React Native" },
            { icon: <SiNodedotjs />, label: "Node.js" },
            { icon: <SiHtml5 />, label: "HTML5" },
            { icon: <SiCss3 />, label: "CSS3" },
            { icon: <SiTailwindcss />, label: "TailwindCSS" },
            { icon: <SiAngular />, label: "Angular" },
            { icon: <SiFirebase />, label: "Firebase" },
            { icon: <SiFastapi />, label: "FastAPI" },
            { icon: <SiFlask />, label: "Flask" },
        ],
    },
    {
        title: "AI & ML",
        icons: [
            { icon: <SiTensorflow />, label: "TensorFlow" },
            { icon: <SiPytorch />, label: "PyTorch" },
            { icon: <SiKeras />, label: "Keras" },
            { icon: <SiPandas />, label: "Pandas" },
            { icon: <SiScikitlearn />, label: "scikit-learn" },
            { icon: <SiOpenai />, label: "OpenAI API" },
            { icon: <SiGooglegemini />, label: "Gemini API" },

        ],
    },
    {
        title: "Tools & Platforms",
        icons: [
            { icon: <FaAws />, label: "AWS" },
            { icon: <SiMongodb />, label: "MongoDB" },
            { icon: <SiPostman />, label: "Postman" },
            { icon: <BiLogoVisualStudio />, label: "VS Code" },
            { icon: <SiGithub />, label: "GitHub" },
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="px-6 sm:px-20 pt-16 pb-24 bg-black text-white font-sans"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-green-400 mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills & Tools
            </motion.h2>

            <div className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
                {categories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                            {category.icons.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-1 w-20 hover:text-green-400 transition"
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <span className="text-xs text-center">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
