import '../styles/experience.css'
import { experience } from '../data/site'

const renderBullet = (text) =>
  text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    )

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="entry" key={`${job.company}-${job.role}`}>
            <div className="entry-header">
              <h3>{job.company}</h3>
              <div className="entry-meta">
                <span className="badge">{job.period}</span>
                <span className="entry-location">{job.location}</span>
              </div>
            </div>
            <p className="role">{job.role}</p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{renderBullet(bullet)}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience
