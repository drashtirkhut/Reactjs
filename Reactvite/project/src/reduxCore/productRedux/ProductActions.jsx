import { PRODUCT_GET , PRODUCT_SET } from "../Constant";


export const productAdd = (data) => {
  return{
    type:PRODUCT_GET,
    data : 'reduxx-saga'
  }
}

export const productSet = (data) => {
  return{
    type:PRODUCT_SET,
    data : data
  }
}
