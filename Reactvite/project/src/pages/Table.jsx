import React from "react"
// import Navbar from "../components/Navbar";


const Table = () => {

  // const Deleteuser = 

  return (
    <div>
      {/* <Navbar/> */}
      <div className="container mx-auto px-2 py-7 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 -ml-[740px]">CRUD Database</h1>

        <table className="w-full table-auto">
          <thead>
            <tr className="text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3  px-4 text-center ">ID</th>
              <th className="py-3 px-6 text-left">First</th>
              <th className="py-3 px-6 text-left">Last</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Hobby</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>

          </thead>
        </table>
        <tbody>
          <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
            <td className="py-3 px-6 text-center">35</td>
            <td className="py-3 px-6 text-left">Jane</td>
            <td className="py-3 px-6 text-left">Smith</td>
            <td className="py-3 px-6 text-left">js@gmail.com</td>
            <td className="py-3 px-6 text-left">5035555555</td>
            <td className="py-3 px-6 text-left">Portland, Oregon</td>
            <td className="py-3 px-6 text-left">Photography</td>
            <td className="py-3 px-6 text-center">
              <div className="flex">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Del</button>

              </div>
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
            <td className="py-3 px-6 text-center">36</td>
            <td className="py-3 px-6 text-left">Tristan</td>
            <td className="py-3 px-6 text-left">Rodriguez</td>
            <td className="py-3 px-6 text-left">tr@gmail.com</td>
            <td className="py-3 px-6 text-left">2015555555</td>
            <td className="py-3 px-6 text-left">New York, New York</td>
            <td className="py-3 px-6 text-left"></td>
            <td className="py-3 px-6 text-center">
              <div className="flex">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Del</button>

              </div>
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
            <td className="py-3 px-6 text-center">37</td>
            <td className="py-3 px-6 text-left">Andrea</td>
            <td className="py-3 px-6 text-left">Jones</td>
            <td className="py-3 px-6 text-left">aj@gmail.com</td>
            <td className="py-3 px-6 text-left">5035555555</td>
            <td className="py-3 px-6 text-left">Portland, Oregon</td>
            <td className="py-3 px-6 text-left">Programming</td>
            <td className="py-3 px-6 text-center">
              <div className="flex">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Del</button>

              </div>
            </td>
          </tr>
          <tr className="bg-gray-200 hover:bg-gray-100 text-gray-800 text-sm leading-normal">
            <td className="py-3 px-6 text-center">38</td>
            <td className="py-3 px-6 text-left">Elliott</td>
            <td className="py-3 px-6 text-left">Richardson</td>
            <td className="py-3 px-6 text-left">er@gmail.com</td>
            <td className="py-3 px-6 text-left"></td>
            <td className="py-3 px-6 text-left">Boise, Idaho</td>

            <td className="py-3 px-6 text-left"></td>
            <td className="py-3 px-6 text-center"></td>
            <div className="flex">
              <button className=" bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline -ml-36 mt-1">Edit</button>
              <button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 mt-1">Del</button>
            </div>

          </tr>
        </tbody>

        <tr className="bg-white hover:bg-gray-100 text-gray-800 text-sm leading-normal">
          <td className="py-3 px-6 text-center">39</td>
          <td className="py-3 px-6 text-left">june</td>
          <td className="py-3 px-6 text-left">bug</td>
          <td className="py-3 px-6 text-left">jb@gmail.com</td>
          <td className="py-3 px-6 text-left ">cooking</td>
          <td></td>
          <td></td>
          <td className="py-3 px-6 text-center">
            <div className="flex">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Edit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2">Del</button>

            </div>
          </td>
        </tr>
      </div>
      <button className="h-10 w-40 bg-blue-700 -ml-[820px] rounded-md text-white">Download CSV</button>
      <button className="h-10 w-24 bg-green-700 ml-4 border-solid border-2 border-green-500 rounded-md text-white">Add Item</button>

      <div className="flex items-center justify-center">
        <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
          &larr; Previous
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 hover:bg-pink-400"
        >
          1
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 hover:bg-pink-400"
        >
          2
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 hover:bg-pink-400"
        >
          3
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 hover:bg-pink-400"
        >
          4
        </a>
        <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
          Next &rarr;
        </a>
      </div>
    </div>






  );
}


export default Table