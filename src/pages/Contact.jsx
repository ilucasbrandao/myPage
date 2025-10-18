import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <section
            id="contato"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#000000] via-[#0B1621] to-[#0B0F14] px-8 py-20 text-gray-200"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {/* === Texto e contatos diretos === */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#0FFCBE]">
                        Entre em contato
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Seja você um desenvolvedor, empresa ou entusiasta, estou
                        sempre aberto a colaborações e novas ideias.
                    </p>

                    <div className="space-y-3">
                        <p className="flex items-center gap-3">
                            <MdEmail className="text-[#106EBE]" />
                            lucas.dev@email.com
                        </p>
                        <p className="flex items-center gap-3">
                            <FaLinkedin className="text-[#0FFCBE]" />
                            linkedin.com/in/lucas-de-sousa-brandao
                        </p>
                        <p className="flex items-center gap-3">
                            <FaGithub className="text-[#106EBE]" />
                            github.com/ilucasbrandao
                        </p>
                        <p className="flex items-center gap-3">
                            <FaWhatsapp className="text-[#0FFCBE]" />
                            Itapipoca - Ceará, Brasil
                        </p>
                    </div>
                </div>

                {/* === Formulário === */}
                <form className="space-y-4 bg-[#0B0F14]/40 p-6 rounded-2xl shadow-lg backdrop-blur-md">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="w-full p-3 bg-transparent border border-[#0FFCBE]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]/60"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Seu email"
                        className="w-full p-3 bg-transparent border border-[#0FFCBE]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]/60"
                        required
                    />
                    <textarea
                        placeholder="Sua mensagem"
                        rows="5"
                        className="w-full p-3 bg-transparent border border-[#0FFCBE]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]/60"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#106EBE] text-white py-3 rounded-md hover:bg-[#0FFCBE] hover:text-gray-900 transition font-semibold"
                    >
                        Enviar mensagem
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
