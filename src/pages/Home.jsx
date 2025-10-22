import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import SocialCard from "../components/SocialCard";
import ProfilePhoto from "../components/Avatar"; // (Vem de Avatar.jsx)
import Footer from "../components/Footer";

import lucasFoto from "/fotos/lucas-2.jpg";

const MotionAvatar = motion(ProfilePhoto);

export default function Home() {
    return (
        <main className="w-full overflow-hidden bg-gradient-to-b from-[#0B0F14] via-[#0B1621] to-[#000000] text-gray-200 scroll-smooth">
            <Navbar />

            {/* === SEÇÃO INÍCIO === */}
            <section
                id="inicio"
                className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-8 gap-10 py-20"
            >
                {/* === LADO ESQUERDO === */}
                <div className="flex-1 text-left space-y-6 max-w-lg">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl sm:text-5xl font-extrabold leading-tight text-white"
                    >
                        Olá, eu sou{" "}
                        <span className="text-[#0FFCBE] drop-shadow-lg">
                            Lucas Brandão
                        </span>
                        {" "}👋
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-300 text-lg"
                    >
                        Desenvolvedor <strong className="text-[#106EBE]">Full-Stack</strong> focado em performance e usabilidade. Minha especialidade é transformar ideias em soluções digitais completas e eficientes.

                        Construo interfaces de usuário ágeis com React e Tailwind, e desenvolvo serviços de back-end potentes usando Node.js, Express, PostgreSQL e MongoDB.
                    </motion.p>

                    {/* === ESPECIALIDADES === */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h4 className="text-2xl font-semibold text-[#0FFCBE] mb-4">
                            Minhas especialidades
                        </h4>
                        <ul className="text-gray-300 space-y-2 text-base">
                            <li>💻 Front-end: React, Tailwind, JSX</li>
                            <li>⚙️ Back-end: Node.js, Express, PostgreSQL, MongoDB</li>
                            <li>🧩 Integração e APIs REST</li>
                        </ul>
                    </motion.div>

                    {/* === REDES SOCIAIS === */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-wrap gap-3 pt-4"
                    >
                        <SocialCard
                            icon={<FaGithub />}
                            label="GitHub"
                            link="https://github.com/ilucasbrandao"
                            color="#106dbe"
                        />
                        <SocialCard
                            icon={<FaLinkedin />}
                            label="LinkedIn"
                            link="https://linkedin.com/in/lucas-de-sousa-brandao"
                            color="#106dbe"
                        />
                        <SocialCard
                            icon={<MdEmail />}
                            label="Email"
                            link="mailto:dev.lucasbrandao@gmail.com"
                            color="#106dbe"
                        />
                        <SocialCard
                            icon={<FaWhatsapp />}
                            label="WhatsApp"
                            link="https://wa.me/5588988839663"
                            color="#106dbe"
                        />
                    </motion.div>
                </div>

                {/* === LADO DIREITO === */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
                >
                    <MotionAvatar
                        src={lucasFoto}
                        alt="Foto de perfil do desenvolvedor"
                        className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-[0_0_40px_#106EBE] object-cover border-4 border-[#0FFCBE]/40 hover:scale-105 transition-transform duration-300"
                    />
                </motion.div>
            </section>

            <About />
            <Projects />
            <Contact />

            {/* === FOOTER === */}
            <Footer />
        </main>
    );
}