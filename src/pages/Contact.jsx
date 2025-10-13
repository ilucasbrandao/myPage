export default function Contato() {
    return (
        <section className="text-center mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Entre em contato</h2>
            <p className="text-gray-600 mb-6">Você pode me encontrar nas redes abaixo:</p>

            <div className="flex justify-center gap-6">
                <a href="mailto:seuemail@exemplo.com" className="text-blue-600 hover:underline">
                    Email
                </a>
                <a href="https://github.com/seuusuario" target="_blank" className="text-blue-600 hover:underline">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/seuusuario" target="_blank" className="text-blue-600 hover:underline">
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
