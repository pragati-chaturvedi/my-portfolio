import { useEffect, useState } from 'react';
import { FiDownload } from 'react-icons/fi';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-black/80 border-b border-gray-800' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-20 py-4 flex justify-between items-center text-sm text-gray-300">
                <a href="#hero" className="font-bold text-green-400 hover:text-white transition-colors">Home</a>
                <div className="space-x-6 hidden sm:block">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#education" className="hover:text-white transition-colors">Education</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    <a
                        href="/Pragati_Chaturvedi_Resume.pdf"
                        download
                        className="bg-transparent border border-green-400 text-green-400 px-4 py-1 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition inline-flex items-center gap-2"
                    >
                        Resume <FiDownload className="text-sm" />
                    </a>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
