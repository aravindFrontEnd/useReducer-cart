import { createContext,useContext, useReducer } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
  RELOAD_CART,
} from './actions';
import  {getTotals} from "./utils";
const AppContext = createContext();

 const initialState = {
   isLoading: false,
   cart: new Map(cartItems.map((item) => [item.id, item])),
 };


export const AppProvider = ({children})=>{

     const [state, dispatch] = useReducer(reducer, initialState);

    const { totalAmount, totalCost } = getTotals(state.cart)





    const clearCart = () =>{
        dispatch({type:CLEAR_CART});
    }

    const remove = (id)=>{

        dispatch({type:REMOVE, payload:{id}})
    }

    const increase = (id) =>{
        dispatch({type:INCREASE, payload:{id}})
    }

    const decrease = (id) => {
      dispatch({ type: DECREASE, payload: { id } });
    };

    const reloadCart = () =>{
         dispatch({ type: RELOAD_CART });
    }




    return (
      <AppContext.Provider
        value={{
          ...state,
          clearCart,
          reloadCart,
          remove,
          increase,
          decrease,
          totalAmount,
          totalCost,
        }}
      >
        {children}
      </AppContext.Provider>
    );

}


export const useGlobalContext = () =>{
    return useContext(AppContext);
}
