import { Button } from "../ui/button"

import { useState } from 'react'
import { ListServices } from "@/utils/arrayServices"
import { LinkIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { DialogServices } from "../DialogServices"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface buttonStateProps {
  state: 'All' | 'Landing' | 'Constitucional' | 'Web'
}

export const Projects = () => {

  const [stateButton, setUseStateButton] = useState<buttonStateProps>({ state: 'All' })
  const ListFiltered = ListServices.filter(services => services.typeServices === stateButton?.state)

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section className="w-full h-auto min-h-[35rem] py-20 px-6 flex flex-col items-center justify-center gap-1 md:gap-2 text-center bg-neutral-950">
      <h3 className="text-white text-sm md:text-lg font-semibold">Ultimos Trabalhos</h3>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-1">
        <h2 className="text-white text-2xl md:text-4xl font-bold">Projetos desenvolvidos com estratégia, design e performance.</h2>
        <p className="text-neutral-400 text-sm  md:w-3/4">
          Uma seleção dos projetos que transformei em realidade, combinando criatividade, funcionalidade e experiência do usuário.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
        <Button className="Text-lg font-semibold px-6 py-5 rounded-2xl cursor-pointer" onClick={() => setUseStateButton({ state: 'All' })}>All</Button>
        <Button className="Text-lg font-semibold px-6 py-5 rounded-2xl cursor-pointer" onClick={() => setUseStateButton({ state: 'Landing' })}>Landing Pages</Button>
        <Button className="Text-lg font-semibold px-6 py-5 rounded-2xl cursor-pointer" onClick={() => setUseStateButton({ state: 'Constitucional' })}>Constitucional</Button>
        <Button className="Text-lg font-semibold px-6 py-5 rounded-2xl cursor-pointer" onClick={() => setUseStateButton({ state: 'Web' })}>Sistemas Web</Button>
      </div>

      <div className="w-full max-w-[90rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center p-2 md:p-16 mt-10">
        {
          stateButton?.state === 'All' ? ListServices.map(list => {
            return (
              <div key={list.id} className="w-[18rem] lg:w-[23rem] h-[23rem] lg:h-[26rem] flex flex-col items-start gap-7 bg-black rounded-3xl p-4 md:p-7 border 
               border-black hover:border hover:border-neutral-800 transition ease-in-out duration-100" data-aos="zoom-in" data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img className="w-full h-60 lg:h-[60%] md:h-4/6 rounded-2xl shadow-2xl" src={list.img} alt="" />
                <div className="w-full flex flex-col items-start justify-center gap-4y">
                  <div className=" w-full flex justify-start items-center gap-3">
                    <LinkIcon className="text-white" />
                    <Dialog>
                      <DialogTrigger asChild>
                        <h1 className="text-neutral-300 font-bold text-xl md:text-2xl cursor-pointer">{list.name}</h1>
                      </DialogTrigger>

                      <DialogContent className="max-w-[90%] bg-black border border-neutral-900 text-white">
                        <DialogServices id={list.id} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            )
          }) : ListFiltered.map(list => {
            return (
              <div key={list.id} className="w-[23rem] h-[26rem] flex flex-col items-start gap-7 bg-black rounded-3xl p-4 md:p-7 border 
               border-black hover:border hover:border-neutral-800 transition ease-in-out duration-100">
                <img className="w-full h-[50%] md:h-4/6 rounded-2xl shadow-2xl" src={list.img} alt="" />
                <div className="w-full flex flex-col items-start justify-center gap-4">
                  <div className=" w-full flex justify-between items-center gap-3">
                    <LinkIcon className="text-white" />
                    <Dialog>
                      <DialogTrigger asChild>
                        <h1 className="text-neutral-300 font-bold text-xl md:text-2xl">{list.name}</h1>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogServices id={list.id} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

