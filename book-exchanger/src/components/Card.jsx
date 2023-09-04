import React, { useState } from 'react'

function Card({ book }) {
    console.log(book);
    const [desc, setdesc] = useState(book.description.substring(0, Math.min(100, book.description.length)))

    function handleDesc() {
        if (desc.length === 100)
            setdesc(book.description);
        else
            setdesc(book.description.substring(0, 100))
    }
    return (
        <div className='text-black w-[300px] flex flex-col gap-2 border border-gray-100 rounded shadow-lg bg-white'>
            <div>
                <img src={book.img.url} alt="img" className='rounded h-[150px] w-[300px] object-cover' />
            </div>
            <div className='p-3 text-center'>
                <h3 className='font-bold text-xl mb-2'>{book.name}</h3>
                {
                    desc.length >= 100 ?
                        <p className='text-gray-500'>{desc + '...'}{
                            desc.length !== book.description.length ? <button className='text-blue-400' onClick={handleDesc}>Read more</button> : <button className='text-blue-400' onClick={handleDesc}>Show less</button>
                        } </p> : <p className='text-gray-500'>{desc}</p>
                }
            </div>
            <div className='border-t border-t-gray-200 text-center py-2 mx-4'>
                <span className="text-gray-700 text-2xl font-black">${book.price}</span>
            </div>
        </div>
    )
}

export default Card