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
      const removeItemCart = new Map(state.cart)
      removeItemCart.delete(payload.id)
      return { ...state, cart: removeItemCart }

    case INCREASE:
      const increaseItem = state.cart.get(payload.id)
      const increaseItemCart = new Map(state.cart)
      increaseItemCart.set(payload.id, {
        ...increaseItem,
        amount: increaseItem.amount + 1,
      })
      return { ...state, cart: increaseItemCart }

    case DECREASE:
      const decreaseItem = state.cart.get(payload.id)
      if (decreaseItem.amount <= 1) return { ...state }
      const decreaseItemCart = new Map(state.cart)
      decreaseItemCart.set(payload.id, {
        ...decreaseItem,
        amount: decreaseItem.amount - 1,
      })
      return { ...state, cart: decreaseItemCart }

    case LOADING:
      return { ...state, loading: true }

    case DISPLAY_ITEMS:
      const newItems = new Map(payload.cart.map((item) => [item.id, item]))
      return { ...state, loading: false, cart: newItems }

    default:
      throw new Error("no matching action type : " + type)
  }
}

export default reducer
