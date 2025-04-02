import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; Alejandro Mur {new Date().getFullYear()} 🎧{" "}
        <Link
          to="https://mamutlove.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          mamutlove.com
        </Link>
      </p>
    </footer>
  );
}
