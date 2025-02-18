import React, { useState, useEffect } from "react";

function AboutMe() {
  const [isHit, setIsHit] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [heartCount, setHeartCount] = useState(5);

  const handleAvatarClick = () => {
    setIsHit(true);
    setHeartCount(prev => (prev > 0 ? prev - 1 : 5));
    if (heartCount == 1) {
      setIsDead(true);
    } else if (heartCount == 0) {
      setIsDead(false);
    }
    
    // Reset back to avatar after 200ms
    setTimeout(() => {
      setIsHit(false);
    }, 200);
  };

  return (
    <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
      <div>
        <img
          src='/assets/img/wp.jpg'
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex justify-center items-center p-8">
        <p className='font-bold text-4xl max-sm: text-center'>────୨ৎ──── about me ────୨ৎ────</p>
      </div>
      <div className='grid max-sm:grid-cols-1 grid-cols-3 place-items-center px-16 py-10 gap-5 bg-white'>
        <div className='col-span-2'>
          <p className="font-bold text-3xl">Hi again! I'm Myky ᯓ★</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus dolor, imperdiet at cursus in, interdum id arcu. Aliquam a sem a libero fringilla dictum. Sed nec arcu metus. Suspendisse sed faucibus ex. Aliquam at facilisis tortor, pharetra rhoncus eros. Nunc finibus mi nec pharetra iaculis. Donec sit amet enim consectetur, aliquam purus non, suscipit nibh. Mauris sodales eros at finibus ultrices. Aliquam aliquam felis nec est aliquam luctus. Pellentesque ac nisl arcu.</p>
        </div>
        <div className="relative">
          <img src='/assets/img/profile.jpg' className='max-sm:w-48 lg:max-w-60 rounded-lg' />
          <img src="/assets/img/m-bead.png" className="absolute top-5 -right-7 -rotate-6 w-16"/>
          <img src="/assets/img/h-bead.png" className="absolute top-20 -right-11 rotate-12 w-16"/>
          <img src="/assets/img/cat-sitting-sticker.png" className="absolute -bottom-6 -left-6 w-20"/>
        </div>
      </div>
      <div className='flex justify-center items-center my-10'>
        <div>
          <img 
            src={isDead ? '/assets/img/kaomoji.gif' : (isHit ? '/assets/img/nerd.png' : '/assets/img/avatar.gif')} 
            onClick={handleAvatarClick}
            className="cursor-pointer"
          />
        </div>
        <div>
          <div className="font-bold text-3xl"><h2>meekee</h2></div>
          <div className="italic">LVL ??</div>
          <div className='grid grid-cols-5 gap-1'>
            {[...Array(5)].map((_, index) => (
              <img 
                key={index}
                src='/assets/img/pixel-heart.png' 
                className={`h-10 transition-opacity duration-300 ${index >= heartCount ? 'opacity-0' : 'opacity-100'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='grid max-sm:grid-cols-1 grid-cols-2 place-items-center my-10'>
        <div className="border border-stone-700 bg-white rounded-lg p-10 w-5/6">
          <p className="flex justify-center font-bold">skills:</p>
          <ul>
            <li>skill 0</li>
            <li>skill 0</li>
            <li>skill 0</li>
            <li>skill 0</li>
          </ul>
        </div>
        <div className="border border-stone-700 bg-white rounded-lg p-10 w-5/6">
          <p className="flex justify-center font-bold">strengths:</p>
          <ul>
            <li>skill 0</li>
            <li>skill 0</li>
            <li>skill 0</li>
            <li>skill 0</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <button className="bg-transparent border border-stone-600 hover:bg-pink-100 p-2 rounded-full font-bold">check out my work!</button>
      </div>
    </div>
  );
}

export default AboutMe;