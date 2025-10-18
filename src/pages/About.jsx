import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="sobre"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#000000] via-[#0B1621] to-[#0B0F14] px-8 py-20 text-gray-200"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center space-y-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#0FFCBE] mb-4">
                    Sobre mim
                </h2>

                <p className="text-gray-300 leading-relaxed text-lg">
                    Sou graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> e formado em <strong>Ciências Contábeis</strong>.
                    Tenho experiência com tecnologias como JavaScript, React, Node.js, MySQL, PostgreSQL e MongoDB.
                </p>

                <p className="text-gray-400 leading-relaxed text-lg">
                    Atuo como <strong>Analista de Pessoal</strong> desde 2022, o que me proporcionou uma visão analítica e foco em processos.
                    Paralelamente, desenvolvo sistemas que unem desempenho e experiência de usuário, buscando sempre eficiência e inovação.
                </p>
            </motion.div>
        </section>
    );
}
