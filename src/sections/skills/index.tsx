import { Monitor } from "lucide-react";
import { ImMagicWand } from "react-icons/im";
import { IoCodeSlash } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import InfiniteScrollCarousel from "@/components/InfiniteScrollCarousel";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const ContentsCardRight = [
    {
      title: t("skills.web.title"),
      content: t("skills.web.content"),
      icon: Monitor,
      languages: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      title: t("skills.backend.title"),
      content: t("skills.backend.content"),
      icon: IoCodeSlash,
      languages: ["Node.js", "MySQL", "MongoDB"],
    },
  ];

  const ContentsCardLeft = [
    {
      title: t("skills.mobile.title"),
      content: t("skills.mobile.content"),
      icon: HiOutlineDevicePhoneMobile,
      languages: ["ReactNative", "TypeScript", "Firebase"],
    },
    {
      title: t("skills.design.title"),
      content: t("skills.design.content"),
      icon: ImMagicWand,
      languages: ["Figma", "Framer", "TailwindCSS", "Shadcn"],
    },
  ];

  return (
    <section id="habilidades" className="w-full min-h-screen h-full flex flex-col items-center lg:p-4 lg:pr-8">
      <div className="max-w-5xl w-full px-3">
        <div data-aos="fade-left" className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">
            {t("skills.label")}
          </span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>

        <div data-aos="fade-left">
          <h2 className="text-2xl md:text-4xl mt-4 mb-6">
            {t("skills.title")} <span className="text-orange-500">{t("skills.highlight")}</span>
          </h2>
        </div>

        <div className="flex flex-col w-full justify-center">
          <div data-aos="fade-left" className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 max-w-7xl mb-8 lg:mb-12">
            {ContentsCardRight.map((content) => {
              const Icon = content.icon;
              return (
                <div key={content.title} className="relative w-full h-full group">
                  <div className="absolute bg-orange-500 inset-0 rounded-lg z-0 transition-shadow duration-300 group-hover:shadow-[0_2px_10px_rgba(255, 102, 0, 0.4)]" />
                  <div className="relative hover:bg-[#faf3ef] z-10 px-4 md:px-6 border flex flex-col p-8 border-slate-300 dark:border-slate-800 bg-white dark:bg-black w-full h-full rounded-lg duration-300 group-hover:-translate-y-2">
                    <div className="flex justify-center items-center border w-16 h-16 rounded-xl dark:bg-slate-600 text-white text-3xl mb-2">
                      <Icon className="text-black dark:text-white" size={25} />
                    </div>
                    <div className="flex flex-col w-full text-start">
                      <h3 className="font-bold mb-4">{content.title}</h3>
                      <p className="mb-4">{content.content}</p>
                    </div>
                    <div className="flex gap-2">
                      {content.languages?.map((language, index) => (
                        <span key={index} className="bg-orange-100 dark:bg-slate-900 p-1 px-1 md:px-3 text-orange-800 dark:text-white rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div data-aos="fade-right" className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 max-w-7xl mb-12">
            {ContentsCardLeft.map((content) => {
              const Icon = content.icon;
              return (
                <div key={content.title} className="relative w-full h-full group">
                  <div className="absolute bg-orange-500 inset-0 rounded-lg z-0 transition-shadow duration-300 group-hover:shadow-[0_2px_5px_rgba(255, 125, 38, 0.4)]" />
                  <div className="relative hover:bg-[#faf3ef] z-10 px-4 md:px-6 border flex flex-col p-8 border-slate-300 dark:border-slate-800 bg-white dark:bg-black w-full h-full rounded-lg duration-300 group-hover:-translate-y-2">
                    <div className="flex justify-center items-center border w-16 h-16 rounded-xl dark:bg-slate-600 text-white text-3xl mb-2">
                      <Icon className="text-black dark:text-white" size={25} />
                    </div>
                    <div className="flex flex-col w-full text-start">
                      <h3 className="font-bold mb-4">{content.title}</h3>
                      <p className="mb-4">{content.content}</p>
                    </div>
                    <div className="flex gap-2">
                      {content.languages?.map((language, index) => (
                        <span key={index} className="bg-orange-100 dark:bg-slate-900 p-1 px-3 text-orange-800 dark:text-white rounded-full text-sm">
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
