import React from 'react'
function Cards({item}) {
  return (
    <div className="px-3 pb-4 h-full"> {/* Padding creates the gap between cards */}
       <div className="card bg-base-100 shadow-xl border overflow-hidden h-full hover:scale-105 duration-200 ">
         <figure className="h-56  w-full bg-gray-200 overflow-hidden">
           <img
             src={item.image}
             alt="Shoes"
             className="w-full h-full object-cover" 
           />
         </figure>
         <div className="card-body p-4 flex-col justify-between">
           <h2 className="card-title text-lg">
             {item.name}
             <div className="badge badge-secondary">NEW</div>
           </h2>
           <p className="text-sm line-clamp-2">{item.title}</p>
           <div className="card-actions flex justify-between mt-4">
             <div className="badge badge-outline">Price: {item.price}</div>
             <div className="badge badge-outline hover:bg-pink-300 hover:text-white duration-200">Buy Now</div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Cards