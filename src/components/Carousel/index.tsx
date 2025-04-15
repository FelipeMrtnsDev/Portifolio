import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import eplay from "../../assets/Projects/Screenshot_113.png";
import Agendei from "../../assets/Projects/Screenshot_110.png";

const Carousel = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      title: "Eplay",
      description: t("carousel.eplay.description"),
      image: eplay,
      tags: ["React.js", "Redux", "Node.js"],
      link: "https://eplay-one.vercel.app"
    },
    {
      id: 2,
      title: "Agendei",
      description: t("carousel.agendei.description"),
      image: Agendei,
      tags: ["React.js", "Node.js", "TypeScript"],
      link: "https://agendei.vercel.app"
    },
    {
      id: 3,
      title: "Eplay",
      description: t("carousel.eplay.description"),
      image: eplay,
      tags: ["React.js", "Redux", "Node.js"],
      link: "https://eplay-one.vercel.app"
    },
    {
      id: 4,
      title: "Agendei",
      description: t("carousel.agendei.description"),
      image: Agendei,
      tags: ["React.js", "Node.js", "TypeScript"],
      link: "https://agendei.vercel.app"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30} 
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
            spaceBetween: 40
          }
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="h-full bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-orange-400 mx-4"> 
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-fit transition-transform hover:scale-110 duration-300"
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
                      className="px-3 py-1 bg-orange-100 dark:bg-blue-900 text-orange-800 dark:text-blue-100 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:opacity-80 transition-opacity">
                  <a target='_blank' href={card.link}>{t("carousel.button")}</a>
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
