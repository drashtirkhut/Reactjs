import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCart } from '../reduxCore/cartRedux/CartActions'
// import { emptyCart } from './reduxCore/cartRedux/cartActions'
import { emptyCart, } from '../reduxCore/cartRedux/CartActions'

const Cart = () => {

  const cartdata = useSelector((state => state.cart))
  console.log('cartData', cartdata);
  const dispatch = useDispatch()

  const amount= cartdata.length  && cartdata.map((item)=>item.price * itme.quantity).
  reduce((prev,next)=>prev += next)

  // console.log();
  return (


    <div>
      <h1 className='title'>This is Cart Page</h1>
      <button onClick={() => dispatch(emptyCart())} className='btn'>EmptyCart</button>
      <div className='flex m-4 justify-between'>
        <div>
          <table className='w-[1200px] text-center mt-12 mx-auto'>
            <thead className='border-2 border-solid border-gray-500'>
              <tr>
                <th>ProductImage</th>
                <th>ProductTitle</th>
                <th>ProductQuantity</th>
                <th>ProductPrice</th>
                <th>ProductRemove</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => {
                  return (
                    <tr className='border-2 border-solid border-gray-500'>
                      <td>
                        <img className='size-36 mx-auto' src={item.image} alt="" />
                      </td>
                      <td>
                        <span>{item.title}</span>
                      </td>
                      <td>
                        <button className='text-2xl'>+</button>
                        <span className='text-4xl'>{item.quantity}</span>
                        <button className='text-2xl'>-</button>
                      </td>
                      <td>
                        <span>{item.price}</span>
                      </td>
                      <td>
                        <button onClick={() => dispatch(removeToCart(item.id))} className='btn'>removeToCart</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='w-[300px]'>
          <table className='mt-12'>
            <thead>
              <tr>
                <th>Total Price</th>
              </tr>
              <tr>
                <th>${amount}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cart



