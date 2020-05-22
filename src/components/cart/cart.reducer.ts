import { getType, Reducer } from 'typesafe-actions';
import {
  CartActions,
  addProductToCart,
  removeProductFromCart,
  clearCart,
  setQuantity,
} from './cart.actions';
import { CartObject, CartState } from './cart.types';

// export const getProductIdArray = () => {
//   const list = [];
//   for (let i = 0; i < state.cartReducer.cartObjects.length; i += 1) {
//     list.push({
//       product_id: String(state.cartReducer.cartObjects[i].product.id),
//       quantity: String(state.cartReducer.cartObjects[i].quantity),
//     });
//   }
//   return list;
// };

const INITIAL_STATE: CartState = {
  cartObjects: [],
};

const cartReducer: Reducer<CartState, CartActions> = (
  state = INITIAL_STATE,
  action: CartActions,
) => {
  switch (action.type) {
    case getType(clearCart): {
      return { ...state, cartObjects: [] };
    }
    case getType(addProductToCart): {
      return {
        ...state,
        cartObjects: state.cartObjects.concat(action.payload),
      };
    }
    case getType(removeProductFromCart): {
      return {
        ...state,
        cartObjects: state.cartObjects.filter((item: CartObject) => item !== action.payload),
      };
    }
    case getType(setQuantity): {
      const object = state.cartObjects[action.payload.index];
      return {
        ...state,
        cartObjects: [
          ...state.cartObjects.slice(0, action.payload.index),
          { ...object, quantity: action.payload.number },
          ...state.cartObjects.slice(action.payload.index + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
