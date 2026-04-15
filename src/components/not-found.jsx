import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/not-found.css'

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>Looks like there has been a mistake. Nothing exists here.</p>
      <p>
        You will be redirected to the main page within 3 seconds. If not
        redirected, please <Link to="/">go back to the home page</Link>.
      </p>
    </section>
  )
}

export default NotFound
