import { FaPaperclip } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ModernButton from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <ModernButton
                    label="Projetos"
                    icon={<FaPaperclip />}
                    onClick={() => console.log("Botão projetos")}
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

            {/* === SOBRE MIM === */}
            <section className="mt-20 max-w-3xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sobre Mim</h2>
                <p className="text-gray-600 leading-relaxed">
                    Sou formado em Ciências Contábeis, estou graduando em Análise e Desenvolvimento de Sistemas e venho construindo
                    soluções práticas com foco em negócios e usabilidade. Tenho uma visão voltada
                    para resultados e estou sempre em busca de novos desafios.
                </p>
            </section>

            {/* === CTA FINAL === */}
            <section className=" text-gray-800 py-16 px-6 text-center rounded-xl ">
                <h2 className="text-3xl font-bold mb-4">Quer conversar sobre uma oportunidade ou parceria? 🚀</h2>
                <p className="text-lg mb-6">
                    Estou sempre aberto a novas ideias, colaborações e desafios. Vamos criar algo incrível juntos!
                </p>
                <a
                    href="mailto:seuemail@exemplo.com"
                    className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-200"
                >
                    Entre em contato
                </a>
            </section>
        </section>
    );
}
