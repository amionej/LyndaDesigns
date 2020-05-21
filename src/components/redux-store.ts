import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from '../utils/local_storage/localStorage';
import cartReducer from './cart/cart.reducer';

const persistedState = loadState();

const store = createStore(cartReducer, persistedState);

console.log(store.getState());

store.subscribe(
  throttle(() => {
    saveState(store.getState().cartObjects);
  }, 1000),
);

export default store;
