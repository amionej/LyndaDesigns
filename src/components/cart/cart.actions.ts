import { ActionType, createAction } from 'typesafe-actions';
import { CartObject, cartPropertyAccess } from './cart.types';

export const addProductToCart = createAction('cartActions/ADD_CART_ITEM')<CartObject>();

export const removeProductFromCart = createAction('cartActions/REMOVE_CART_ITEM')<CartObject>();

export const clearCart = createAction('cartActions/CLEAR_CART')();

export const modifyObject = createAction('cartActions/MODIFY_OBJECT')<cartPropertyAccess>();

export type CartActions = ActionType<
  typeof addProductToCart | typeof removeProductFromCart | typeof clearCart | typeof modifyObject
>;
