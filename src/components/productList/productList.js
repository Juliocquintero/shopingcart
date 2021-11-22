import ProductItem from '../productItem/ProductItem';
import './styles.css';
const ProductList = ({ products, addToCart, handleContentViewed, handleShowModal }) => {
  return (
    <div>
      <div className="product-list">
        {products?.map((product) => (
          <ProductItem
            data={product}
            key={product.id}
            addToCart={addToCart}
            handleContentViewed={handleContentViewed}
            handleShowModal={handleShowModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
