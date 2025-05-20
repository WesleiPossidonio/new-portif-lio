import { FaLinkedin, FaInstagram, FaYoutube, FaDownload } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export const AsideAbout = () => {
  return (
    <aside className="w-1/3 h-auto min-h-4/5 bg-black flex flex-col items-center justify-center gap-8 p-5 rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <img className="w-56 rounded-3xl mb-5" src="https://avatars.githubusercontent.com/u/86448336?v=4" alt="" />
        <p className="text-white font-semibold text-xl text-center">
          Weslei Possidonio
        </p>
        <span className="text-sm text-neutral-300 py-2 px-3 bg-neutral-800 rounded-lg">
          Desenvolvedor Front-End / Full-Stack
        </span>

        <div className="flex items-center justify-center gap-2.5 mt-2">
          <a href="#" target="_blank" className="text-sm text-neutral-300 py-2 px-2 bg-neutral-800 rounded-md">
            <FaFacebookF size={21} />
          </a>
          <a href="#" target="_blank" className="text-sm text-neutral-300 py-2 px-2 bg-neutral-800 rounded-md">
            <FaLinkedin size={23} />
          </a>
          <a href="#" target="_blank" className="text-sm text-neutral-300 py-2 px-2 bg-neutral-800 rounded-md">
            <FaInstagram size={23} />
          </a>
          <a href="#" target="_blank" className="text-sm text-neutral-300 py-2 px-2 bg-neutral-800 rounded-md">
            <FaYoutube size={23} />
          </a>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-center gap-2 p-4 bg-neutral-800 rounded-lg">
        <div className="w-full flex items-center justify-start gap-2 pb-3 pt-1 border-b-1 border-b-neutral-600">
          <div className="bg-neutral-950 px-2 py-2 rounded-md text-neutral-100 ">
            <IoPhonePortraitOutline size={25} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm text-neutral-500">Telefone:</span>
            <a className="text-md text-neutral-100" href="tel:+5522981016605">(22) 98101-6605</a>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-2 pb-3 pt-1 border-b-1 border-b-neutral-600">
          <div className="bg-neutral-950 px-2 py-2 rounded-md text-neutral-100 ">
            <MdOutlineMarkEmailRead size={25} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm text-neutral-500">Email:</span>
            <a className="text-md text-neutral-100" href="mailto:">Weslei.possidonio@gmail.com</a>
            <a href="mailto:"></a>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-2 pb-3 pt-1">
          <div className="bg-neutral-950 px-2 py-2 rounded-md text-neutral-100 ">
            <SiGooglemaps size={25} />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-sm text-neutral-500">Endereço:</span>
            <a className="text-md text-neutral-100" href="tel:+5522981016605">Macaé - RJ</a>
          </div>
        </div>
      </div>

      <button className="w-56 flex items-center justify-center gap-2 bg-linear-to-r from-sky-500 to-indigo-500 p-4 rounded-3xl font-semibold text-white hover:-translate-y-1 transform transition-all">
        <FaDownload size={22} />
        Download Cv
      </button>
    </aside>
  )
}


