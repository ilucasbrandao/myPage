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
                <p className="text-gray-250 leading-relaxed text-lg">
                    Com uma carreira consolidada em Ciências Contábeis e atuação como{" "}
                    <strong>Analista de Pessoal</strong>, desenvolvi ao longo da minha
                    trajétoria uma forte visão analítica e um profundo entendimento sobre
                    processos de negócios e gerenciamento de dados. Paralelamente,
                    desenvolvo sistemas que unem desempenho e experiência de usuário,
                    buscando sempre eficiência e inovação.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                    Hoje, como graduando em{" "}
                    <strong>Análise e Desenvolvimento de Sistemas</strong>, direciono essa
                    bagagem para minha paixão: a tecnologia. Meu objetivo é construir
                    soluções que não sejam apenas tecnicamente robustas, mas que também
                    resolvam problemas reais de negócios.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg">
                    Tenho desenvolvido aplicações full-stack, utilizando JavaScript, React
                    e Node.js, e gerenciando dados com PostgreSQL, MySQL e MongoDB. Em
                    meus projetos, busco unir o melhor dos dois mundos: desempenho,
                    eficiência e uma experiência de usuário intuitiva.
                </p>
            </motion.div>
        </section>
    );
}
