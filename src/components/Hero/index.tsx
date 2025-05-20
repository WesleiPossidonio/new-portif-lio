import { useState, useEffect } from 'react';
import imageBg from '../../assets/bgPortifolio.jpg';
import { TypingAnimation } from '../magicui/typing-animation';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const phrases = [
    "Weslei Possidonio",
    "Engenheiro de Software Front-End / Full Stack"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 7000); // Tempo para cada frase (ajuste conforme necessário)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full h-svh min-h-auto bg-cover bg-center flex items-center justify-center relative px-1.5"
      style={{ backgroundImage: `url(${imageBg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-neutral-200 text-md">👋 Olá! Eu sou</p>
        <TypingAnimation className="text-white text-center text-2xl md:text-4xl">
          {phrases[currentIndex]}
        </TypingAnimation>
        <p className="text-neutral-400 text-sm"> Macaé - RJ, Brazil</p>


      </div>

      <span className='w-10 h-17 bg-black absolute bottom-[23%] md:bottom-60 flex items-center justify-center rounded-3xl text-neutral-300 '>
        <ArrowDown className='animate-bounce duration-1500 size-7' />
      </span>
    </section>
  );
};
