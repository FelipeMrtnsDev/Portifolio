import Carousel from "@/components/Carousel";

export default function Projects() {
  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="max-w-5xl w-full px-3">
        <div className="mt-16 flex items-center gap-4">
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Projetos</span>
        </div>
        <div>
          <h2 className="text-4xl mt-4 mb-4">Meus <span className="text-orange-500">projetos</span> mais recentes</h2>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
