import './styles.css';
const Header = ({ cart, handleToggleMenu }) => {
  return (
    <header>
      <div className="inner-header-container">
        <img
          width="70px"
          src="https://mistorechile.cl/wp-content/uploads/2021/06/logo-mi-store-blanco-90x45-px@2x.png"
          className="header-logo-dark"
          alt="Xiaomi"
        />

        <button className="shoping-cart-button-toggle" onClick={handleToggleMenu}>
          Carrito ({cart?.length})
          <i className="fas fa-shopping-cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
