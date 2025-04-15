import InputWithLabel from "@/components/InputWithLabel";
import Send from "@/components/Buttons/send";
import { Github } from "@/components/SocialMedia/Github";
import { Linkedin } from "@/components/SocialMedia/Linkedin";
import { Instagram } from "@/components/SocialMedia/Instagram";
import { TextareaWithLabel } from "@/components/TextAreaWithLabel";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function Contact() {
  const { t } = useTranslation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [assunto, setAssunto] = useState("");

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const envioEmail = axios.post("https://api-portifolio-ten.vercel.app/email/enviar", {
      nome,
      email,
      message,
      assunto,
    });
  
    toast.promise(
      envioEmail,
      {
        pending: t("contact.toast.pending"),   
        success: t("contact.toast.success"),   
        error: t("contact.toast.error"),      
      }
    );
  
    try {
      const response = await envioEmail;
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <section id="contato" className="w-full h-full flex flex-col mb-20">
      <div data-aos="fade-up" className="mb-11 flex justify-center">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">{t("contact.titleHighlight")}</span> {t("contact.title")}
        </h2>
      </div>
      <h3 className="text-2xl px-16 mb-4">{t("contact.subtitle")}</h3>
      <form className="px-16 flex gap-6" onSubmit={handleSubmitEmail}>
        <div data-aos="fade-right" className="border w-full h-[600px] flex flex-col rounded-xl p-8 gap-4">
          <div className="flex w-full gap-4">
            <div className="flex flex-col w-1/2">
              <InputWithLabel
                required={true}
                id="nome"
                htmlFor="nome"
                placeholder={t("contact.form.name")}
                type="text"
                onChange={(e) => setNome(e.target.value)}
                label={t("contact.form.name")}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <InputWithLabel
                required={true}
                id="email"
                htmlFor="email"
                placeholder={t("contact.form.email")}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label={t("contact.form.email")}
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full mb-4">
              <InputWithLabel
                required={true}
                id="assunto"
                htmlFor="assunto"
                placeholder={t("contact.form.subject")}
                type="text"
                onChange={(e) => setAssunto(e.target.value)}
                label={t("contact.form.subject")}
              />
            </div>
          </div>
          <div className="w-full h-full flex justify-center flex-col -mt-4 relative">
            <TextareaWithLabel
              required={true}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t("contact.form.message")}
              label={t("contact.form.message")}
            />
            <Send />
          </div>
        </div>
        <div data-aos="fade-left" className="w-1/2 rounded-xl flex flex-col gap-4">
          <div className="border rounded-xl p-4">
            <h4 className="text-xl mb-4">{t("contact.info.title")}</h4>
            <p className="mb-2">{t("contact.info.description")}</p>
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
