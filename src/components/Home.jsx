import { apiUrl } from '../api/apiUrl';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);

        const response = await fetch(apiUrl);
        const data = await response.json();

        setProducts(data.data);

      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productsEl = filteredProducts.map((product) => (
    <div key={product.id} className='product-tile'>
      <Link to={`/product/${product.id}`}>
        <img src={product.image.url} alt='' />

        <div className='product-info'>
          <h3>{product.title}</h3>
          <p className='item-price'>
            $
            {product.discountedPrice !== product.price
              ? `${product.discountedPrice} (-${Math.ceil(
                  product.price - product.discountedPrice
                )}$)`
              : product.price}
          </p>
        </div>
        <button className='link-button'>View product</button>
      </Link>
    </div>
  ));

  return (
    <div>
      {isLoading && <div>Loading products...</div>}
      {isError && <div>{isError}</div>}
      {products && (
        <div className='product-list-container'>
          <h1>Browse our products</h1>
          <input
            type='text'
            placeholder='Search products...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {filteredProducts.length > 0 ? (
            <div className='product-list'>{productsEl}</div>
          ) : (
            <div className='no-products-container'>
              <div className='no-products-message'>No products found.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
