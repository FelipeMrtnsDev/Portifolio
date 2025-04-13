import { LuMonitor } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

export default function Skills() {
  return (
    <section className="w-full min-h-screen h-full flex flex-col items-center">
      <div className="max-w-5xl w-full px-3">
        <div className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Habilidades</span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>
        <div>
          <h2 className="text-4xl mt-4 mb-4">Como posso auxiliar com minhas <span className="text-orange-500">habilidades</span></h2>
        </div>
        <div className="grid grid-cols-[60%_40%] gap-8 w-full pb-8">
        <div className="relative h-[230px] hover:h-[240px] transition-all duration-300">
          <div className="border rounded-xl p-6 relative z-10 bg-white dark:bg-slate-800">
            <div className="w-16 h-16 mb-2 bg-slate-200 dark:bg-slate-600 rounded-2xl flex justify-center items-center">
              <LuMonitor size={30} />
            </div>
            <div>
              <h4 className="font-bold mb-4">Desenvolvimento Web</h4>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae dolorem, dolor cupiditate deserunt voluptatum itaque doloribus nam </p>
              <div className="flex gap-2 text-sm flex-wrap">
                <span className="bg-orange-100 p-1 px-3 text-orange-800 rounded-full">Typescript</span>
                <span className="bg-orange-100 p-1 px-3 text-orange-800 rounded-full">Node.js</span>
                <span className="bg-orange-100 p-1 px-3 text-orange-800 rounded-full">React.js</span>
                <span className="bg-orange-100 p-1 px-3 text-orange-800 rounded-full">Next.js</span>
              </div>
            </div>
          </div>
          <div className="absolute z-0 bg-orange-500 w-full h-full bottom-0 left-0 rounded-xl"></div>
        </div>
          <div className="border p-6 rounded-2xl">
            <div className="w-16 h-16 mb-2 bg-slate-200 dark:bg-slate-600 rounded-2xl flex justify-center items-center">
              <FaCode size={30} />
            </div>
            <div>
              <h4 className="font-bold mb-4">Backend & APIs</h4>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam corrupti ex aperiam deleniti t !</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] gap-8 w-full">
          <div className="border rounded-xl"></div>
          <div className="border rounded-xl"></div>
        </div>
      </div>
    </section>
  );
}
