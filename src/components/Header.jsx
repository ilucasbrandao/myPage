import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { HiOutlineXMark } from "react-icons/hi2";

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

                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button className="md:hidden" onClick={toggleMenu}>
                    {open ? <HiOutlineXMark size={28} /> : <IoIosMenu size={28} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white shadow-md border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
