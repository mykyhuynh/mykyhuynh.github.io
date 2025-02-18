import React from "react";
import { Link } from 'react-router-dom';



function Error() {
  return <>
  <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}> 
    <div class="flex h-screen">
      <div class="m-auto flex flex-col items-center pb-44">
        <h3 className="font-extrabold text-5xl">OH NO!!</h3>
          <p>Something bad happened :\</p>
          <br />
          <button className='bg-transparent border border-stone-600 hover:bg-pink-100 py-1 px-20 rounded-full font-bold'><Link to={'/'}>go back to safety</Link></button>
        </div>
      </div>
  </div>
  </>
}

export default Error;