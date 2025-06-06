import { Link, NavLink } from 'react-router-dom';
import CartIcon from './Carticon';

/**
 * Header component that displays site navigation and logo
 * @returns {JSX.Element} A header element containing site logo, navigation links, and cart icon
 * @component
 */
export default function Header() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#5659FF',
  };

  return (
    <header>
      <Link className='site-logo' to='/'>
        SwiftCart
      </Link>
      <nav>
        <NavLink
          to='/'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to='/contact'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>

        <CartIcon />
      </nav>
    </header>
  );
}