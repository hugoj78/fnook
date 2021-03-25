import { useEffectUpdate, increment, decrement } from '../actions/stripe'

const initialState = {
  basketValue: [],
  quantity: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case useEffectUpdate:
      return {
        ...state,
        basketValue: {
          amount: action.payload.amount * 100,
          currency: action.payload.currency,
          quantity: action.payload.quantity
        }
      }
    case increment:
      return {
        ...state,
        quantity: state.quantity + 1,
        basketValue: {
          amount: state.amount,
          currency: state.currency,
          quantity: state.quantity + 1
        }
      }
    case decrement:
      return {
        ...state,
        quantity: state.quantity - 1,
        basketValue: {
          amount: state.amount * 100,
          currency: state.currency,
          quantity: action.payload.quantity
        }
      }
    case 'setLoading':
      return { ...state, loading: action.payload.loading }
    case 'setError':
      return { ...state, error: action.payload.error }
    default:
      return state
  }
}
