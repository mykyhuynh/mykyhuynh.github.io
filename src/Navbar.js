import logo from './assets/img/nerd.png';
import './assets/font/Myfont-Regular.ttf';

export default function Navbar() {
    return <nav className="nav">
        <u><a href="/tech">Tech</a></u>
        <div id="logo"><img src={logo} alt="Logo" height="70"/></div>
        <u><a href="/art">Art</a></u>
    </nav>
}