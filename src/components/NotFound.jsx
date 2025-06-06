import { Link } from 'react-router-dom';

/**
 * 404 Not Found page component
 * @returns {JSX.Element} A div containing error message and link to homepage
 * @component
 */
export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to='.'>Return to the Homepage</Link>
    </div>
  );
}
