import { addToCart } from "../constants";

export const addCartItem = (data)=>{
  return {
    type:addToCart,
    data:data
  }
}