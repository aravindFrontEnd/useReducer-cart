import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  RELOAD_CART,
} from './actions';

import cartItems from './data';

const reducer = (state, action) => {
 if(action.type === CLEAR_CART){
    return {...state, cart : new Map()}
 }

 if(action.type === RELOAD_CART){
    return {
      ...state,
      cart: new Map(cartItems.map((item) => [item.id, item])),
    };
 }

 if(action.type === REMOVE){
    const newCart = new Map(state.cart)
    newCart.delete(action.payload.id)
    return { ...state, cart: newCart };
 }

 if(action.type === INCREASE){
    const newCart = new Map(state.cart);

    const itemId = action.payload.id;

    const item = newCart.get(itemId);
    const newItem = {...item, amount : item.amount+1}
    newCart.set(itemId, newItem);

     return { ...state, cart: newCart };
 }

 if (action.type === DECREASE) {
   const newCart = new Map(state.cart);

   const itemId = action.payload.id;
   const item = newCart.get(itemId);

   if(item.amount ===1){
    newCart.delete(itemId)
    return{...state,cart: newCart}
   }

   const newItem = { ...item, amount: item.amount - 1 };
   newCart.set(itemId, newItem);
   return { ...state, cart: newCart };

 }

 throw new Error (`no such action ${action.type}`)
};

export default reducer;
