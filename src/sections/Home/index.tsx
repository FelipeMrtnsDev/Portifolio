import TypingEffect from "@/components/TypingEffect";
import Me from "../../assets/Me/m7.png"
import SocialButtons from "@/components/SocialButtons";
import { ArrowDown } from "lucide-react";
import EyesFollower from "@/components/EyesFollower";

export default function Home() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen text-white -mt-44 relative"
    >
      <div className="w-full h-full absolute flex justify-center">
        <div className="w-full h-full max-w-5xl">
          <div className="mt-44 text-center">
            <span className="border-[2px] border-black dark:border-white rounded-full p-2 px-6 text-black font-bold hover:bg-orange-500 hover:text-[#fff] transition-all duration-500 cursor-pointer dark:text-white">
              Hello world! 
            </span>
          </div>
          <div className="flex mt-12 justify-between items-center">
            <div className="text-4xl text-black flex flex-col text-center gap-2 font-semibold max-w-[500px] w-full">
              <h2 className="dark:text-white">Ola, eu sou o</h2>
              <div className="relative w-full mx-auto">
                <div className="text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
                  <TypingEffect />
                </div>
              </div>
              <h2 className="dark:text-white">--Desenvolvedor full stack--</h2>
              <SocialButtons />
            </div>
            <div>
              <img
                style={{ borderRadius: "60px 150px 50px 200px" }}
                src={Me}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-black absolute bottom-0 px-8 pt-6 rounded-t-[90px] dark:border-x-2 dark:border-t-2">
          <div className="flex flex-col text-center items-center w-full h-full">
            <EyesFollower />
            <div className="flex gap-2 mb-2">
              <span className="text-2xl">Veja abaixo</span>
              <ArrowDown size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
