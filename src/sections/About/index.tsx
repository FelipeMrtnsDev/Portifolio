export default function About() {
  return (
    <section className="w-full min-h-screen h-full justify-center flex ">
      <div className="max-w-5xl w-full  px-3">
        <div className="mt-16 flex items-center gap-4">
          <span className="font-semibold bg-orange-500 p-1 px-2 rounded-full text-sm text-white">Sobre mim</span>
          <hr className="flex-1 h-[2px] bg-gray-800 border-0 rounded" />
        </div>
        <div>
          <h2 className="text-4xl mt-4">Tudo oque você precisa saber <span className="text-orange-500">sobre</span> mim</h2>
        </div>
        <div className="flex justify-between">
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </section>
  );
}
