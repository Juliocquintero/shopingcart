import { useEffect, useState } from 'react';
import CartItem from '../CartItem/cartItem';
import './styles.css';
const CartBar = ({
  cart,
  addOneToCart,
  removeOneFromCart,
  removeAllFromCart,
  totalInCart,
  clearCart,
  showCart,
}) => {
  const [total, setTotal] = useState(0);
  const handleClearCart = () => {
    const confirm = window.confirm('Are you sure of remove all items of cart?');
    if (confirm) clearCart();
  };
  useEffect(() => {
    const actuallyTotal = cart.reduce((acc, el) => acc + el?.total, 0);
    setTotal(actuallyTotal);
  }, [cart]);
  return (
    <section className="cart-wrapper">
      <div className={showCart ? 'cart-list show' : 'cart-list'}>
        <div className="cart-list-header">
          <span className="cart-list-header-item">Producto</span>
          <span className="cart-list-header-item">Precio</span>
          <span className="cart-list-header-item">Cant</span>
          <span className="cart-list-header-item">subtotal</span>
        </div>

        <div className="cart-list-body">
          {cart?.length > 0 ? (
            cart?.map((product) => (
              <CartItem
                data={product}
                key={product.id}
                addOneToCart={addOneToCart}
                removeOneToCart={removeOneFromCart}
                removeAllToCart={removeAllFromCart}
                totalInCart={totalInCart}
              />
            ))
          ) : (
            <p className="cart-item-default">El carrito se encuentra vacio...</p>
          )}
        </div>

        <div className="cart-list-footer">
          {cart?.length > 0 ? (
            <button className="cart-button" onClick={handleClearCart}>
              Limpiar carrito
            </button>
          ) : (
            <div></div>
          )}

          <div className="cart-list-footer-total">
            <span className="cart-list-footer-total-caption"> Total </span>
            <span className="cart-list-footer-total-value">
              {total > 0 ? `$${total.toLocaleString()}` : `$${total}`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBar;
