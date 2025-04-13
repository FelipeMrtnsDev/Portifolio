import InfiniteScrollCarousel from "@/components/InfiniteScrollCarrousel/index";
import Me_restaurant from "../../assets/Me/about.png"
import background from "../../assets/background/abstract-3d.png"
import { User } from "lucide-react";

export default function About() {
  return (
    <section className="w-full min-h-screen h-full justify-center flex">
      <div className="max-w-5xl w-full  px-3">
        <div className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Sobre mim</span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>
        <div>
          <h2 className="text-4xl mt-4 mb-4">Tudo oque você precisa saber <span className="text-orange-500">sobre</span> mim</h2>
        </div>
        <div className="flex justify-between">
          <img className="mr-8" src={Me_restaurant} alt="my-picture" />
          <div>
            <p className="text-2xl font-semibold mb-8">Desenvolvedor Full Stack com foco em Next.js, React, TypeScript e React Native. Tenho experiência com criação de APIs RESTful utilizando Node.js, Express e MySQL. Gosto de entender como as coisas funcionam por trás do código e costumo aprender muito enquanto coloco a mão na massa. Curto trabalhar com tecnologia porque sempre tem algo novo pra descobrir e testar. Estudo Engenharia de Software na FAMETRO – Faculdade Metropolitana de Manaus.</p>
            <div className="border-2 border-black dark:border-white rounded-xl flex h-36 drop-shadow-lg">
              <div className="h-full w-48 rounded-l-xl bg-orange-500 flex items-center justify-center">
                <User color="white" size={68}/>
              </div>
              <div
                className="h-full w-full flex flex-col justify-center text-lg font-semibold px-6 py-8 rounded-r-xl backdrop-brightness-50 text-black"
                style={{ background: `url('${background}') center/cover` }}
              >
                <p>Felipe Martins de Souza</p>
                <p>Engenheiro de software</p>
                <p>20 anos</p>
                <p>Junior</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <InfiniteScrollCarousel />
        </div>
      </div>
    </section>
  );
}
