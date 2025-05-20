import { FaWhatsapp } from "react-icons/fa6"

import { splitStringUsingRegex } from "@/utils/splitStringUsingRegex"
import { motion } from 'framer-motion'

const headling = ' Transforme sua ideia em uma experiência digital de alto nível!'
const text = 'Sou Weslei França, Desenvolvedor Front-End / Full Stack e Engenhario de Software. Com experiência em duas grandes agências de Macaé-RJ, DUC e i3Group, desenvolvo sites rápidos, responsivos e otimizados para conversão, focados em performance e experiência do usuário. Quer um site que realmente gere resultados? Vamos conversar!'

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 }
}

export const About = () => {

  const headingChars = splitStringUsingRegex(headling)
  const textChars = splitStringUsingRegex(text)
  return (
    <section className="w-full h-auto min-h-[35rem] flex flex-col justify-center items-center md:flex-row md:justify-between bg-neutral-950 p-5">
      <div className="lg:w-[80%] xl:max-w-[70%] flex flex-col justify-center items-center gap-8" style={{ margin: '0 auto' }}>
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          <motion.h2 initial='hidden' whileInView='reveal' transition={{ staggerChildren: .02 }} className=" text-3xl md:text-5xl lg:text-6xl text-center text-neutral-200 font-semibold">{headingChars.map(char => (
            <motion.span key={char} transition={{ duration: 0.6 }} variants={charVariants}>{char}</motion.span>
          ))}</motion.h2>

          <motion.p initial='hidden' whileInView='reveal' transition={{ staggerChildren: .02 }} className="text-neutral-300 text-sm md:text-lg lg:text-lg text-center">
            {textChars.map(char => (
              <motion.span key={char} transition={{ duration: .35 }} variants={charVariants}>{char}</motion.span>
            ))}
          </motion.p>
        </div>
        <button className="w-auto p-3 md:p-4 flex items-center justify-center gap-2 border border-neutral-300  rounded-xl text-sm md:text-md md:text-lg font-semibold text-white hover:-translate-y-1 transform transition-all">
          <FaWhatsapp size={25} />
          Entre em Contato!
        </button>
      </div>
    </section>
  )
}


