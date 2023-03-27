import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <div className='navbar'>

            <Link to="/" className="navpage">Home</Link>
            <Link to="/Games" className='navpage'>Games</Link>
            <Link to="/Favorite" className="navpage">favotite games</Link>

            <img src='https://i.pinimg.com/736x/23/bc/7f/23bc7f8945a1737ec2abcc2c3dc80095.jpg' className='navimg'></img>
            {/* <section className='showcase'>
                        <navpage.Brand className='title' href="/" >musicly</navpage.Brand>
                    </section> */}
            <Link to="/AboutUs" className="navpage">About us</Link>
            {isAuthenticated ? (
                <Link to="/Profile" className="navpage">{user.name}</Link>
            ) : (
                <Link to="/Login" className="navpage" onClick={() => loginWithRedirect()}>Sign In</Link>
            )}




        </div>
    )
}

export default Header;