import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <h1 className="error-title">404 - Not Found</h1>
      <p className="error-description">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="error-link">
        Back to Home
      </Link>
    </div>
  );
}
