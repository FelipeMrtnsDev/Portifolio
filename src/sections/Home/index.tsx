import TypingEffect from "@/components/TypingEffect";
import back from "../../assets/background/background-abstract.png";
import Me from "../../assets/Me/m7.png"

export default function Home() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen text-white -mt-44 relative"
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className="w-full h-full absolute flex justify-center">
        <div className="w-full h-full max-w-5xl">
          {/* abaixo disso */}
          <div className="mt-44 text-center">
            <span className="border-[2px] border-[#000] rounded-full p-2 px-12 text-[#000] font-bold hover:bg-orange-500 hover:text-[#fff] transition-all duration-500 cursor-pointer">
              Hello world! 
            </span>
          </div>
          <div className="flex mt-16 justify-between">
            <div className="text-4xl text-[#000] flex flex-col text-center gap-2 font-semibold max-w-[500px] w-full">
              <h2>Ola, eu sou o</h2>
              <div className="relative w-full mx-auto">
                <div className="text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent drop-shadow-md">
                  <TypingEffect />
                </div>
              </div>

              <h2>--Desenvolvedor full stack--</h2>
            </div>

            <div>
              <img
                style={{ borderRadius: "60px 150px 50px 200px" }}
                src={Me}
                alt=""
              />
            </div>
          </div>
          {/* acima disso */}
        </div>
      </div>
    </section>
  );
}
