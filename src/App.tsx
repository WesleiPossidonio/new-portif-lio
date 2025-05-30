import { About, CallAction, Coments, Companies, Contacts, Header, Hero, Projects, SkilsSection, WhatsappButton } from "./components"
import { Footer } from "./components/Footer"

function App() {
  return (
    <main className="w-full h-auto min-h-svh flex flex-col justify-center">
      {/* <AsideAbout /> */}
      <Header />
      <Hero />
      <About />
      <Companies />
      <Projects />
      <CallAction />
      <SkilsSection />
      <Coments />
      <Contacts />
      <WhatsappButton />
      <Footer />
    </main>
  )
}

export default App
