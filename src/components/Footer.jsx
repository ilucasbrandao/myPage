export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    © {new Date().getFullYear()} Lucas Brandão. Todos os direitos reservados.
                </p>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/ilucasbrandao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lucas-de-sousa-brandao"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
