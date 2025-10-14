import React from 'react';

const ProfilePhoto = ({ src, alt }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                src={src}
                alt={alt}
                className="w-60 h-60 rounded-full shadow-lg object-cover border-4"
            />
        </div>
    );
};

export default ProfilePhoto;
