import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import nos from "../assets/a-gente.jpeg";
import familia from "../assets/familia.jpeg"
import livros from "../assets/livros.jpeg"
import sistema from '../assets/espaço-aopedaletra.png'

export default function PhotoCarousel({ category }) {

    const images = {
        pessoal: [
            { src: nos, alt: 'Família na praia' },
            { src: familia, alt: 'Jogando futebol' },
        ],
        profissional: [
            { src: sistema, alt: 'Sistema escolar' },
            { src: '/images/projeto2.jpg', alt: 'Dashboard financeiro' },
        ],
        livros: [
            { src: livros, alt: 'Entendendo Algoritmos' },
            { src: '/images/livro2.jpg', alt: 'HTML5 e CSS3' },
        ],
    };

    const titles = {
        pessoal: 'Momentos Pessoais',
        profissional: 'Projetos Profissionais',
        livros: 'Livros Lidos',
    };

    return (
        <div className="my-6">
            {titles[category]}
            <Swiper spaceBetween={20} slidesPerView={1}>
                {images[category]?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img.src} alt={img.alt} className=" w-[300px] h-[300px] object-cover mx-auto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
