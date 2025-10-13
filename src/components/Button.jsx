import React from 'react';

const ModernButton = ({ label, icon, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        >
            {icon && <span className="text-lg">{icon}</span>}
            <span>{label}</span>
        </button>
    );
};

export default ModernButton;
