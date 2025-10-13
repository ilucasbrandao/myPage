// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, image, onClick, link }) {
    return (
        <div
            onClick={onClick}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg"
        >
            {/* Se quiser que o clique leve direto a um link externo */}
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </a>
            ) : (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}

            <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
}
