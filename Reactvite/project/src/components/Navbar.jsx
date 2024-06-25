import React from 'react'
// import logo from '../assets/Batman.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Navbar = () => {

  const data = useSelector((state) => state.cart)
  const result = data.length

  return (
    <div>
      <div className='bg-gray-500 text-white flex justify-between items-center px-16 p-4'>
        <div>
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-20'>
            <li className='text-2xl font-semibold
            '><NavLink to="/">Home</NavLink></li>
            <li className='text-2xl font-semibold
            '><NavLink to="/shop">Shop</NavLink></li>
            <li className='text-2xl font-semibold
            '><NavLink to="/wishlist">Wishlist</NavLink></li>
            <li className='text-2xl font-semibold
            '>
              <NavLink className="relative" to="/cart">
              <FaShoppingCart className='text-4xl'/>
              <span className='absolute top-[-20px] right-[-20px] flex justify-center items-center h-10 w-10 bg-green-700 rounded-full border-4 border-solid border-gray-500'>
                <span>{result}</span>
              </span>
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Navbar