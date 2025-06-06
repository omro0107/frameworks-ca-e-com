import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

/**
 * Layout component that provides the common structure for all pages
 * @returns {JSX.Element} A main element containing header, content area (Outlet), and footer
 * @component
 */
export default function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
