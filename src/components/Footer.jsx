import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
    return (
        <motion.footer
            className="bg-black text-gray-400 text-sm text-center py-10 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Links Row */}
            <div className="flex justify-center gap-6 mb-4 text-xl text-green-400">
                <a
                    href="https://github.com/pragati-chaturvedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/pragati-chaturvedi-2b2885219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:your-email@example.com"
                    className="hover:text-white transition"
                >
                    <HiOutlineMail />
                </a>
            </div>

            {/* Signature Line */}
            {/* Designed by Line */}
            <p className="text-sm text-gray-400 mb-1">
                Designed & built by <span className="text-white font-medium">Pragati Chaturvedi</span>
            </p>

            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} All rights reserved.
            </p>

        </motion.footer>
    );
}

export default Footer;
