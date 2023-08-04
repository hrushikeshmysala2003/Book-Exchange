import React from 'react'
import { Link } from "react-router-dom"

import "./fileUploadCss.css"

const Register = () => {
  
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500"  >
        <form className="w-96 p-4 bg-white rounded-lg m-3" >
            <h1 className="text-3xl block text-center font-semibold " > <i className="fa-solid fa-user pr-2"></i> Register</h1>
            <hr className="mt-2 text-lg" />
            <div className="w-20 my-3 h-20 flex justify-center mx-auto" >
              <img src="https://res.cloudinary.com/dwna7axtx/image/upload/v1690702045/ws0sv4eb57qlyakpt8nc.png" alt="avatar" />
            </div>
            <div className="my-3 " >
                <label htmlFor="name" className="my-3 block text-base mb-2" >Name : </label>
                <input type="text" id='name' className=" rounded-md border border-gray-200 order w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter your Name" />
            </div>
            <div className="my-3 " >
                <label htmlFor="email" className="my-3 block text-base mb-2" >Email : </label>
                <input type="email" id='email' className=" rounded-md border border-gray-200 order w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter your Email" />
            </div>
            <div className="mt-3" >
                <label htmlFor="password" className="my-3 block text-base mb-2" >Password : </label>
                <input type="password" id='password' className=" rounded-md border border-gray-200 order w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter Password" />
            </div>
            <div className="mt-3" >
                <label htmlFor="file" className="my-3 block text-base mb-2" >Profile picture : </label>
                <input  type="file" id='file' className=" rounded-md border border-gray-200 w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" />
            </div>

            <div>
                <button className="border-2 my-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full" >Register</button>
            </div>
            <div className="flex justify-end items-center text-right mt-4" >
                    <div className="text-sm" >
                        <span className="px-2" >Already Registered?</span>
                        <Link to={"/login"} className=" text-indigo-800 " >Login</Link>
                    </div>
                    
            </div>
            
        </form>
    </div>
  )
}

export default Register
