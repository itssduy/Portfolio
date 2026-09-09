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
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header>
      <nav>
        {isHome ? (
          <span />
        ) : (
          <NavLink className="brand" to="/">
            <span className="brand-first">{firstName}</span>
            {lastName && ` ${lastName}`}
          </NavLink>
        )}
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={navLinkClass}>
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
