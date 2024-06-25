import CakeReducer , {ChocoReducer} from "./cake/CakeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake:CakeReducer,
  choco:ChocoReducer
})

export default rootReducer