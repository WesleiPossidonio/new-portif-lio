
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import Figma from '@/assets/figma.png'
import Html from '@/assets/Html.png'
import Css from '@/assets/css.png'
import Bootstrap from '@/assets/Bootstrap.png'
import React from '@/assets/react.svg'
import TailwindCss from '@/assets/tailwind.png'
import JavaScript from '@/assets/JavaScript.png'
import TapeScript from '@/assets/TypeScript.png'
import Nodejs from '@/assets/Nodejs.png'
import Git from '@/assets/git.png'
import Postgres from '@/assets/postgresql.png'
import MongoDB from '@/assets/mongodb.png'
import Docker from '@/assets/docker.png'


export const SkilsSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="w-full h-auto bg-black flex items-center justify-center py-24 px-6 md:px-10 overflow-hidden">
      <div className="w-full container xl:max-w-[80%] h-auto flex flex-col items-center justify-center gap-10 p-6 
        md:p-10 bg-neutral-950 shadow-2xl rounded-2xl border border-neutral-900 hover:border-neutral-700">

        <div className="w-full flex flex-col items-start justify-center gap-2">
          <div className="w-full flex flex-col items-start justify-center gap-1">
            <p className="text-sm md:text-lg text-white font-semibold">Minhas Skills</p>
            <h2 className=" text-2xl md:text-5xl text-white font-bold">
              Soluções Técnicas para <br />
              Projetos de Sucesso
            </h2>
          </div>

          <p className=" text-sm md:text-lg text-neutral-300 w-[85%] mt-2">
            Conheça as minhas habilidades e as tecnologias que aplico em cada projeto. Uso ferramentas e técnicas
            avançadas para entregar a melhor para experiência do usuário.
          </p>
        </div>

        <div className="w-full grid  md:grid-cols-2 gap-8">

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={Figma} alt="" />
            </span>
            <h2 className='text-white text-xl font-extrabold'>Figma</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem]'>
              Figma é uma ferramenta de design colaborativo baseada em nuvem para criar interfaces e protótipos, permitindo trabalho em equipe em tempo real.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={React} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>React Js</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem]'>
              React.js é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas, usando componentes reutilizáveis e renderização eficiente.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={JavaScript} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>JavaScript</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              JavaScript é uma linguagem de programação usada para criar interatividade em páginas web, como animações, validações e requisições ao servidor.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 py-5 px-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={TailwindCss} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>TailwindCss</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              Tailwind CSS é um framework de CSS utilitário que permite aplicar estilos diretamente no HTML, oferecendo maior controle e agilidade no design.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-6 md:w-7' src={Html} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>HTML</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              HTML é a linguagem padrão para estruturar conteúdo em páginas web, como textos, imagens e links.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 py-3 px-1 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-9 md:w-11' src={TapeScript} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>TypeScript</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              TypeScript é uma versão de JavaScript com tipagem estática, que ajuda a detectar erros durante o desenvolvimento e melhora a manutenção do código.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-6 md:w-7' src={Css} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>CSS</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              CSS é uma linguagem de estilo que define a aparência e o layout de páginas web, como cores, fontes e espaçamentos.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 px-3 py-4 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-8 md:w-9' src={Bootstrap} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>Bootstrap</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              Bootstrap é um framework front-end com componentes prontos, como botões e grids, que facilita a criação de sites responsivos.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={Nodejs} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>Node Js</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              Node.js é um ambiente para executar JavaScript no lado do servidor, permitindo criar aplicações rápidas e escaláveis como servidores web e APIs.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-10' src={Git} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>Git</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              Git é um sistema de controle de versão que permite gerenciar e rastrear alterações no código-fonte ao longo do tempo, facilitando o trabalho em equipe e a colaboração.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={Postgres} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>PostgresSQL</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              PostgreSQL é um banco de dados relacional de código aberto, altamente escalável, que suporta consultas complexas, transações e integridade dos dados.
            </p>
          </div>

          <div className="w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-left" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={Docker} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>Docker</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              Docker é uma plataforma que permite criar, testar e implantar aplicativos em containers, garantindo que o software funcione de maneira consistente em diferentes ambientes.
            </p>
          </div>

          <div className="  w-full h-auto min-h-64 flex flex-col items-start justify-center gap-3 border border-neutral-800 
            rounded-3xl p-5 md:p-7 hover:bg-neutral-900 transition duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="1000">
            <span className="border flex items-center justify-center border-neutral-800 w-14 h-14 p-3 md:p-0 md:w-17 md:h-17 rounded-[50%]">
              <img className='w-7 md:w-9' src={MongoDB} alt="" />
            </span>

            <h2 className='text-white text-xl font-extrabold'>Mongo DB</h2>
            <p className='text-neutral-400 text-sm md:text-[0.8875rem] '>
              MongoDB é um banco de dados NoSQL que armazena dados em formato JSON, ideal para aplicações com grandes volumes de dados não estruturados e escalabilidade horizontal.
            </p>
          </div>

        </div>

      </div>


    </section>
  )
}


