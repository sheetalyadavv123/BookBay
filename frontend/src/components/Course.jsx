import React from 'react'
import list from '../../public/list.json';
import Cards from '../components/Cards';
import {Link} from 'react-router-dom';
function course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
       <div className='mt-28 item-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>We are glad you are <span className='text-pink-300 font-semibold'>here!!</span></h1>
          <p className='mt-8'>Welcome to a cozy corner made for stories, thoughts, and quiet moments.
               Here, every page is an escape and every book has something special to offer.
               Take your time, wander through words, and read whatever feels right to your heart.
               No rules, no rush — just you and the joy of getting lost in a good book.</p>
          <Link to="/">
              <button className="bg-pink-300 text-white px-4 py-2 rounded-md hover:bg-pink-500 duration-300 mt-6">Back</button>
          </Link>
       </div>
       <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
        {
           list.map((item)=>(
            <Cards key={item.id} item={item}/>
           ))
        }
       </div>
    </div>
    </>
  )
}

export default course
