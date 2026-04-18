import Footer from "./components/Footer"
import { useState } from "react"
import Header from "./components/Header"
import Sobre from "./components/Sobre"
import Projetos from "./components/Projetos"
import Contato from "./components/Contato"

function App() {
  const [dark, setDark] = useState(false)

  function alternarTema() {
    setDark(!dark)
  }

  return (
    <div className={dark ? "dark-theme" : ""}>
      <Header alternarTema={alternarTema} dark={dark} />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App