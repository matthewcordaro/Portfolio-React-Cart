import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"
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
  cart: [],
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContest = () => useContext(AppContext)
