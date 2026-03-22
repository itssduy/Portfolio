import '../styles/projects.css'
import { projects } from '../data/site'

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <ol className="projects-list">
        {projects.map((project) => {
          return (
            <li className="project-card" key={project.title}>
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.period && <span className="badge">{project.period}</span>}
              </div>
              <p>{project.description}</p>
              {project.tech?.length > 0 && (
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
              <div className="project-links">
                {project.demoUrl && (
                  <a
                    className="project-link"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    className="project-link"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Projects
