import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_3jampd4",       // Seu ID do serviço EmailJS
                "template_l61va9o",      // Seu template EmailJS
                formRef.current,
                "v-D4tGoOH1DZXgsqx"      // Seu public key / User ID EmailJS
            )
            .then(
                (result) => {
                    alert("Mensagem enviada com sucesso!");
                    formRef.current.reset();
                },
                (error) => {
                    alert("Erro ao enviar a mensagem, tente novamente.");
                    console.error(error);
                }
            );
    };

    return (
        <motion.section
            id="contato"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0B1621] via-[#0B0F14] to-[#070e15] px-8 py-20 text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0FFCBE] mb-6 text-center">
                Entre em contato
            </h2>
            <p className="text-gray-300 text-center mb-12">
                Estou aberto a parcerias, projetos e novas oportunidades. Vamos criar algo incrível juntos!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Contato direto */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#0FFCBE]">Contato direto</h3>
                    <p className="flex items-center gap-2"><MdEmail /> dev.lucasbrandao@gmail.com</p>
                    <p className="flex items-center gap-2"><FaLinkedin /> linkedin.com/in/lucas-de-sousa-brandao</p>
                    <p className="flex items-center gap-2"><FaGithub /> github.com/ilucasbrandao</p>
                    <p className="text-gray-400">Itapipoca, Ceará - Brasil</p>
                </div>

                {/* Formulário */}
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#0FFCBE]">Envie uma mensagem</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        className="w-full p-3 rounded-md border border-gray-700 bg-[#0B1621] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        className="w-full p-3 rounded-md border border-gray-700 bg-[#0B1621] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                        required
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Assunto"
                        className="w-full p-3 rounded-md border border-gray-700 bg-[#0B1621] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                        required
                    />
                    <textarea
                        name="message"
                        rows="4"
                        placeholder="Sua mensagem"
                        className="w-full p-3 rounded-md border border-gray-700 bg-[#0B1621] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0FFCBE]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#106EBE] hover:bg-[#0FFCBE] text-white px-6 py-3 rounded-md transition-transform transform hover:scale-105"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
