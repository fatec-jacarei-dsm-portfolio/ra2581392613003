import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [{ semester: '1º semestre', title: 'Aprendizagem por Projetos', description: 'Projeto interdisciplinar desenvolvido no curso de Desenvolvimento de Software Multiplataforma.' }]

function App() {
  return <main>
    <section className="hero" aria-labelledby="nome"><p className="eyebrow">FATEC Jacareí · DSM</p><h1 id="nome">Patricia Rosa Maidana</h1><p className="intro">Portfólio de projetos do curso de Desenvolvimento de Software Multiplataforma.</p><a className="button" href="#projetos">Ver projetos</a></section>
    <section id="projetos" className="section" aria-labelledby="titulo-projetos"><h2 id="titulo-projetos">Projetos</h2><div className="cards">{projects.map((project) => <article className="card" key={project.semester}><p className="eyebrow">{project.semester}</p><h3>{project.title}</h3><p>{project.description}</p><span className="soon">Detalhes em breve</span></article>)}</div></section>
  </main>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
