import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


function Header() {
    return (
        <div className='navbar'>

            <Link to="/" className="navpage">Home</Link>
            <Link to="/music" className='navpage'>Music</Link>
            <Link to="/Playlist" className="navpage">Playlist</Link>

            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/6d030677220237.5c9fc36f0ed8f.jpg' className='navimg'></img>
            {/* <section className='showcase'>
                        <navpage.Brand className='title' href="/" >musicly</navpage.Brand>
                    </section> */}
            <Link to="/AboutUs" className="navpage">About us</Link>
            <Link to="/Login" className="navpage">Sign In</Link>




        </div>
    )
}

export default Header;