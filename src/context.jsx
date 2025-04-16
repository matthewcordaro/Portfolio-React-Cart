import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"
import cartItems from "./data"
import {
  EMPTY_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions"
import { getTotals } from "./util"

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { totalAmount, totalCost } = getTotals(state.cart)

  const emptyCart = () => dispatch({ type: EMPTY_CART })

  const removeItem = (id) => dispatch({ type: REMOVE, payload: { id } })

  const increaseItemCount = (id) =>
    dispatch({ type: INCREASE, payload: { id } })

  const decreaseItemCount = (id) =>
    dispatch({ type: DECREASE, payload: { id } })

  const setLoading = () => dispatch({ type: LOADING })

  const displayItems = () => dispatch({ type: DISPLAY_ITEMS })

  return (
    <AppContext.Provider
      value={{
        ...state,
        totalAmount,
        totalCost,
        emptyCart,
        removeItem,
        increaseItemCount,
        decreaseItemCount,
        setLoading,
        displayItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
