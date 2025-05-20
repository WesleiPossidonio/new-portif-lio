import { useState } from "react"
import { Menu, X } from "lucide-react" // Ícones para abrir/fechar o menu

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  // Função para navegação e manipulação de âncoras
  // const handleNavigate = (path: string) => {
  //   if (path.startsWith('#')) {
  //     if (window.location.pathname !== '/') {
  //       navigate(`/${path}`) // ex: navegando para /#about
  //     } else {
  //       window.location.hash = path // ex: #about
  //     }
  //   } else {
  //     navigate(path) // rotas como /login-estudante ou /admin
  //   }

  //   if (menuOpen) toggleMenu()
  // }

  return (
    <header className="w-full h-2 bg-transparent shadow-md p-6 fixed top-0 z-50">


      <div className="hidden max-w-lg mx-auto md:flex items-center justify-center bg-black p-1 rounded-4xl bg-opacity-5">
        <nav className="flex space-x-6">
          <a className="text-md text-neutral-400 font-semibold hover:text-gray-200 cursor-pointer">Home</a>
          <a className="text-md text-neutral-400 font-semibold hover:text-gray-200 cursor-pointer">Sobre Mim</a>
          <a className="text-md text-neutral-400 font-semibold hover:text-gray-200 cursor-pointer"> Clientes</a >
          <a className="text-md text-neutral-400 font-semibold hover:text-gray-200 cursor-pointer"> Serviços</a >
        </nav >


      </div>
      <nav className="w-full flex items-center justify-between md:hidden">
        <h1 className="md:hidden text-xl text-neutral-400 font-bold cursor-pointer" >Weslei Possidonio</h1>
        {/* Ícone para menu mobile */}
        < button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button >
      </nav>

      {/* Menu mobile */}
      {
        menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-neutral-950 p-5 rounded-2xl shadow-gray-600">
            <a className="text-white hover:text-gray-200 cursor-pointer"  >Home</a>
            <a className="text-white hover:text-gray-200 cursor-pointer" >Sobre Mim</a>
            <a className="text-white hover:text-gray-200 cursor-pointer" >Clientes</a>
            <a className="text-white hover:text-gray-200 cursor-pointer" >Serviços</a>
          </nav>
        )
      }
    </header >
  )
}
