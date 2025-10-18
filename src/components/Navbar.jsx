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

    return (
        <header className="bg-white/70 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
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
                            activeClass="text-[#008e68]"
                            className="cursor-pointer text-gray-900 hover:text-[#008e68] transition-colors duration-400 font-medium"
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
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    spy={true}
                                    activeClass="text-[#008e68]"
                                    onClick={() => setOpen(false)}
                                    className="cursor-pointer text-gray-900 hover:text-[#008e68] transition-colors duration-400 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
