import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img
          src={viteLogo}
          loading="eager"
          width={120}
          height={40}
          className="logo"
          alt=""
        />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a
              href="https://github.com/alejandromur/sonificafy-frontend"
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
