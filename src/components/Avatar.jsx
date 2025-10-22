// components/Avatar.jsx
import { forwardRef } from 'react';

// Use 'forwardRef' para passar a 'ref' do framer-motion para a tag 'img'
const ProfilePhoto = forwardRef(({ src, alt, className }, ref) => {
    return (
        <img
            ref={ref} // Aplica a ref aqui
            src={src}
            alt={alt}
            className={className}
        />
    );
});

// Adicionar um displayName é bom para depuração
ProfilePhoto.displayName = "ProfilePhoto";

export default ProfilePhoto;