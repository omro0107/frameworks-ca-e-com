import { useParams } from 'react-router-dom';
import { apiUrl } from '../api/apiUrl';
import { useEffect, useState } from 'react';
import StarRating from '../components/StarRating';
import useStore from '../store/cart';

/**
 * Product detail page component that displays individual product information
 * @returns {JSX.Element} A div containing product details, add to cart functionality, and reviews
 * @component
 */
export default function ProductPage() {
  const { addToCart } = useStore();

  /**
   * Handles adding an item to the cart
   * @param {Object} item - The product item to add to cart
   * @param {string} item.id - Product ID
   * @param {string} item.title - Product title
   * @param {number} item.price - Product price
   * @param {Object} item.image - Product image object
   * @param {string} item.image.url - Product image URL
   */
  const handleAddToCart = (item) => {
    setSuccessMessage('Added to cart!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    const newItem = {
      id: item.id,
      name: item.title,
      price: item.price,
      img: item.image.url,
    };

    addToCart(newItem);
  };

  const params = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getItem(id) {
      try {
        const response = await fetch(apiUrl + id);
        const data = await response.json();

        setItem(data.data);

      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getItem(params.id);
  }, [params.id]);

  return (
    <div>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}

      {successMessage && <div>{successMessage}</div>}
      {item ? (

        <div className='item-detail-container' key={item.id}>
          <img
            src={item.image.url}
            alt='Image of a product'
            className='item-img'
          />
          <h2>{item.title}</h2>
          <p className='item-desc'>{item.description}</p>
          <p className='item-price'>
            $
            {item.discountedPrice !== item.price
              ? `${item.discountedPrice} (-${Math.ceil(
                  item.price - item.discountedPrice
                )}$)`
              : item.price}
          </p>
          <button className='link-button' onClick={() => handleAddToCart(item)}>
            Add to cart
          </button>
          {successMessage && <div>{successMessage}</div>}

          {item.reviews.length >= 1 && <h3>Reviews:</h3>}

          {item.reviews
            ? item.reviews.map((review) => (
                <div className='item-review' key={review.id}>
                  <h4>{review.username} wrote:</h4>
                  <p>{review.description}</p>
                  <StarRating rating={review.rating} />
                </div>
              ))
            : null}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
