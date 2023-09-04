import React from 'react'
import { Link } from 'react-router-dom'
import "./profile.css"
import Navbar from "../../components/Navbar"

const Profile = ({ user }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
<<<<<<< HEAD
      {
        user && <div className=' rounded-2xl flex overlow-auto justify-center bg-sky-500/100' >
                  <div className=' w-8/12 sm:w-full h-screen bg-sky-500/100 flex flex-col justify-center p-2 father' > 
                    <div className='bg-white  p-2 ' >
                      <div className='flex flex-row justify-evenly items-center h-full  profile-container' >
                          <div className='basis-4/12 w-10 h-10 flex justify-center items-center  image-container p-3' >
                            <img  className='avatar' src={user.avatar.url} alt="Image" />
                          </div>
                          <div className=' flex flex-col justify-center px-5' >
                            <div><p className='font-semibold inline-block' >Name</p> : {user.name}</div>
                            <div><p className='font-semibold inline' >Email</p> : {user.email}</div>
                            <div><p className='font-semibold inline' >Created At</p> : {user.createdAt.split("T")[0]}</div>
                            <div className='flex py-2' >
                              <div>
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Update Profile 
                              </button>
                              </div>
                              <div>
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Change Password
                              </button>
                              </div>
                            </div>

                            <div className='flex justify-center'>
                            <Link>

                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Go to home
                              </button>
                            </Link>
                            </div>
          
                          </div>
=======
        {
          user && <div className=' rounded-2xl flex overlow-auto justify-center bg-sky-500/100' >
            <div className=' w-8/12 sm:w-full h-screen bg-sky-500/100 flex flex-col justify-center p-2 father' >
              <div className='bg-white  p-2 ' >
                <div className='flex flex-row justify-evenly items-center h-full  profile-container' >
                  <div className='basis-4/12 w-10 h-10 flex justify-center items-center  image-container p-3' >
                    <img className='avatar' src={user.avatar.url} alt="Image" />
                  </div>
                  <div className=' flex flex-col justify-center px-5' >
                    <div><p className='font-semibold inline-block' >Name</p> : {user.name}</div>
                    <div><p className='font-semibold inline' >Email</p> : {user.email}</div>
                    <div><p className='font-semibold inline' >Created At</p> : {user.createdAt.split("T")[0]}</div>
                    <div className='flex py-2' >
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Update Profile
                        </button>
                      </div>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Change Password
                        </button>
>>>>>>> b915e12588a36641f4a6572d726534515bcaff98
                      </div>
                    </div>

                    <div className='flex justify-center'>
                      <Link to={'/'}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                          Go to home
                        </button>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
              <div className='bg-orange-300 basis-1/2 overflow-auto' >
                <h1 className='font-semibold text-lg ' >
                  MY BOOKS
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis error perferendis cumque odit illo, corporis officiis explicabo ipsum impedit minus.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, provident harum beatae tempora odio nulla, in numquam tempore mollitia eaque quibusdam autem enim laudantium voluptatem voluptates aspernatur amet neque ad!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quas dicta? Deserunt voluptates repellat reprehenderit vero cumque nobis consectetur aperiam.
                </h1>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Profile
