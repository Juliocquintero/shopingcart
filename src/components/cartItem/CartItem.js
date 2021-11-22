import './styles.css';
const CartItem = ({ data, addOneToCart, removeOneToCart, removeAllToCart }) => {
  const { id, name, serie, image, price, quantity, total } = data;
  const handleRemoveOneCart = () => {
    if (quantity === 1) {
      const confirm = window.confirm(`Are you sure of eliminate ${name} from cart?`);
      if (confirm) removeOneToCart(id);
    } else {
      removeOneToCart(id);
    }
  };
  return (
    <>
      <article className="cart-item">
        <button className="cart-item-button" onClick={() => removeAllToCart(id)}>
          <i className="far fa-times-circle"></i>
        </button>

        <figure className="cart-item--image">
          <img src={image} alt={name} className="cart-item--image" />
        </figure>

        <div className="cart-item--name">
          <span className="cart-item--serie"> {serie}</span>
          <br />
          <span>{name}</span>
        </div>

        <div className="cart-item--price">
          <span> ${price.toLocaleString()}</span>
        </div>

        <div className="cart-item--quantity">
          <input type="button" value="-" onClick={handleRemoveOneCart} className="button-minus" />
          <input type="number" value={quantity} readOnly className="input-quantity" />
          <input type="button" value="+" onClick={() => addOneToCart(id)} className="button-more" />
        </div>

        <div className="cart-item--subtotal ">
          <data> ${total.toLocaleString()}</data>
        </div>
      </article>

      {/* <tr className="cart-item">
        <td className="cart-item-product">
          <button className="cart-item-button" onClick={() => removeAllToCart(id)}>
            <i className="far fa-times-circle"></i>
          </button>
          <img src={image} alt={name} className="cart-item--image" />
          <div className="cart-item--name">
            <data className="cart-item--serie"> {serie}</data>
            <br />
            <a href="/practice#/shopping-cart">{name}</a>
          </div>
        </td>

        <td className="cart-item-price">
          <data> ${price.toLocaleString()}</data>
        </td>

        <td className="cart-item-quantity">
          <input type="button" value="-" onClick={() => removeOneToCart(id)} />
          <input type="number" value={quantity} readOnly />
          <input type="button" value="+" onClick={() => addOneToCart(id)} />
        </td>

        <td className="cart-item--prices">
          <data> ${total.toLocaleString()}</data>
        </td>
      </tr> */}
    </>
  );
};
export default CartItem;
