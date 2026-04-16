import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../styles/header.css'
import { profile } from '../data/site'

const links = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
]

const navLinkClass = ({ isActive }) => (isActive ? 'active' : undefined)

const [firstName, ...rest] = profile.name.split(' ')
const lastName = rest.join(' ')

const Header = () => {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header>
      <nav>
        {isHome ? (
          <span />
        ) : (
          <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="brand-first">{firstName}</span>
            {lastName && ` ${lastName}`}
          </NavLink>
        )}
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={open ? 'open' : undefined}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
