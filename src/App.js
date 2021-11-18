import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/styles/App.css';
import CartBar from './components/cartBar';
import Header from './components/header';
import ModalDetail from './components/modalDetail/modalDetail';
import ProductList from './components/productList/productList';
import { TYPES } from './redux/actions';

const App = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const totalInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggleMenu = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const addOneToCart = (id) => {
    dispatch({ type: TYPES.ADD_ONE_FROM_CART, payload: id });
  };
  const removeOneFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const removeAllFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.RESET_CART });
  };
  const handleContentViewed = (data = {}) => {
    dispatch({ type: TYPES.SET_CONTENT_VIEWED, payload: data });
  };

  return (
    <>
      <Header cart={cart} handleToggleMenu={handleToggleMenu} />
      <CartBar
        cart={cart}
        handleToggleMenu={handleToggleMenu}
        removeOneFromCart={removeOneFromCart}
        addOneToCart={addOneToCart}
        removeAllFromCart={removeAllFromCart}
        clearCart={clearCart}
        totalInCart={totalInCart}
        showCart={showCart}
      />

      <h1 className="products-title">Productos</h1>
      <ProductList
        products={products}
        addToCart={addToCart}
        handleContentViewed={handleContentViewed}
        handleShowModal={handleShowModal}
      />
      <ModalDetail showModal={showModal} handleShowModal={handleShowModal} addToCart={addToCart} />
    </>
  );
};

export default App;
