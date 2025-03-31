export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; Alejandro Mur {new Date().getFullYear()} |{" "}
        <a
          className="footer-link"
          href="https://mamutlove.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          mamutlove.com
        </a>
      </p>
    </footer>
  );
}
