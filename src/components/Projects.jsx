import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section
            id="projects"
            className="px-6 sm:px-20 pt-[5vh] pb-20 sm:pt-[6vh] sm:pb-24 bg-black text-white font-sans"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-10">
                    Projects
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                    <ProjectCard
                        title="ChicMate"
                        description="AI-powered outfit recommendation app using computer vision and weather data."
                        tech="React Native, FastAPI, CLIP, Gemini API, Firebase"
                        github="https://github.com/pragati-chaturvedi/ChicMate"
                    />

                    <ProjectCard
                        title="LibBot"
                        description="An AI chatbot for managing library inventory with real-time GPT-powered responses."
                        tech="Flask, OpenAI GPT API, Google Sheets API"
                        github="https://github.com/pragati-chaturvedi/LibBot"
                    />

                    <ProjectCard
                        title="Chaos Game"
                        description="Fractal visualizer built using recursive geometry and Canvas API."
                        tech="React, Canvas API, React Router"
                        github="https://github.com/pragati-chaturvedi/chaos-game"
                        demo="https://pragati-chaturvedi.github.io/chaos-game/"
                    />

                    <ProjectCard
                        title="AppointEase"
                        description="GPT-powered appointment scheduling assistant integrating Google Calendar and Docs."
                        tech="Python, Flask, OpenAI API, Google Calendar API"
                        github="https://github.com/pragati-chaturvedi/AppointEase"
                    />
                </div>
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/pragati-chaturvedi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-green-300 transition"
                    >
                        Show More
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

export default Projects;
