import { Monitor } from "lucide-react";
import { ImMagicWand } from "react-icons/im";
import { IoCodeSlash } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import InfiniteScrollCarousel from "@/components/InfiniteScrollCarousel";

export default function Skills() {
  const ContentsCardRight = [
    {
      title: "Desenvolvimento Web",
      content: "Crio interfaces modernas, responsivas e otimizadas para SEO, garantindo performance, acessibilidade e boa experiência do usuário. Integro APIs, adapto designs para diferentes dispositivos e aplico as melhores práticas do front-end.",
      icon: Monitor,
      languages: [
        "React.js",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
      ]      
    },
    {
      title: "backend & APIs",
      content: "Desenvolvo APIs seguras e eficientes com autenticação e integração com bancos de dados. Estruturo rotas, lógica de negócio e arquitetura escalável com boas práticas.",
      icon: IoCodeSlash,
      languages: [
        "Node.js",
        "MySQL",
        "MongoDB",
      ]
    },
  ];

  const ContentsCardLeft = [
    {
      title: "Desenvolvimento Mobile",
      content: "Crio apps móveis funcionais e responsivos com React Native e integração via API. Foco em performance, usabilidade e compatibilidade entre plataformas.",
      icon: HiOutlineDevicePhoneMobile,
      languages: [
        "ReactNative",
        "TypeScript",
        "Firebase"
      ]
      
    },
    {
      title: "Chat e Fórum",
      content: "Planejo e desenvolvo interfaces com foco em experiência do usuário. Utilizo princípios de design intuitivo, arquitetura de informação e prototipagem rápida para entregar soluções funcionais e esteticamente atraentes.",
      icon: ImMagicWand,
      languages: [
        "Figma",
        "Framer",
        "TailwindCSS",
        "Shadcn/ui"
      ]
    },
  ];

  return (
    <section className="w-full min-h-screen h-full flex flex-col items-center">
      <div className="max-w-5xl w-full px-3">
        <div className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Habilidades</span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>

        <div>
          <h2 className="text-4xl mt-4 mb-6">
            Como posso auxiliar com minhas <span className="text-orange-500">habilidades</span>
          </h2>
        </div>
      
        <div className="flex flex-col w-full justify-center">
          <div className="grid grid-cols-[60%_40%] gap-6 max-w-7xl mb-8">
            {ContentsCardRight.map((content) => {
              const Icon = content.icon;
              return (
                <div key={content.title} className="relative w-full h-full group">
                  <div className="absolute bg-orange-500 inset-0 rounded-lg z-0 transition-shadow duration-300 group-hover:shadow-[0_2px_10px_rgba(255, 102, 0, 0.4)]" />
                  <div className="relative hover:bg-[#faf3ef] z-10 px-6 border flex flex-col p-8 border-slate-300 dark:border-slate-500 bg-white dark:bg-slate-800 w-full h-full rounded-lg duration-300 group-hover:-translate-y-2">
                    <div className="flex justify-center items-center border w-16 h-16 rounded-xl dark:bg-slate-600 text-white text-3xl mb-2">
                      <Icon className="text-black dark:text-white" size={25}/>
                    </div>
                    <div className="flex flex-col w-full text-start">
                      <h3 className="font-bold mb-4">{content.title}</h3>
                      <p className="mb-4">{content.content}</p>
                    </div>
                    <div className="flex gap-2">
                    {content.languages?.map((language, index) => (
                        <span key={index} className="bg-orange-100 dark:bg-blue-900 p-1 px-3 text-orange-800 dark:text-white rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-[40%_60%] gap-6 max-w-7xl mb-12">
            {ContentsCardLeft.map((content) => {
              const Icon = content.icon;
              return (
                <div key={content.title} className="relative w-full h-full group">
                  <div className="absolute bg-orange-500 inset-0 rounded-lg z-0 transition-shadow duration-300 group-hover:shadow-[0_2px_5px_rgba(255, 125, 38, 0.4)]" />
                  <div className="relative hover:bg-[#faf3ef] z-10 px-6 border flex flex-col p-8 border-slate-300 dark:border-slate-500 bg-white dark:bg-slate-800 w-full h-full rounded-lg duration-300 group-hover:-translate-y-2">
                    <div className="flex justify-center items-center border w-16 h-16 rounded-xl dark:bg-slate-600 text-white text-3xl mb-2">
                      <Icon className="text-black dark:text-white" size={25}/>
                    </div>
                    <div className="flex flex-col w-full text-start">
                      <h3 className="font-bold mb-4">{content.title}</h3>
                      <p className="mb-4">{content.content}</p>
                    </div>
                    <div className="flex gap-2">
                    {content.languages?.map((language, index) => (
                        <span key={index} className="bg-orange-100 dark:bg-blue-900 p-1 px-3 text-orange-800 dark:text-white rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <InfiniteScrollCarousel />
    </section>
  );
}
