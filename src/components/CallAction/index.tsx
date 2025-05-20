import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import ImageBg from '../../assets/bgCallAction.jpg'
import { Button } from '../ui/button'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const CallAction = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="w-full h-[35rem] p-6 md:p-15 flex flex-col justify-center items-start
      gap-4 md:gap-2 bg-cover bg-fixed bg-center bg-parallaxDescktop bg-no-repeat my-0 mx-auto overflow-hidden" style={{ backgroundImage: `url(${ImageBg})` }} >
      <div className='container flex flex-col items-center justify-start text-start' data-aos="fade-right" data-aos-duration="1000" >
        <div className='space-y-2'>
          <h1 className='text-white text-3xl md:text-5xl '>
            Precisa de um desenvolvedor para seu projeto? <br /> Vamos criar algo incrível juntos!
          </h1>

          <p className='text-white text-sm md:text-md'>
            Transforme sua ideia em realidade com um desenvolvimento estratégico e eficiente. Conheça meu trabalho no LinkedIn e GitHub.
          </p>
          <div className='w-full flex items-center justify-start gap-2 mt-2'>
            <a href="https://www.linkedin.com/in/wesleifranca/" target='_blank'>
              <FaLinkedin className='text-white text-3xl' />
            </a>

            <a href="https://github.com/WesleiPossidonio" target='_blank'>
              <FaGithub className='text-white text-3xl' />
            </a>
          </div>


          <Button className='flex items-center justify-center px-14 py-7 mt-6 bg-neutral-200 text-md md:text-lg text-black rounded-2xl hover:bg-neutral-400 cursor-pointer'>
            <FaWhatsapp className='size-6' />
            Entre em Contato!
          </Button>
        </div>

      </div>
    </section>
  )
}
