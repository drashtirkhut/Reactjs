import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART , INCREMENT_TO_CART , DECREMENT_TO_CART } from "../Constant";


const getcartdatafromlocalstorage =()=>{
  const cartdata = localStorage.getItem('cart')
  return cartdata ? JSON.parse(cartdata) : []
}

const cartReducer = (data =getcartdatafromlocalstorage() , action) => {
  switch(action.type){
    case ADD_TO_CART:
      console.warn('AddToCartCalled'  , action);

      const existingItem = data.findIndex(item => item.id === action.data.id)

      let updateCart;

      if(existingItem >= 0){
        updateCart = data.map(item => item.id === action.data.id ? {...item , quantity:item.quantity + 1} : item)

        localStorage.setItem('cart',json.stringfiy(updateCart))
      }else{
        updateCart  = [{...action.data , quantity:1} , ...data]
      }

      localStorage.setItem('cart',json.stringfiy(updateCart))

      return [...updateCart];

    case REMOVE_TO_CART:
      console.warn('RemoveToCartCalled'  , action);

      const remiderItem = data.filter((item) => item.id !== action.data)
      return[...remiderItem]
      
    case EMPTY_CART:
      console.warn('EmptyCartCalled'  , action);
      return data = []
    case INCREMENT_TO_CART:
      let updateIncrment = data.map(item => item.id === action.data.id ? {...item , quantity:item.quantity + 1} : item)
      
    return updateIncrment

    
    case DECREMENT_TO_CART: return{


    }
    default: return data
  }
}

export default cartReducer