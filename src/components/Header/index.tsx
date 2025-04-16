import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MdTranslate } from "react-icons/md";
import ModeToggle from "../Buttons/mode-toggle";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const savedActive = useRef("");

  useEffect(() => {
    if (!isMenuClosed) {
      const timer = setTimeout(() => {
        setActive(savedActive.current);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isMenuClosed]);

  const handleChangeLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const sections = ["sobre", "projetos", "habilidades", "contato"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-4 lg:top-5 md:top-7 z-50 ${
        isMenuClosed ? "w-14" : "w-full lg:w-[768px] md:w-[640px]"
      } h-20 bg-black mx-auto rounded-full transition-all duration-500`}
    >
      <ul
        className={`${
          isMenuClosed ? "justify-center" : "justify-evenly"
        } flex text-white items-center h-full transition-all duration-500`}
      >
        {!isMenuClosed && (
          <>
            <li
              onClick={() => scrollToSection("sobre")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Sobre" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("menu.about")}
              </span>
            </li>
            <li
              onClick={() => scrollToSection("projetos")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Projetos" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("menu.projects")}
              </span>
            </li>
          </>
        )}
        <li
          className="justify-center cursor-pointer flex items-center"
          onClick={() => {
            if (!isMenuClosed) {
              savedActive.current = active;
              setActive("");
            }
            setIsMenuClosed(!isMenuClosed);
          }}
        >
          {isMenuClosed ? (
            <button>
              <Menu size={27} />
            </button>
          ) : (
            <button className="hover:text-orange-500 transition-all duration-300">
              <X size={27} />
            </button>
          )}
        </li>
        {!isMenuClosed && (
          <>
            <li
              onClick={() => scrollToSection("habilidades")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Habilidades" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("menu.skills")}
              </span>
            </li>
            <li
              onClick={() => scrollToSection("contato")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Contato" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                {t("menu.contact")}
              </span>
            </li>
          </>
        )}
      </ul>
      {!isMenuClosed && (
        <div
          className={`w-full flex justify-center transition-all duration-700 ease-in-out transform ${
            isMenuClosed
              ? "opacity-0 -translate-y-6 pointer-events-none"
              : "opacity-100 translate-y-0 pointer-events-auto"
          }`}
        >
          <div className="bg-black w-20 h-12 rounded-b-3xl flex justify-center gap-3 items-start">
            <MdTranslate
              onClick={handleChangeLanguage}
              className={`cursor-pointer ${
                i18n.language === "en" ? "text-orange-500" : "text-white"
              }`}
              size={35}
            />
          </div>
        </div>
      )}
      <button className="absolute top-[84px] right-0 lg:right-[-80px] lg:top-4 md:top-4 md:right-[-60px]">
        <ModeToggle />
      </button>
    </nav>
  );
}
