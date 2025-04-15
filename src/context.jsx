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

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
