import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MdTranslate } from "react-icons/md";
import ModeToggle from "../Buttons/mode-toggle";

export default function Header() {
  const [active, setActive] = useState("");
  const [isMenuClosed, setIsMenuClosed] = useState(false);
  const savedActive = useRef("");
  const [language, setLanguage] = useState("portuguese")

  useEffect(() => {
    if (!isMenuClosed) {
      const timer = setTimeout(() => {
        setActive(savedActive.current);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isMenuClosed]);

  const handleChangeLanguage = () => {
    setLanguage(prev => prev === "portuguese" ? "english" : "portuguese");
  };

  return (
    <nav
      className={`sticky top-4 z-50 ${
        isMenuClosed ? "w-14" : "w-[768px]"
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
              onClick={() => setActive("Sobre")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Sobre" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                Sobre
              </span>
            </li>
            <li
              onClick={() => setActive("Projetos")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Projetos" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                Projetos
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
              <Menu size={27}/>
            </button>
          ) : (
            <button className="hover:text-orange-500 transition-all duration-300">
              <X size={27}/>
            </button>
          )}
        </li>
        {!isMenuClosed && (
          <>
            <li
              onClick={() => setActive("Habilidades")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Habilidades" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                Habilidades
              </span>
            </li>
            <li
              onClick={() => setActive("Contato")}
              className={`py-6 w-32 flex text-center cursor-pointer rounded-full transition-colors duration-300 ${
                active === "Contato" ? "bg-orange-500" : ""
              }`}
            >
              <span
                className={`transition-opacity duration-500 w-full ${
                  isMenuClosed ? "opacity-0" : "opacity-100"
                }`}
              >
                Contato
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
          <div
            className={"bg-black w-20 h-12 rounded-b-3xl flex justify-center gap-3 items-start"}
          >
            <MdTranslate onClick={handleChangeLanguage} className={`cursor-pointer ${language === "english" ? "text-orange-500" : "text-white"}`} size={35} />
          </div>
        </div>
      )}
      <button className="absolute top-3 right-[-80px]">
        <ModeToggle />
      </button>
    </nav>
  );
}