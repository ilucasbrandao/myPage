import { useState, useEffect } from "react";

export default function ProjectCard({ title, description, images, link }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImage(prev => (prev + 1) % images.length);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [images]);

    return (
        <div className="bg-gray-800 border border-y-[#0FFCBE] rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
                src={images[currentImage]}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-[#0FFCBE] text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors mt-auto"
                >
                    Ver projeto
                </a>
            </div>
        </div>
    );
}