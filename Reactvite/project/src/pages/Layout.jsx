import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import Navbar from '../components/Navbar'
import {createBrowserRouter , RouterProvider , Route} from 'react-router-dom'

const roots  = createBrowserRouter([
  {
    path:'',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      }
    ]
  }
 
])
const Layout = () => {
  return (
    <RouterProvider router={roots}>
    </RouterProvider>
  )
}

export default Layout