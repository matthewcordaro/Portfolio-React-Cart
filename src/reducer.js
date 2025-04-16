import {
  EMPTY_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions"

const reducer = (state, { type, payload }) => {
  switch (type) {
    case EMPTY_CART:
      return { ...state, cart: new Map() }
    case REMOVE:
      return { ...state, cart: increaseCart.delete(payload.id) }
    case INCREASE:
      const increaseItem = state.cart.get(payload.id)
      const increaseCart = new Map(state.cart)
      increaseCart.set(payload.id, {
        ...increaseItem,
        amount: increaseItem.amount + 1,
      })
      return { ...state, cart: increaseCart }
    case DECREASE:
      const decreaseItem = state.cart.get(payload.id)
      if (decreaseItem.amount <= 1) return { ...state }
      const decreaseCart = new Map(state.cart)
      decreaseCart.set(payload.id, {
        ...decreaseItem,
        amount: decreaseItem.amount - 1,
      })
      return { ...state, cart: decreaseCart }
    case LOADING:
      return
    case DISPLAY_ITEMS:
      return
    default:
      throw new Error("no matching action type : " + type)
  }
}

export default reducer
