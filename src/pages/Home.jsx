import { FaGithub, FaLinkedin, FaPaperclip, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ModernButton from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import SocialCard from "../components/SocialCard"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import lucasFoto from "../assets/lucas.jpg";

import ProfilePhoto from "../components/Avatar";
import { MdEmail } from "react-icons/md";
const MotionAvatar = motion(ProfilePhoto);

export default function Home() {
    const navigate = useNavigate();
    const projetos = [
        {
            title: 'Gestão Escolar',
            description: 'Sistema de gestão escolar desenvolvido com React e Node.js.',
            image: '/images/portfolio.png',
        },
        {
            title: 'Dashboard Admin',
            description: 'Dashboard financeira conectada a banco de dados PostgreSQL.',
            image: '/images/dashboard.png',
        },
        {
            title: 'Gerenciamento de Usuário',
            description: 'Central de gerenciamento de usuários',
            image: '/images/gerenciamento-usuarios.png',
        }
    ];
    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">

            {/* === APRESENTACION SECTION === */}
            <div className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
                <MotionAvatar
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src={lucasFoto}
                    alt="Foto de perfil do desenvolvedor"
                    className="shadow-lg mb-6"
                />
                <motion.h1

                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
                > Olá, eu sou <span className="text-blue-600">Lucas de S. Brandão</span> 👋
                </motion.h1>

            </div>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                Desenvolvedor full stack apaixonado por criar soluções eficientes e intuitivas.
            </p>

            <div className=" flex justify-content-between">
                <SocialCard
                    icon={<FaGithub />}
                    label="GitHub"
                    link="https://github.com/seuusuario"
                />
                <SocialCard
                    icon={<FaLinkedin />}
                    label="LinkedIn"
                    link="https://linkedin.com/in/seuusuario"
                />
                <SocialCard
                    icon={<MdEmail />}
                    label="Email"
                    link="mailto:seuemail@exemplo.com"
                />
                <SocialCard
                    icon={<FaWhatsapp />}
                    label="WhatsApp"
                    link="https://wa.me/5588999999999"
                />
            </div>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <ModernButton
                    label="Projetos"
                    icon={<FaPaperclip />}
                    onClick={() => navigate(`/projetos`)}
                />
                <ModernButton
                    label="Entrar em contato"
                    icon={<IoMdMail />}
                    onClick={() => console.log("Botão email")}
                />
            </div>

            {/* === SPECIALTIES === */}
            <section className="mt-20 max-w-3xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Minhas especialidades
                </h2>
                <ul className="text-gray-600 space-y-3 text-left">
                    <li>💻 Desenvolvimento Front-end (React, Tailwind, JSX)</li>
                    <li>⚙️ Desenvolvimento Back-end (Node.js, Express, PostgreSQL, MongoDB, MySQL...)</li>
                    <li>🧩 Integração e APIs REST</li>
                </ul>
            </section>

            {/* === PROJECTS === */}
            <section className="mt-20 max-w-5xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Projetos Recentes
                </h2>
                <p className="text-gray-600 mb-6">
                    Uma prévia dos meus projetos pessoais e profissionais:
                </p>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {projetos.map((proj, index) => (
                        <ProjectCard
                            key={index}
                            {...proj}
                            onClick={() => navigate(`/projetos`)}
                        />
                    ))}
                </section>
            </section>


            {/* === CTA FINAL === */}
            <section className="mt-20 max-w-3xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Quer conversar sobre uma oportunidade ou parceria? 🚀</h2>
                <p className="text-gray-600 leading-relaxed">
                    Estou sempre aberto a novas ideias, colaborações e desafios. Vamos criar algo incrível juntos!
                </p>
                <a
                    href="mailto:seuemail@exemplo.com"
                    className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-200"
                >
                    Entre em contato
                </a>
            </section>
        </section >
    );
}
