import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

// Import image files
import katyascorner from '../assets/img/katyascorner.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';

export const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-home">
                <img src={katyascorner} alt='Katyas Corner'/>
            </Link>

            <ul>
                <Link to="/src/pages/About.js">About</Link>

                <Link to='http://linkedin.com/in/katya-kubyshkin-11a238190/'>
                    <img src={linkedin} alt='LinkedIn'/>
                </Link>

                <Link to='https://github.com/katyascode'>
                    <img src={github} alt='Github' />
                </Link>
            </ul>
        </nav>
    )
}
