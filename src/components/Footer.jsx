export default function Footer() {
    return (
        <footer className="bg-[#000000] text-gray-400 py-6 border-t border-[#0FFCBE]/20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()}{" "}
                    <span className="text-[#0FFCBE] font-semibold">
                        Lucas Brandão
                    </span>{" "}
                    — Todos os direitos reservados.
                </p>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/ilucasbrandao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0FFCBE] transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lucas-de-sousa-brandao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0FFCBE] transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
