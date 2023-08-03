import React from 'react'
import { Link } from "react-router-dom"

const ChangePassword = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500" >
            <form className="w-96 p-4 bg-white rounded-lg m-3" >
                <h1 className="text-3xl block text-center font-semibold " >Change Password</h1>
                <hr className="mt-2 text-lg" />
                <div className="my-3" >
                    <label htmlFor="email" className="my-3 block text-base mb-2" >Old Password : </label>
                    <input type="password" id='email' className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter your Email" />
                </div>
                <div className="my-3" >
                    <label htmlFor="password" className="my-3 block text-base mb-2" >New Password : </label>
                    <input type="password" id='password' className=" rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600" placeholder="Enter Password" />
                </div>


                <div>
                    <button className="border-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white mt-3 p-1.5 rounded-md w-full" >Change Password</button>
                </div>


            </form>
        </div>
    )
}

export default ChangePassword
