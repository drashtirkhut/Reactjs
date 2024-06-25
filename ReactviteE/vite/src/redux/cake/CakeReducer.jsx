import { BUY_CAKE } from "./CakeConstant";
import { BUY_CHOCO } from "./CakeConstant"

const initialState = {
  numOfCake:10,
  numOfChoco:20
}

const CakeReducer = (state = initialState  , action ) => {
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCake:state.numOfCake - 1
      }
      case BUY_CHOCO:
        return{
          ...state,
          numOfChoco:state.numOfChoco - 1
        }

    default:return state
  }
}


export default CakeReducer