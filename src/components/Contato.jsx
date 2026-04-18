import { useState } from "react"

function Contato() {

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [msg, setMsg] = useState("")

function handleSubmit(e) {
    e.preventDefault()

    if (!nome || !email || !msg) {
    alert("Preencha todos os campos!")
    return
    }

    alert(`Obrigado, ${nome}!`)
    setNome("")
    setEmail("")
    setMsg("")
}

return (
    <section id="contato">
    <h2>Contato</h2>
    <div className="linha-branca"></div>

    <form onSubmit={handleSubmit}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} />

        <button type="submit">Enviar</button>
    </form>
    </section>
)
}

export default Contato