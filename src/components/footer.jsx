import '../styles/footer.css'
import { profile } from '../data/site'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>
        © {year} {profile.name}. Built with React + Vite.
      </p>
    </footer>
  )
}

export default Footer
