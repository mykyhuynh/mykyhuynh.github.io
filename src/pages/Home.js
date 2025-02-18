import React from 'react';
import Showcase from '../components/Showcase';

function Home() {
    return (
        <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}>
            <div className='grid max-sm:grid-cols-1 grid-cols-2 gap-2 place-items-center'>
                <div className='lg:ml-28'>
                    <img src='/assets/img/hero.png' className='lg:max-w-2xl sm:max-w-lg' aria-label='Introduction image. Hello! My name is Myky Huynh' />
                </div>
                <div className='max-sm:pb-10'>
                    <h1 className='font-bold text-4xl'>developer and artist</h1>
                    <br />
                    <ul>
                        <li>Based in Indianapolis, IN</li>
                        <li>Currently working as a web developer</li>
                        <li>Passionate about technology, art, and all things in between!</li>
                    </ul>
                    <br />
                    <button className='bg-transparent border border-stone-600 hover:bg-blue-100 px-5 py-1 rounded-full font-bold'>
                        download my resume
                    </button>
                </div>
            </div>

            <div className='bg-yellow-100 px-20 py-10'>
                <h2 className='flex justify-center pb-10 font-bold text-3xl'>˖ ࣪ ⊹ featured work ⊹ ࣪ ˖</h2>
                <Showcase />
            </div>

            <div className='grid max-sm:grid-cols-1 grid-cols-4 w-9/12 mx-auto p-8'>
                <h2 className='font-bold text-3xl max-sm:text-center max-sm:mb-4'>let's connect!</h2>
                <div className='max-sm:col-span-1 col-span-3 grid grid-cols-4 place-items-center'>
                    <a href='mailto:myky.huynh@gmail.com' className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/email.png" width={64} /></a>
                    <a href='https://www.linkedin.com/in/myky-huynh/' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/linkedin.png" width={64} /></a>
                    <a href='https://github.com/mykyhuynh' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/github.png" width={64} /></a>
                    <a href='https://www.instagram.com/m1lk.and.hon3y/' target="_blank" className='hover:animate-wiggle cursor-pointer'><img src="/assets/img/instagram.png" width={64} /></a>
                </div>
            </div>
        </div>
    );
}

export default Home; 