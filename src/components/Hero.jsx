import { motion } from 'framer-motion';

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-20 bg-black text-white font-sans">

            {/* Intro Line */}
            <motion.p
                className="text-green-400 text-md sm:text-lg mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Hi, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
                className="text-4xl sm:text-6xl font-extrabold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Pragati Chaturvedi
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
                className="text-2xl sm:text-4xl font-semibold text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                — full-stack developer & AI enthusiast.
            </motion.h2>

            {/* Bio */}
            <motion.p
                className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                I'm a creative developer and AI enthusiast with a love for practical innovation.
                I’m focused on building meaningful tools that simplify and empower everyday life.
            </motion.p>
        </section>
    );
}

export default Hero;
