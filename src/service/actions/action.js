import {addToCart} from "../constants";

export const addCartItem = (data)=>{
  console.log('Data for Action',data)
  return {
    type:addToCart,
    data:data
  }
}