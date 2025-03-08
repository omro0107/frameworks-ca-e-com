import { Link } from 'react-router-dom';
import useStore from '../store/cart';

export default function CheckoutPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useStore();
  const handleAddToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.title,
      price: item.price,
    };
    addToCart(newItem);
  };
  const price = cart.map((product) => product.price);

  const total = price
    .reduce((acc, currentValue) => acc + currentValue, 0)
    .toFixed(2);

  return (
    <div>
      <h2>Checkout page</h2>

      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className='cart-item'>
              <div className='item-image'>
                <img src={item.img} alt={item.title} width='100px' />
              </div>
              <div className='item-details'>
                <div className='item-title bold-text'>{item.name}</div>
                <div className='item-quantity'>Quantity: {item.quantity}</div>
                <div className='item-controls'>
                  <button
                    className=' add-item-button'
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className='remove-item-button'
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </li>
          ))}
          {cart.length > 0 && (
            <button
              className='clear-cart-button link-button'
              onClick={clearCart}
            >
              Clear Cart
            </button>
          )}

          <div>
            <span className='bold-text'>Total: {total}$</span>
          </div>

          <Link to={`/checkoutSuccess`}>
            <button
              className='checkout-cart-button link-button'
              onClick={clearCart}
            >
              Checkout
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}