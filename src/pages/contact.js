import React from "react";

function Contact() {
  return (
    <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
      <div className="flex justify-center">
        <img src="/assets/img/contact.png" className='md:max-w-3xl max-w-lg p-10' />
      </div>
      <div className="grid grid-cols-4 max-w-sm mx-auto gap-10">
      <a href='mailto:myky.huynh@gmail.com' className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/email.png" width={72}/></a>
        <a href='https://www.linkedin.com/in/myky-huynh/' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/linkedin.png" width={72}/></a>
        <a href='https://github.com/mykyhuynh' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/github.png" width={72}/></a>
        <a href='https://www.instagram.com/m1lk.and.hon3y/' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/instagram.png" width={72}/></a>
      </div>
    </div>
  );
}

export default Contact;