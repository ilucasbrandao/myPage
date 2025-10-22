const SocialCard = ({ icon, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center opacity-70 text-[#106dbe] px-6 py-4"
        >
            <span className="text-5xl  hover:-translate-y-1 transition-all duration-200">
                {icon}
            </span>
        </a>
    );
};

export default SocialCard;
