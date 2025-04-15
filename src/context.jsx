import { createContext, useContext, useEffect, useReducer } from "react"

const AppContext = createContext()
export const useGlobalContest = () => useContext(AppContext)

export function AppProvider({ children }) {
  const greeting = "hello"
  const greeting2 = "world"
  return (
    <AppContext.Provider value={{ greeting, greeting2 }}>
      {children}
    </AppContext.Provider>
  )
}
