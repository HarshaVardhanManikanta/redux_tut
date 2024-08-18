import {addToCart} from "../constants";
const initialState = {
  cartData:[]
}

export default function cartItems(state=initialState,action){
  console.log(action)
  switch(action.type){
    case addToCart:
      console.log('Reducer Data from Action',action)
      return {
        ...state,cartData:action.data
      }
    default:
      return state
  }
}