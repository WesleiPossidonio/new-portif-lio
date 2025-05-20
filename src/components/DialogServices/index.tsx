
import { ListServices } from "@/utils/arrayServices"

interface DislogProps {
  id: number
}

export const DialogServices = ({ id }: DislogProps) => {


  const listSelected = ListServices.find(list => list.id === id)

  return (
    <section className="h-auto max-h-76 lg:max-h-[50rem] md:p-8 space-y-10 flex flex-col overflow-y-auto">
      <div>
        <h1 className="text-2xl md:text-4xl text-neutral-200">Desenvolvimento Web</h1>
        <p className="font-bold">_______</p>
      </div>

      <div>
        <p className='text-sm md:text-md text-white'>{listSelected?.text.textOne}</p>
        <p className='text-sm md:text-md text-white'>{listSelected?.text.textTwo}</p>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="font-semibold">Tecnologias Usadas</h2>
        <div className="flex flex-col items-start justify-center gap-2">
          {
            Object.values(listSelected?.skils ?? {}).map((skils, index) => {
              return (
                <p key={index} className="text-sm md:text-md text-white">- {skils}</p>
              )
            })
          }
        </div>
        <img className="w-[40rem] self-center rounded-2xl shadow-2xl" src={listSelected?.imgDialog} alt="" />
        <a className="self-center text-xl font-semibold mt-3" href="http://" target="_blank" rel="noopener noreferrer">Acessar Agora!</a>
      </div>


    </section>
  )
}


