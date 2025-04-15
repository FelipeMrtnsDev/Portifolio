import InputWithLabel from "@/components/InputWithLabel";
import Send from "@/components/Buttons/send";
import { Github } from "@/components/SocialMedia/Github";
import { Linkedin } from "@/components/SocialMedia/Linkedin";
import { Instagram } from "@/components/SocialMedia/Instagram";
import { TextareaWithLabel } from "@/components/TextAreaWithLabel";

export default function Contact() {
  return (
    <section className="w-full min-h-screen h-full flex flex-col">
      <div className="mb-11 flex justify-center">
        <h2 className="text-4xl font-bold"><span className="text-orange-500">Fale</span> comigo</h2>
      </div>
      <h3 className="text-2xl px-16 mb-4">Me envie uma mensagem</h3>
      <form className="px-16 flex gap-6">
        <div className="border w-full h-[600px] flex flex-col rounded-xl p-8 gap-4">
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-1/2">
              <InputWithLabel label="Nome" />
            </div>
            <div className="flex flex-col w-1/2">
              <InputWithLabel label="Email" />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4">
              <InputWithLabel label="Assunto" />
            </div>
          </div>
          <div className="w-full h-full flex justify-center flex-col -mt-4 relative">
            <TextareaWithLabel />
            <Send />
          </div>
        </div>
        <div className="w-1/2 rounded-xl flex flex-col gap-4">
          <div className="border rounded-xl p-4">
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
