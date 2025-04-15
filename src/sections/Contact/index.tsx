import Input from "@/components/Input";
import Send from "@/components/Buttons/send";
import { Github } from "@/components/SocialMedia/Github";
import { Linkedin } from "@/components/SocialMedia/Linkedin";
import { Instagram } from "@/components/SocialMedia/Instagram";

export default function Contact() {
  return (
    <section className="w-full min-h-screen h-full flex flex-col">
      <div className="mb-11 flex justify-center">
        <h2 className="text-4xl font-bold"><span className="text-orange-500">Fale</span> comigo</h2>
      </div>
      <h3 className="text-2xl px-16 mb-4">Me envie uma mensagem</h3>
      <form className="px-16 flex gap-6">
        <div className="border w-full h-[746px] flex flex-col rounded-xl p-8 gap-4">
          <div className="flex w-full gap-4">
            <label className="flex flex-col w-1/2">
              <p>Nome</p>
              <Input placeholder="Nome" />
            </label>
            <label className="flex flex-col w-1/2">
              <p>Email</p>
              <Input placeholder="Email" />
            </label>
          </div>
          <div className="flex w-full">
            <label className="flex flex-col w-full mb-4">
              <p>Assunto</p>
              <Input placeholder="Assunto" />
            </label>
          </div>
          <div className="w-full h-full flex justify-center flex-col gap-4 relative">
            <textarea className="w-full h-full resize-none border-2 bg-[#252525] rounded-xl p-4 focus-visible:outline-none" placeholder="Escreva aqui..." ></textarea>
            <Send />
          </div>
        </div>
        <div className="w-1/2 rounded-xl flex flex-col gap-4">
          <div className="border h-2/5 rounded-xl p-4">
            <h4 className="text-xl mb-4">Informações de contato</h4>
            <p className="mb-2">Se conecte a mim nas redes sociais ou me siga e fique por dentro de todas as novidades sobre mim.</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Github />
                <p className="text-xl font-bold">Github</p>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin />
                <p className="text-xl font-bold">Linkedin</p>
              </div>
              <div className="flex items-center gap-2">
                <Instagram />
                <p className="text-xl font-bold">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
