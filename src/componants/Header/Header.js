import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


function Header() {
    return (
        <div className='navbar'>
            <Navbar bg="dark" variant="dark" className='allnav'>
                <Container className='nav'>
                    <Nav className="me-auto">
                        <Link to="/" className="navbar">Home</Link>
                        <Link to="/music" className='navbar'>Music</Link>
                        <Link to="/Playlist" className="navbar">Playlist</Link>

                    </Nav>
                    <section className='showcase'>
                        <Navbar.Brand className='title' href="/" >musicly</Navbar.Brand>
                    </section>
                        <Link to="/AboutUs" className="navbar">About us</Link>
                        <Link to="/Login" className="navbar">sign in</Link>


                </Container>
            </Navbar>
        </div>
    )
}

export default Header;