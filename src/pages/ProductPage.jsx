import { useParams } from 'react-router-dom';
import { apiUrl } from '../api/apiUrl';
import { useEffect, useState } from 'react';
import useStore from '../store/cart';

export default function ProductPage() {
  const { addToCart } = useStore();

  const handleAddToCart = (item) => {
    const newItem = {
      id: item.id,
      name: item.title,
      price: item.price,
      img: item.imageUrl,
    };
    addToCart(newItem);
  };

  const params = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function getItem(id) {
      try {
        const response = await fetch(apiUrl + id);
        const data = await response.json();

        setItem(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getItem(params.id);
  }, [params.id]);

  return (
    <>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}

      {item ? (
        <div className='item-detail-container' key={item.id}>
          <img
            src={item.imageUrl}
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
          {item.reviews.length >= 1 && <h3>Reviews:</h3>}

          {item.reviews
            ? item.reviews.map((review) => (
                <div className='item-review' key={review.id}>
                  <h4>{review.username} wrote:</h4>
                  <p>{review.description}</p>
                </div>
              ))
            : null}
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}