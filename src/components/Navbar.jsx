import { Link } from "react-scroll";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    const navLinks = [
        { to: "inicio", label: "Início" },
        { to: "sobre", label: "Sobre" },
        { to: "projetos", label: "Projetos" },
        { to: "contato", label: "Contato" },
    ];

    const handleLinkClick = () => {
        setOpen(false); // Fecha o menu mobile ao clicar
    };

    return (
        <header className="fixed w-full z-50 bg-[#0B0F14]/90 backdrop-blur-md border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-200">
                <h1 className="text-2xl font-bold">
                    <span className="text-[#0FFCBE]">Lucas</span>
                    <span className="text-[#106EBE]">Brandão</span>
                </h1>

                {/* === MENU DESKTOP === */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            spy={true}
                            activeClass="text-[#0FFCBE]"
                            className="cursor-pointer text-gray-200 hover:text-[#0FFCBE] transition-colors duration-300 font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* === BOTÃO MOBILE === */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
                    onClick={toggleMenu}
                >
                    {open ? <HiOutlineXMark size={28} /> : <IoIosMenu size={28} />}
                </button>
            </nav>

            {/* === MENU MOBILE ANIMADO === */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0B0F14]/95 backdrop-blur-md border-t border-white/10"
                    >
                        <ul className="flex flex-col py-4">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        spy={true}
                                        onClick={handleLinkClick} // Fecha o menu
                                        activeClass="text-[#0FFCBE]"
                                        className="block px-6 py-3 text-gray-200 hover:text-[#0FFCBE] hover:bg-white/5 transition-colors duration-300 cursor-pointer font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
