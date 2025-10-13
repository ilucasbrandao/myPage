import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            <Header />

            <AnimatePresence mode="wait">
                <motion.main className="flex-grow pt-20"
                    key={location.pathname}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    );
}
