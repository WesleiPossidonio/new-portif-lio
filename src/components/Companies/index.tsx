import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import LogoMaisdigital from '@/assets/logoMaisDigital.jpg'
import LogoCriard from '@/assets/logo.png'
import LogoSmf from '@/assets/Logo-smf2.png'
import LogoCartorio from '@/assets/download.jpeg'
import LogoIs53 from '@/assets/Logo-is53.svg'

export const Companies = () => {
  return (
    <section className="w-full h-60 max-h-auto bg-black p-8 flex items-center justify-center gap-6">
      <div className="w-full xl:max-w-[80%]">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
          }}>

          <CarouselContent className="items-center">
            <CarouselItem className="md:basis-1/3 flex items-center justify-center w-full"><img className="w-18" src={LogoMaisdigital} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/3 flex items-center justify-center w-full"><img className="w-27" src={LogoCriard} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/3 flex items-center justify-center w-full"><img className="w-28" src={LogoSmf} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/3 flex items-center justify-center w-full"><img className="w-28" src={LogoCartorio} alt="" /></CarouselItem>
            <CarouselItem className="md:basis-1/3 flex items-center justify-center w-full"> <img className="w-10" src={LogoIs53} alt="" /></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}


