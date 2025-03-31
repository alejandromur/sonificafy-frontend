export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        <span style={{ fontSize: "300%" }}>~</span>
      </a>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
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
