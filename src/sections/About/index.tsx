import { useTheme } from "@/components/theme/theme-context";
import Me_restaurant from "../../assets/Me/about.png"
import background from "../../assets/background/abstract-3d.png"
import blackBackground from "../../assets/background/black_abstract.png"
import InteractiveTimeline from "@/components/InteractiveTimeline";

export default function About() {
  const { theme } = useTheme()

  const isDark = theme === "dark"

  return (
    <section className="w-full h-full justify-center flex">
      <div className="max-w-5xl w-full px-3">
        <div className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Sobre mim</span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>
        <div>
          <h2 className="text-4xl mt-4 mb-4">Tudo oque você precisa saber <span className="text-orange-500">sobre</span> mim</h2>
        </div>
        <div className="flex justify-between">
          <img className="mr-8 border-[3px] rounded-[43px]" src={Me_restaurant} alt="my-picture" />
          <div>
            <p className="text-2xl font-semibold mb-8">Desenvolvedor Full Stack com foco em Next.js, React, TypeScript e React Native. Tenho experiência com criação de APIs RESTful utilizando Node.js, Express e MySQL. Gosto de entender como as coisas funcionam por trás do código e costumo aprender muito enquanto coloco a mão na massa. Curto trabalhar com tecnologia porque sempre tem algo novo pra descobrir e testar. Estudo Engenharia de Software na FAMETRO – Faculdade Metropolitana de Manaus.</p>
            <div className="border-2 border-gray-300 dark:border-gray-700 rounded-xl flex h-36 drop-shadow-lg" style={{ background: `url('${isDark ? blackBackground : background }') center/cover` }}>
              <div
                className="h-full w-full flex flex-col justify-center text-lg font-semibold pl-6 rounded-r-xl text-black dark:text-white"
              >
                <p>Felipe Martins de Souza</p>
                <p>Engenheiro de software</p>
                <p>20 anos</p>
                <p>Junior</p>
              </div>
              <div className="h-full w-full flex flex-col justify-center text-lg font-semibold px-6 py-8 rounded-r-xl text-black">
              </div>
            </div>
          </div>
        </div>
        <div>
          <InteractiveTimeline />
        </div>
      </div>
    </section>
  );
}
