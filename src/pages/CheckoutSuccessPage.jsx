import { Link } from 'react-router-dom';

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