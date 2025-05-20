import { Star } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

import ImageBg from '@/assets/bgCallAction.jpg'

const comentsArray = [
  {
    name: 'Rafael',
    text: 'Ótima escolha para a regularização imobiliária da casa dos meus pais. Com conhecimento e experiência na área, ela garantiu um processo seguro e eficiente, trazendo mais tranquilidade e segurança.',
    id: 1,
  },

  {
    name: 'Claudia',
    text: 'Quando eu pensei que não tinha mais solução, eis que Dra. Emely com toda sua humanidade e eficiência conduziu o processo para um bom desfecho. Sem dúvidas que recomendo seus serviços.',
    id: 2,
  },

  {
    name: 'Otávio',
    text: 'Ela foi impecável na negociação. Contratei para consultoria de compra e venda de imóvel. Fiquei muito seguro com todo trabalho e transparência.',
    id: 3,
  },

  {
    name: 'Sheila',
    text: 'Dra. Emely foi uma excelente escolha na consultoria trabalhista da minha empresa! Com visão estratégica, conseguimos alinhar segurança jurídica e crescimento sustentável da empresa.',
    id: 4,
  },

  {
    name: 'Luiz Paulo',
    text: 'A demanda da minha empresa era complexa. Inicialmente demoramos para buscar profissional e quando recebemos a indicação da Dra. Emely, agendamos consulta jurídica. Do primeiro contato até a finalização da negociação a transparência em cada ato realizado nos garantia o comprometimento com a nossa questão e a segurança da transparência. Foi uma excelente experiência.',
    id: 5,
  },

  {
    name: 'Larissa',
    text: 'Dra. Emely com todo profissionalismo e humanidade desembolou uma demanda que estava “em aberto” por mais de dez anos. Não tenho palavras para agradecer a boa condução da negociação, a transparência e a segurança em cada etapa até a finalização do procedimento.',
    id: 6,
  },

]


export const Coments = () => {
  return (
    <section className="w-full h-auto flex items-center bg-image bg-fixed bg-cover overflow-hidden" style={{ minHeight: '35rem', backgroundImage: `url(${ImageBg})` }}>
      <div className="container max-w-8xl mx-auto py-20 p-6 md:px-17 space-y-5 flex flex-col  items-center justify-center gap-7">
        <div className="w-full flex flex-col items-center justify-start gap-3" data-aos="fade-right" data-aos-duration="1000">
          <div className="self-start">
            <h4 className="text-white text-sm md:text-lg font-semibold">Testemunhos</h4>
            <h1 className="text-white text-2xl md:text-4xl">O que dizem <br /> sobre nosso trabalho</h1>
          </div>
          <p className="text-white text-sm md:text-md m-0 md:w-3/4 self-start">
            Confira o feedback de nossos clientes e parceiros. Eles compartilham suas experiências e como nossas soluções ajudaram a transformar seus projetos em sucesso.
          </p>
          <button className="w-46 self-start text-base bg-black px-8 py-4 mt-2 rounded-xl text-white font-bold">Saiba Mais!</button>
        </div>

        <Carousel className="w-full" plugins={[
          Autoplay({
            delay: 2000,
          }),

        ]} data-aos="zoom-in-up" data-aos-duration="2000">
          <CarouselContent>

            {
              comentsArray.map(coments => {
                return (
                  <CarouselItem key={coments.id} className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center">
                    <div className="w-full h-72 p-6 flex flex-col items-start justify-center gap-3 rounded-md shadow-sm bg-black">
                      <p className="text-lg font-semibold text-white">
                        {coments.name}
                      </p>
                      <p className="text-sm text-white">
                        {coments.text}
                      </p>
                      <div className="flex flex-col items-start justify-center gap-3">
                        <div className="flex">
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                          <Star className="size-4 text-yellow-400" />
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}


