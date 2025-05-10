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
                        title="ChicMate - AI-Powered Multi-Modal Fashion Recommendation App"
                        image="/Projects/ChicMate.png"
                        description="Built a cross-platform mobile application (iOS/Android) enabling users to receive personalised outfit suggestions based on location weather and user needs through text or image inputs via an interactive chat interface.
                        Developed a FastAPI backend integrated with Firebase Authentication, Firestore and Storage to securely manage user profiles, wardrobe metadata and media uploads in real time. Implemented Wardrobe Management for users to add /delete or update items in their Wardrobes. 
                        Engineered a multi-modal recommendation engine using CLIP for visual feature extraction and cosine-similarity vector search, combined with Gemini for conversational intent classification and context-aware response generation.
                        Enhanced recommendation relevance by incorporating contextual data (weather, local style) and fallback/error-handling mechanisms, delivering descriptive feedback along with image previews of the suggested outfits."
                        tech="React Native with Expo, FastAPI, Firbase Firstore, Google Gemini, Hugging Face CLIP, Cosine Similarity, Vector Search, Firebase Auth"
                        github="https://github.com/pragati-chaturvedi/ChicMate"
                    />

                    <ProjectCard
                        title="MindShelf - A Personal Knowledge Library"
                        image="/Projects/MindShelf.png"
                        description="Built this project for MLH AI Hackfest Hackathon. It helps users easily save and organise valuable online content—articles, videos, threads, or research papers—without losing track. Just paste a link, and Gemini summarises it, adds a title, tags which get saved as searchable “Mindfiles.” Users can find content later using natural language search by keyword, topic, or time.
                        A Chrome Extension makes saving even easier while browsing. Built in under 24 hours, MindShelf turns scattered content into an organized, accessible library.Web App is presented in a responsive React dashboard.
                        The backend handles AI summarization and metadata storage in MongoDB Atlas, while a seamless CRUD interface lets you add, edit, and revisit resources with one click. 
                        This project sharpened my skills in integrating generative AI into real-world productivity tools and building scalable, component-driven UIs."
                        tech="React.js, React Router, Node.js, Express.js, MongoDB Atlas, Gemini API, Chrome Extension API, HTML/CSS"
                        github="https://github.com/AI-Hackathon-April-2025/MindShelf"
                    />

                    <ProjectCard
                        title="LibBot - AI-Driven Library Management Chatbot"
                        image="Projects/LibBot.png"
                        description="Developed LibBot, an AI-powered chatbot that integrates OpenAI's GPT with Google Sheets to streamline the management of a library's inventory system. Using natural language processing, LibBot allows users to interact with the library’s database by querying, adding, searching, and updating book details directly through a conversational interface.
                        LibBot demonstrates the power of AI in automating administrative tasks and improving user experiences. It shows my ability to integrate Google Sheets for data management while leveraging OpenAI’s GPT for natural and intuitive user interactions. This project reflects my expertise in building AI-driven applications and handling real-time data updates."
                        tech="Python,Flask, OpenAI GPT API,Function-Calling, Google Sheets API"
                        github="https://github.com/pragati-chaturvedi/LibBot"
                    />

                    <ProjectCard
                        title="Chaos Game - Fractal Visualisation UI"
                        image="/Projects/Chaosgame.png"
                        description="A web application that allows users to explore fractals of polygons in real life based on the mathematical concept of the chaos game, using React and Canvas API. The application uses an algorithm to generate fractals, based on the Sierpinski Triangle, but with an additional option to generate Hexagon as well."
                        tech="React, Canvas API, React Router"
                        github="https://github.com/pragati-chaturvedi/chaos-game"
                        demo="https://pragati-chaturvedi.github.io/chaos-game/"
                    />

                    <ProjectCard
                        title="AppointEase - AI-Powered Appointment Scheduling Bot"
                        image="/Projects/AppointEase.png"
                        description="Developed AppointEase, an intelligent appointment scheduling bot that integrates with Google Calendar. Using OpenAI's GPT-3.5 for natural language processing, AppointEase enables users to schedule, view, and manage appointments directly through conversational interactions. The bot's function-calling feature ensures seamless integration with Google Calendar, allowing for a smooth user experience.
                        This project showcases integrating AI with real-world tools, simplifying complex tasks like scheduling through intuitive conversational interfaces. It’s a great example of how AI can automate and streamline everyday activities."
                        tech="Python, Flask, OpenAI API, Google Calendar API, Google Docs API, Tkinter, Open-AI Function-calling"
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
