import { xiaomiProducts } from '../../assets/utils/products';
import { TYPES } from '../actions';

export const initialState = {
  products: xiaomiProducts.smartphones.concat(xiaomiProducts.accesories),
  // cart: xiaomiProducts.smartphones,
  cart: [],
  totalInCart: [],
  contentViewed: {},
};

const reducers = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find((product) => product.id === action.payload);
      let productExist = state.cart.find((product) => product.id === action.payload);
      return productExist
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newProduct.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: item.price * (item.quantity + 1),
                  }
                : item
            ),
            totalInCart: state.cart.map((item) => item.total),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...newProduct,
                quantity: 1,
                total: newProduct.price * (newProduct.quantity || 1),
              },
            ],
            totalInCart: state.cart.map((item) => item.total),
          };
    }

    case TYPES.ADD_ONE_FROM_CART: {
      // const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: item.price * (item.quantity + 1),
              }
            : item
        ),
        totalInCart: state.cart.map((item) => item.total),
      };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? item.quantity >= 1
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                      total: item.price * (item.quantity - 1),
                    }
                  : item
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart.filter((item) => item !== itemToDelete)],
          };
    }

    case TYPES.REMOVE_ALL_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: [...state.cart.filter((item) => item !== itemToDelete)],
      };
    }

    case TYPES.RESET_CART:
      return initialState;

    case TYPES.SET_CONTENT_VIEWED: {
      return {
        ...state,
        contentViewed: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducers;
