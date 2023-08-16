import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='flex flex-col'>
        <div className='flex-grow'>
          <div className='p-4 mt-[4rem]'>
            <h1 className='text-center text-[36px]'> <span className='text-[#363A45]'>Welcome </span>
              <span className='text-[#6674CC]'>BookWorms!</span> </h1>
          </div>
          <div className='overflow-x-hidden'>
            <img src="https://res.cloudinary.com/dwna7axtx/image/upload/v1691061297/aosbl954en9mvr4qajqr.jpg"
              alt="bg" className='h-[480px] w-full object-cover opacity-90' />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home