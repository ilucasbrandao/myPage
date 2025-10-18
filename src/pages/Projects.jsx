import { motion } from "framer-motion";
import imgEspaco from "../assets/espaço-aopedaletra.png";
import imgGerUser from "../assets/ger-user.png";
import imgGerUser2 from "../assets/ger-user2.png";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const projetos = [
        {
            title: "Gestão Escolar",
            description:
                "Sistema de gestão escolar desenvolvido com React e Node.js. Gerencia informações administrativas e financeiras de forma prática e segura.",
            images: [imgEspaco],
        },
        {
            title: "Pomodoro Estudos",
            description:
                "Aplicativo web que auxilia na concentração e produtividade com a técnica Pomodoro, focado em performance e simplicidade.",
            images: ["/images/dashboard.png"],
        },
        {
            title: "Gerenciamento de Usuários",
            description:
                "Central de criação e controle de usuários com alternância automática de imagens.",
            images: [imgGerUser, imgGerUser2],
        },
    ];

    return (
        <section
            id="projetos"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0B0F14] via-[#0B1621] to-[#000000] px-8 py-20 text-gray-200"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full"
            >
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0FFCBE] mb-8">
                    Projetos Recentes
                </h2>

                <p className="text-center text-gray-400 mb-10">
                    Uma prévia dos meus principais projetos pessoais e profissionais.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projetos.map((proj, index) => (
                        <ProjectCard key={index} {...proj} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
