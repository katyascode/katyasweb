import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// Import image files 
import katyascorner from '../assets/img/katyascorner.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';

export const NavBar = () => {
    const[link, setLink] = useState('home');
    const[scrolled, isScrolled] = useState(false);
    
    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                isScrolled(true);
            } else {
                isScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (val) => {
        setLink(val);
    }

    return (
        <Navbar expand='lg' className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={katyascorner} alt='Katyas Corner' />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={link === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={link === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                    </Nav>

                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/katya-kubyshkin-11a238190/"> <img src={linkedin} alt=""/> </a>
                            <a href="https://github.com/katyascode"> <img src={github} alt=""/> </a>
                        </div>
                        
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect!</span>
                        </button> 
                    </span>                   
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}