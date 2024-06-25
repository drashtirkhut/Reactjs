import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { productAdd } from '../reduxCore/productRedux/ProductActions'
import { addToCart } from '../reduxCore/cartRedux/CartActions'
import { addToWishlist } from '../reduxCore/wishlistRedux/WishlistActions'

const Shop = () => {

  const  dispatch = useDispatch()

  const data = useSelector((state) => state.product )
  console.log('shopData' , data);

  useEffect(() =>{
     dispatch(productAdd())
  }, [])

  return (
    <div>
      <h1 className='title'>This is Shop Page</h1>
      <div className='flex flex-wrap justify-around m-16'>
        {
          data.flat().map((item) => {
            return (
              <div key={item.id} className='my-8 shadow-lg'>
                <div className='border-2 border-gray-300'>
                  <div className='bg-rose-400 text-center'>
                    <div>
                      <img className='size-72' src={item.image} alt="" />
                    </div>
                    <div className='p-4'>
                      <div className='text-white font-bold'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                      </div>
                      <div className='mt-2'>
                        <button onClick={() => dispatch(addToCart(item))} className='btn font-bold'>AddToCart</button>
                      </div>
                      <div className='mt-2'>
                        <button onClick={() => dispatch(addToWishlist(item))} className='btn font-bold'>AddToWishList</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Shop