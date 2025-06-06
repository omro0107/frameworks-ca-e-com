import { Link } from 'react-router-dom';

/**
 * Checkout success page component that displays order confirmation
 * @returns {JSX.Element} A div containing success message and link back to home
 * @component
 */
export default function CheckoutSuccessPage() {
  return (
    <div>
      <h2>Your order is placed!</h2>
      <Link to={`..`}>
        <button className='link-button'>Back to Home</button>
      </Link>
    </div>
  );
}