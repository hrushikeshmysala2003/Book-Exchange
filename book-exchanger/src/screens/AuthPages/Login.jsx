import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { loadUser, loginUser } from '../../redux/actions/user';
import toast from "react-hot-toast";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser(email, password))
        setEmail("");
        setPassword("");
    }
   
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500"  >
        <form onSubmit={submitHandler} className="w-96 p-4 bg-white rounded-lg m-3" >
            <h1 className="text-3xl block text-center font-semibold " > <i className="fa-solid fa-user pr-2"></i> Login</h1>
            <hr className="mt-2 text-lg" />
            <div className="my-3 " >
                <label htmlFor="email" className="my-3 block text-base mb-2" >Email : </label>
                <input  value={email} required onChange={e => setEmail(e.target.value)} type="email" id='email' className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter your Email" />
            </div>
            <div className="mt-3" >
                <label htmlFor="password" className="my-3 block text-base mb-2" >Password : </label>
                <input value={password} required onChange={e => setPassword(e.target.value)} type="password" id='password' className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter Password" />
            </div>
            {/* <div className="my-4 flex justify-end items-center" >
                <div>
                    <input id="remember" type="checkbox" className='mr-1' />
                    <label  htmlFor="">Remember Me</label>
                </div>
            </div> */}

            <div>
                <button  className="border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full" >Login</button>
            </div>
            <div className="flex justify-between items-center text-right mt-4" >
                    <div className="text-sm" >
                        <span className="px-2" >New User?</span>
                        <Link to={"/register"} className=" text-indigo-800 " >Register</Link>
                    </div>
                    <Link to={"/forgetpassword"} className=" text-sm italic text-indigo-800 " >Forgot Password?</Link>
            </div>
            
        </form>
    </div>
  )
}

export default Login
