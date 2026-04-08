import { Link } from 'react-router-dom'
import '../styles/hero.css'
import { profile } from '../data/site'
import { GithubIcon, LinkedinIcon, EmailIcon } from './icons'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <div>
          <p className="eyebrow">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          {profile.tags?.length > 0 && <p className="tags">{profile.tags.join(' | ')}</p>}
          <p className="bio">{profile.bio}</p>
        </div>
        {profile.photo && (
          <img className="hero-photo" src={profile.photo} alt={profile.name} />
        )}
      </div>
      <div className="hero-actions">
        <Link className="button primary" to="/projects">
          View Projects
        </Link>
        <a className="button" href={profile.resumeUrl}>
          Resume
        </a>
      </div>

      <div className="hero-contact" id="contact">
        <h2 className="section-title">Contact</h2>
        <p>Feel free to reach me via LinkedIn or email.</p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>
            <EmailIcon />
            {profile.email}
          </a>
          {profile.social.github && (
            <a href={profile.social.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              GitHub
            </a>
          )}
          {profile.social.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
