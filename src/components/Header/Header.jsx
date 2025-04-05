import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="8"
            width="4"
            height="32"
            rx="2"
            fill="var(--logo-color)"
          />
          <rect x="20" width="4" height="48" rx="2" fill="var(--logo-color)" />
          <rect
            x="32"
            y="16"
            width="4"
            height="16"
            rx="2"
            fill="var(--logo-color)"
          />
        </svg>
      </NavLink>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "is-active" : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/alejandromur/sonificafy-backend"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
