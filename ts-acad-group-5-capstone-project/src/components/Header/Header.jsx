import ScrollLink from '../ScrollLink/ScrollLink.jsx'
import './header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a className="brand" href="#" aria-label="Go to top">
          TS Academy
        </a>

        <nav className="nav" aria-label="Primary">
          <ScrollLink to="#planets" className="navLink">
            Explore the Data
          </ScrollLink>
          <ScrollLink to="#contact" className="navLink navLinkPrimary">
            Contact us
          </ScrollLink>
        </nav>
      </div>
    </header>
  )
}

