import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import CheckoutPage from './pages/CheckoutPage';
import NotFound from './components/NotFound';
import ProductPage from './pages/ProductPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='cart' element={<CheckoutPage />} />
          <Route path='*' element={<NotFound />} />{' '}
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/checkoutSuccess' element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
