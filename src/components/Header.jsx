import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    const navLinks = [
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/sobre" },
        { name: "Projetos", path: "/projetos" },
        { name: "Contato", path: "/contato" },
    ];

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    L<span className="text-gray-800">B</span>
                </Link>

                {/* Menu desktop */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Botão mobile */}
                <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition" onClick={toggleMenu}>
                    {open ? <HiOutlineXMark size={28} /> : <IoIosMenu size={28} />}
                </button>
            </nav>

            {/* Menu mobile com animação */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-md border-t overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
