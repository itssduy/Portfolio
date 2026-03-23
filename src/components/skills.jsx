import '../styles/skills.css'
import { skills } from '../data/site'

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div
            className={`skill-group${group.wide ? ' wide' : ''}`}
            key={group.category}
          >
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item) =>
                group.wide ? (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span className="badge">{item.date}</span>
                  </li>
                ) : (
                  <li key={item}>{item}</li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
