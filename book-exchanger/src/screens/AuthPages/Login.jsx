import React from 'react'
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500"  >
        <div className="w-96 p-3 bg-white rounded-lg m-3" >
            <h1 className="text-3xl block text-center font-semibold " > <i className="fa-solid fa-user pr-2"></i> Login</h1>
            <hr className="mt-2 text-lg" />
            <div className="my-3 " >
                <label htmlFor="email" className="my-3 block text-base mb-2" >Email : </label>
                <input type="email" id='email' className=" rounded-md order w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter your Email" />
            </div>
            <div className="mt-3" >
                <label htmlFor="password" className="my-3 block text-base mb-2" >Password : </label>
                <input type="password" id='password' className=" rounded-md order w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter Password" />
            </div>
            <div className="my-4 flex justify-end items-center" >
                <div>
                    <input id="remember" type="checkbox" />
                    <label  htmlFor="">Remember Me</label>
                </div>
            </div>

            <div>
                <button className="border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full" >Login</button>
            </div>
            <div className="flex justify-between items-center text-right mt-4" >
                    <div className="text-sm" >
                        <span className="px-2" >New User?</span>
                        <Link to={"/register"} className=" text-indigo-800 " >Register</Link>
                    </div>
                    <Link to={"/forgetpassword"} className=" text-sm italic text-indigo-800 " >Forgot Password?</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Login
