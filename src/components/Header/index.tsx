import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import brazil from "../../assets/flags/brazil_flag.png"
import usa from "../../assets/flags/usa_flag.png"
import ModeToggle from "../Buttons/mode-toggle";

export default function Header() {
  const [active, setActive] = useState("");
  const [language, setLanguage] = useState("portuguese")
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

  const handleChangeLanguage = (language: string) => {
    if(language === "portuguese") {
      setLanguage("portuguese")
    } else {
      setLanguage("english")
    }
  }

  return (
    <nav
      className={`${
        isMenuClosed ? "w-14" : "w-[768px]"
      } h-20 bg-black m-auto mt-4 rounded-full transition-all duration-500 sticky`}
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
            <div className="w-6 h-6 rounded-full bg-white transition-all duration-300" />
          ) : (
            <button
              role="link"
              className="relative bg-[linear-gradient(transparent,transparent),linear-gradient(#FF9500,#FF9500)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:0_2px,100%_2px]"
            >
              <X  size={27}/>
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
        <div className="bg-black w-36 h-12 rounded-b-3xl flex justify-center gap-3">
          <img
            className={`mb-2 cursor-pointer transition-all duration-300 ${
              language === "portuguese" && "border-orange-500 border-[2px] rounded-full"
            }`}
            src={brazil}
            alt="brazil"
            onClick={() => handleChangeLanguage("portuguese")}
          />
          <img
            className={`mb-2 cursor-pointer transition-all duration-300 ${
              language === "english" && "border-orange-500 border-[2px] rounded-full"
            }`}
            src={usa}
            alt="usa"
            onClick={() => handleChangeLanguage("english")}
          />
        </div>
      </div>
      )}
      <button className="absolute top-3 right-[-80px] ">
        <ModeToggle />
      </button>
    </nav>
  );
}
