import React from 'react'
import books from "../../public/books.jpg";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2">
        <div className="space-y-4 mt-8 md:mt-18">
            <h1 className="text-4xl">Discover books you'll love,<span className="text-pink-300">one page at a time.</span> </h1>
        <p className="">
            Explore a wide collection of books across genres.
            Find stories that match your mood and curiosity.
            Read, save, and revisit your favorites anytime.
            Your reading journey starts here.
        </p>
        <label className="input input-bordered flex items-center gap-2 focus-within:outline-none focus-within:ring-0">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Email" required grow focus:outline-none focus:ring-0 />
</label>
<div className="validator-hint hidden">Enter your email address</div>

<button className="btn btn-secondary mt-0">Secondary</button>

        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2">
      <img src={books} className="w-120 h-68 md:mt-20 mx-0 md:mx-10 mt:10"/>
      </div>
    </div>
    </>
  );
}

export default Banner;

