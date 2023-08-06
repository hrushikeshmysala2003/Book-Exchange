import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import "./AddBook.css"
import "./AuthPages/fileUploadCss.css"
import axios from 'axios';

export default function AddBook() {

    const [details, setDetails] = useState({id:'64c610dd420fc46b20acc7e0'});
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(details);

        const response= await axios.post("http://localhost:5000/api/v1/addBook",{
            method:"POST",
            body:JSON.stringify(details),
            file:details.file
        })

        const res=await response.json();
        console.log(res);

        setDetails({});
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setDetails(prev => (
            {
                ...prev,
                [name]: value
            }
        ))
        // console.log(details);
    }

    function handleFileChange(e){
        // console.log(e.target.files[0]);
        setDetails(prev => (
            {
                ...prev,
                file: e.target.files[0]
            }
        ))
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='mt-[4rem]'>
                <img src="https://res.cloudinary.com/dwna7axtx/image/upload/v1691069235/bdra7wlikq3shkyp0tkv.jpg" alt="bg-2" className='w-full h-[100px] bg-no-repeat object-cover overflow-hidden' />
            </div>
            <div className='flex flex-col overflow-hidden'>
                <div className='flex-grow mb-[4rem]'>
                    <div>
                        <h1 className='w-full text-center text-4xl font-medium text-[#6674CC] py-5'>Enter Book Details</h1>
                        <form onSubmit={handleSubmit} className='border w-[80%] mx-auto p-5 shadow-md rounded-md'>
                            <div className='mb-3'>
                                <label htmlFor="title" className='block mb-2'>Title</label>
                                <input type="text" name='title' id='title' placeholder='Title' className='border w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400' required
                                    onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="author" className='block mb-2'>Author</label>
                                <input type="text" id='author' name='author' placeholder='Author' className='border w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400' required
                                    onChange={handleChange} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="category" className='block mb-2'>Category</label>
                                <input type="text" id='category' name='category' placeholder='Category (for e.g: educational,historic etc.. )' className='border w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400' required
                                onChange={ handleChange } />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="description" className='block mb-2'>Description <span className='text-red-400 select-none text-sm'>(must contain less than or equal to 100 characters)</span></label>
                                <textarea name='description' rows={5} id='description' placeholder='Description' className='border resize-none w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400' required onChange={ handleChange }/>
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="price" className='block mb-2'>Price <span className='select-none text-gray-300 text-sm ml-1'>₹ only</span></label>
                                <input type="number" id='price' name='price' placeholder='Price' className='border w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400 no-number-arrows' required onChange={ handleChange }/>
                            </div>
                            <div className='mb-5'>
                                <label htmlFor="book-img" className='block mb-2'>Book's Cover Photo <span className='text-gray-400 select-none text-sm ml-1'>(upload the image of book's front cover )</span></label>
                                <input type="file" id='book-img' className='rounded-md border border-gray-200 w-full text-base px-2 py-1 focus:outline-none focus:ring focus:border-blue-600' required onChange={handleFileChange} />
                            </div>
                            <div>
                                <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-all duration-[0.4s] ease-linear'>Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
