import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Contacts = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="w-full h-auto min-h-[40rem] flex items-center justify-content-center py-20 px-6 md:px-15 bg-black">
      <div className="w-full container xl:max-w-[80%] h-auto min-h-[35rem] py-14 px-6 md:px-8 
        bg-neutral-950 flex flex-col items-center justify-center gap-17 my-auto 
        mx-auto shadow-2xl rounded-2xl border border-neutral-900 hover:border-neutral-700" data-aos="zoom-in" data-aos-duration="1000"
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-white text-sm md:text-xl font-bold">Contatos</p>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="md:text-4xl text-white text-2xl font-bold text-center">Vamos Conversar! </h1>
            <h2 className="text-sm md:text-md text-white text-center">
              Entre em Contato e Dê o Próximo Passo para Impulsionar Seu Projeto.
            </h2>
          </div>
        </div>

        <form className="w-full grid grid-cols-2 gap-6" action="">
          <Input className="col-span-2 md:col-span-1 py-3.5 md:py-6 text-sm md:text-md text-white placeholder:text-white" type="text" placeholder="Digite seu Nome" />
          <Input className="col-span-2 md:col-span-1 py-3.5 md:py-6 text-sm md:text-md text-white placeholder:text-white" type="tel" placeholder="Digite seu nº Telefone" />
          <Input className="py-3.5 md:py-6 text-sm md:text-md col-span-2 text-white placeholder:text-white" type="tel" placeholder="Digite seu E-Mail" />
          <Textarea className=" h-25 md:h-48 md:py-6 text-sm md:text-md col-span-2 text-white placeholder:text-white" placeholder="Digite sua Mensagem" />
          <Button className="md:w-1/2 px-4 py-5 md:py-7 text-lg md:text-xl hover:bg-neutral-800 mt-2" >Enviar</Button>
        </form>
      </div>
    </section>
  )
}


