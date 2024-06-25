import { BUY_CAKE } from "./CakeConstant";
import {BUY_CHOCO} from "./CakeConstant"
export function buy_cake() {
  // console.log('buy_cake action');
  return{
    type:BUY_CAKE
  }
}

export function buy_choco(){
  // console.log('buy_choco action');
  return{
    type:BUY_CHOCO
}

}