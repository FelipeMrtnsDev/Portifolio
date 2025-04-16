import { useTheme } from "@/components/theme/theme-context";
import Me_restaurant from "../../assets/Me/about.png";
import background from "../../assets/background/abstract-3d.png";
import blackBackground from "../../assets/background/black_abstract.png";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { useTranslation } from "react-i18next";

export default function About() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const isDark = theme === "dark";

  return (
    <section id="sobre" className="w-full h-full justify-center flex lg:px-4">
      <div className="max-w-5xl w-full px-3">
        <div data-aos="fade-left" className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">
            {t("about.tag")}
          </span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-2xl  md:text-4xl mt-4 mb-4">
            {t("about.title.part1")} <span className="text-orange-500">{t("about.title.part2")}</span> {t("about.title.part3")}
          </h2>
        </div>
        <div className="flex flex-col justify-between lg:flex-row px-6 md:px-12 lg:p-0">
          <img
            className="lg:mr-8 md:h-[600px] lg:h-full object-contain lg:object-none mb-8 lg:mb-0"
            src={Me_restaurant}
            alt="my-picture"
            // data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <p className="md:text-2xl font-semibold md:mb-8">
              {t("about.description")}
            </p>
            <div
              className="border-2 border-gray-300 dark:border-gray-700 rounded-xl hidden md:flex h-36 drop-shadow-lg"
              style={{
                background: `url('${isDark ? blackBackground : background}') center/cover`,
              }}
            >
              <div className="h-full w-full flex flex-col justify-center text-lg font-semibold pl-6 rounded-r-xl text-black dark:text-white">
                <p>{t("about.name")}</p>
                <p>{t("about.profession")}</p>
                <p>{t("about.age")}</p>
                <p>{t("about.level")}</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <InteractiveTimeline />
        </div>
      </div>
    </section>
  );
}
