import './styles.css';
import logo from '../../assets/icons/xiaomi_logo.svg.png';
const Header = ({ cart, handleToggleMenu }) => {
  return (
    <header>
      <div className="inner-header-container">
        <img src={logo} className="header-logo-dark" alt="Xiaomi" />

        <button className="shoping-cart-button-toggle" onClick={handleToggleMenu}>
          Carrito ({cart?.length})
          <i className="fas fa-shopping-cart" />
        </button>
      </div>
    </header>
  );
};

export default Header;
