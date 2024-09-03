import logo from './logo.svg';
import hero from './assets/img/hero.png';
import './input.css';
import Navbar from './components/Navbar';

function App() {
  return <>
    <div className='bg-repeat min-h-screen' style={{ backgroundImage: 'url(/grid_background.webp)' }}> 
      <Navbar />
      <div className='flex justify-center'>
        <img src={hero} className='md:w-9/12 md:max-w-5xl w-full' aria-label='Introduction image. Hello! My name is Myky Huynh' />
      </div>
    </div>
  </>;
}

export default App;
