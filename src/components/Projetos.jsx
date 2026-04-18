function Projetos() {

const meusProjetos = [
{
    titulo: "Projeto 01 - Cine Top",
    descricao: "Site que mostra a lista dos filmes mais assistidos.",
    link: "https://github.com/rosianesalesweb/Portfpolio-html-css-js"
},
{
    titulo: "Projeto 02 - Portfólio",
    descricao: "Meu portfólio feito com HTML, CSS e JavaScript.",
    link: "https://github.com/rosianesalesweb/Portfpolio-html-css-js"
},
{
    titulo: "Projeto 03 - Boutique de Mimos",
    descricao: "Loja fictícia de moda e beleza para prática.",
    link: "https://github.com/rosianesalesweb/Portfpolio-html-css-js"
}
]

return (
    <section id="projetos">
    <h2>Meus Projetos</h2>
    <div className="linha-branca"></div>

    <div className="projetos-container">
        {meusProjetos.map((projeto, index) => (
        <article key={index} className="card-projeto">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank">Ver no GitHub</a>
        </article>
        ))}
    </div>
    </section>
)
}

export default Projetos