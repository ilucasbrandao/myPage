import React from 'react';

const ProfilePhoto = ({ src, alt }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                src={src}
                alt={alt}
                className="w-72 h-72 rounded-full border-4 border-[#0FFCBE] shadow-lg object-cover"
            />
        </div>
    );
};

export default ProfilePhoto;
