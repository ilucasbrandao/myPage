import { useState, useEffect } from "react";

export default function ProjectCard({ title, description, images }) {
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
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
                src={images[currentImage]}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
