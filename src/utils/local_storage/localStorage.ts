import { CartObject } from '../../components/cart/cart.types';

export const loadState = () => {
  try {
    const serializedCartState = localStorage.getItem('cartObjects');

    if (!serializedCartState) {
      return { cartObjects: [] };
    }

    const cart = JSON.parse(serializedCartState);
    const initialState = { cartObjects: cart };

    return initialState;
  } catch (err) {
    return { cartObjects: [] };
  }
};

export const saveState = (cartObjects: CartObject[]) => {
  try {
    const serializedCartState = JSON.stringify(cartObjects);
    localStorage.setItem('cartObjects', serializedCartState);
  } catch (err) {
    // Ignore write errors
  }
};
