import React, { useState, useEffect } from "react";
import FFCharacterStats from "../components/FFCharacterStats";

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
    }, 500);
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
          <p>I'm currently a web developer at <a href='https://lilly.com' className='font-semibold italic hover:underline'>Eli Lilly</a> - working hard to create accessible, user-centered digital experiences for healthcare professionals and patients all around the world! I graduated from Purdue University where I earned my degree in Computer Science and Studio Art.</p>
          <br />
          <p>I've always loved art, tech, and where they intersect. I aim to make the web a cuter place - one site at a time. However, in my free time, I pursue my passions in game development, animation, and painting. Keep an eye out for those projects! :)</p>
        </div>
        <div className="relative">
          <img src='/assets/img/profile.jpg' className='max-sm:w-48 lg:max-w-60 rounded-lg' />
          <img src="/assets/img/m-bead.png" className="absolute top-5 -right-7 -rotate-6 w-16"/>
          <img src="/assets/img/h-bead.png" className="absolute top-20 -right-11 rotate-12 w-16"/>
          <img src="/assets/img/cat-sitting-sticker.png" className="absolute -bottom-6 -left-6 w-20"/>
        </div>
      </div>
      <div className='flex justify-center items-center my-4'>
        <div>
          <img 
            src={isDead ? '/assets/img/ghost_idle.gif' : (isHit ? '/assets/img/hit.gif' : '/assets/img/avatar_idle.gif')} 
            onClick={handleAvatarClick}
            className="cursor-pointer"
          />
        </div>
        <div>
          <div className="font-bold text-3xl"><h2>meekee</h2></div>
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
      <FFCharacterStats />
      {/* <div className='grid max-sm:grid-cols-1 grid-cols-2 place-items-center my-10'>
        <div className="border border-stone-700 bg-white rounded-lg p-10 w-5/6">
          <p className="flex justify-center font-bold">attributes:</p>
          <ul>
            <li>Class: Human Developer</li>
            <li>Primary Weapon: Cursor & Keyboard</li>
            <li>Secondary Weapon: Apple Pencil & iPad Air</li>
          </ul>
        </div>
        <div className="border border-stone-700 bg-white rounded-lg p-10 w-5/6">
          <p className="flex justify-center font-bold">attributes:</p>
          <ul className="list-disc pl-5">
            <li>computer graphics & animation</li>
            <li>game development</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div> */}
      <div className="flex justify-center pb-5">
        <button className="bg-transparent border border-stone-600 hover:bg-pink-100 p-2 rounded-full font-bold"><a href="/work">check out my work!</a></button>
      </div>
    </div>
  );
}

export default AboutMe;