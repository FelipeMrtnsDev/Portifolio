import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import back from "../../assets/background/Abstract-full.png"
import back2 from "../../assets/background/Default_Create_an_abstract_background_with_a_vibrant_orange_hu_0.jpg"
import back3 from "../../assets/background/abstract-3d.png"

const Carousel = () => {
  // Dados de exemplo - substitua pelos seus cards
  const cards = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição breve do projeto com detalhes importantes",
      image: back,
      tags: ["React", "Tailwind"]
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Outro projeto incrível com tecnologias modernas",
      image: back2,
      tags: ["Next.js", "TypeScript"]
    },
    {
      id: 3,
      title: "Projeto 3",
      description: "Solução inovadora para problemas complexos",
      image: back3,
      tags: ["Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Projeto 3",
      description: "Solução inovadora para problemas complexos",
      image: back3,
      tags: ["Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={40} // Aumente este valor para mais espaçamento
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        className="w-full h-[500px]"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40 // Espaçamento entre cards em desktop
          }
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-blue-400 mx-4"> {/* Adicione margem horizontal */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;