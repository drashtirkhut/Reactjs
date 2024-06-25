// import React from 'react';
import { PRODUCT_SET , PRODUCT_GET } from '../Constant';
import { takeEvery , put } from 'redux-saga/effects';

function* getProduct(){
    let data = yield fetch('http://localhost:3000/productData')
    data = yield data.json()
    console.log('productSaga called' , data);
    yield put({type:PRODUCT_SET , data});
}

function* productSaga() {
    yield takeEvery(PRODUCT_GET , getProduct)
}

export default productSaga