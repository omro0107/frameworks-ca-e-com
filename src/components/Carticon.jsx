import { NavLink } from 'react-router-dom';
import useStore from '../store/cart';

export default function Carticon() {
  const activeStyles = {
    filter:
      '',
  };

  const { cart } = useStore();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
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
    </>
  );
}