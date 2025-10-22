import { motion } from "framer-motion";
import imgEspaco from "/fotos/espaço-aopedaletra.png";
import imgGerUser from "/fotos/ger-user.png";
import imgGerUser2 from "/fotos/ger-user2.png";
import ProjectCard from "../components/ProjectCard";
import pomodoro from "/fotos/pomodoro.png";
import task1 from "/fotos/task1.png";
import task2 from "/fotos/task2.png";
import task3 from "/fotos/task3.png";
import task4 from "/fotos/task4.png";
import andamento from "/fotos/em-andamento.png"

export default function Projects() {
    const projetos = [
        {
            title: "Gestão Escolar",
            description:
                "Sistema de gestão escolar desenvolvido com React e Node.js. Gerencia informações administrativas e financeiras de forma prática e segura.",
            images: [imgEspaco],
            link: "https://github.com/ilucasbrandao/sistema-escolar"
        },
        {
            title: "Pomodoro Estudos",
            description:
                "Aplicativo web que auxilia na concentração e produtividade com a técnica Pomodoro, focado em performance e simplicidade.",
            images: [pomodoro],
            link: "https://ilucasbrandao.github.io/pomodoro-timer"
        },
        {
            title: "Gerenciamento de Usuários",
            description:
                "Central de criação e controle de usuários com alternância automática de imagens.",
            images: [imgGerUser, imgGerUser2],
            link: "https://github.com/ilucasbrandao/react-devClub"
        },
        {
            title: "Projeto SPA para gerenciamento de tarefas",
            description:
                "Demonstra o uso de hooks do React para gerenciamento de estado, react-router-dom para rotas dinâmicas (incluindo detalhes e edição por ID) e localStorage para garantir a persistência dos dados.",
            images: [task1, task2, task3, task4],
            link: "https://react-task-list-3gfavxunp-ilucasbrandaos-projects.vercel.app/"
        },
        {
            title: "Serviço de encurtamento de URLs focado na eficiência do backend",
            description:
                "A aplicação recebe uma URL longa via API REST e retorna um link curto e permanente. Construído com Node.js e MongoDB, o projeto prioriza a velocidade de resposta no redirecionamento do usuário.",
            images: [andamento],
            link: ""
        }
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projetos.map((proj, index) => (
                        <ProjectCard key={index} {...proj} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}