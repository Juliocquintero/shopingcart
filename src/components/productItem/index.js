import './styles.css';

const ProductItem = ({ data, addToCart, handleContentViewed, handleShowModal }) => {
  const { id, name, serie, categorie, image, price } = data;
  const handleShowContent = () => {
    handleContentViewed(data);
    handleShowModal();
  };
  return (
    <article className="product-card">
      <figure className="product-card--image" onClick={handleShowContent}>
        <img src={image} alt={name} />
      </figure>

      <div className="product-card-name-container">
        <span className="product-card--serie"> {serie || categorie}</span>
        <span className="product-card--name" onClick={handleShowContent}>
          {name}
        </span>
      </div>

      <span className="product-card--price"> ${price.toLocaleString()}</span>
      <button className="product-card--button" onClick={() => addToCart(id)}>
        Añadir al carrito
      </button>
    </article>
  );
};

export default ProductItem;
