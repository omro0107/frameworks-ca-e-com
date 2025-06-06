import { NavLink } from 'react-router-dom';
import useStore from '../store/cart';

/**
 * Cart icon component that displays a shopping cart icon with item counter
 * @returns {JSX.Element} A navigation element containing a cart icon and item counter
 * @component
 */
export default function Carticon() {
  const activeStyles = {
    filter: '',
  };

  const { cart } = useStore();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="cart-nav">
      <NavLink
        to='/cart'
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        <img
          src='/assets/favicon.ico'
          alt='shopping cart icon'
          className='cart-icon'
        />
      </NavLink>
      {totalQuantity > 0 && (
        <span className='items-counter'>{totalQuantity}</span>
      )}
    </nav>
  );
}