import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { useAuth0 } from '@auth0/auth0-react';
import "../button/home-btn.css"

function Header() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    return (
        <div className='navbar1'>
            <div className='header1'>
                <Link to="/" className="navpage">Home</Link>
                <Link to="/Games" className='navpage'>Games</Link>
                <Link to="/Favorite" className="navpage">favorite games</Link>
            </div>
            <div className='weblogo' >
                <h4 className='logotext'>Games</h4>
                <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-9c1714f6bc3420bd27f18e7d7cd2452d_screen.jpg?ts=1637162711' alt='gg' className='navimg'></img>
                <h4 className='logotext'>Cube</h4>
            </div>
            <div className='logabout'>
                <Link to="/AboutUs" className="navpage">About us</Link>
                {isAuthenticated ? (
                    <Link to="/Profile" className="navpage">{user.name}</Link>
                ) : (
                    <Link to="/Login" className="navpage" onClick={() => loginWithRedirect()}>Sign In</Link>
                )}
            </div>




        </div >
    )
}

export default Header;