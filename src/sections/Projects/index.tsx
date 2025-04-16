import Carousel from "@/components/Carousel";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projetos" className="w-full h-full flex flex-col items-center">
      <div className="max-w-5xl w-full px-3">
        <div data-aos="fade-right" className="mt-16 flex items-center gap-4">
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">
            {t("projects.badge")}
          </span>
        </div>
        <div data-aos="fade-right">
          <h2 className="text-2xl md:text-4xl mt-4 mb-4">
            {t("projects.title.before")}{" "}
            {t("projects.title.after")}{" "}
            <span className="text-orange-500">{t("projects.title.highlight")}</span>{" "}
          </h2>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </section>
  );
}
