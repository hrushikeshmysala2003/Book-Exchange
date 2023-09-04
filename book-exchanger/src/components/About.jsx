import React from 'react';
import './About.css'

function AboutUs() {
  return (
    <div>
      <div className="text-center text-4xl text-[#6674CC] py-8">
        <h2>About Us</h2>
      </div>
      <div className="w-full flex justify-center bg-[#F5F5F5] py-8">
        <div className="about w-[80%] flex items-center justify-center gap-[2rem]">
          <div className="about-para text-lg text-gray-800 w-[40%]">
            <p>
              Welcome to <br /><span className='text-[#6674CC] text-4xl'>Book X-Change</span>, <br /> your go-to destination for sharing the magic of books. Our story is all about a passion for reading, a love for literature, and a commitment to building a community of bookworms like you.
            </p>
          </div>
          <div className='about-img w-[50%]'>
            <img src="https://res.cloudinary.com/dwna7axtx/image/upload/v1693823892/kozswl5afluof1mffuke.avif" alt="about_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;