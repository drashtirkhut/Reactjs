import rootReducer from "./rootReducer";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productRedux/ProductSaga";
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
    reducer : rootReducer,
    middleware : () => ([sagaMiddleware])
})

sagaMiddleware.run(productSaga)




export default Store