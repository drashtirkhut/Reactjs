import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToWishlist } from '../reduxCore/wishlistRedux/WishlistActions'
import { emptyWishlist  } from '../reduxCore/wishlistRedux/WishlistActions'

const Wishlist = () => {

  const data = useSelector((state) => state.wishlist)
  console.log('Wishlist', data);

  const dispatch = useDispatch()
  return (

    <div>
      <h1 className='title'>This is WishList Page</h1>
      {/* <button onClick={() => dispatch(emptyWishlist())} className='btn fl' >EmptyWishlist</button> */}
      <div>

        <table className=' table-fixed w-full text-center mt-12 mx-auto '>
          <thead className='border-2 border-black '>
            <tr>
              <th>ProductImage</th>
              <th>ProductTitle</th>
              <th>ProductRemove</th>
            </tr>
          </thead>
          <tbody className='text-center mt-12'>
            {
              data.map((item) => {
                return (
                  <tr className=''>
                    <td className=''>
                      <img className='size-36 mx-auto' src={item.image} alt="" />
                    </td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                    <td>
                      <button onClick={() => dispatch(removeToWishlist(item.id))}
                        className='btn'>removeToWishlist</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <button onClick={() => dispatch(emptyWishlist())} className='btn flex justify-center items-center ml-20 mt-10' >EmptyWishlist</button>

    </div>


  )
}

export default Wishlist