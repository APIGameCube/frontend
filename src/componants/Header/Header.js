import { Link } from 'react-router-dom';
import '../Header/Header.css'


function Header() {
    return (
        <div className='navbar1'>
            <div className='header1'>
                <Link to="/" className="navpage">Home</Link>
                <Link to="/Games" className='navpage'>Games</Link>
                <Link to="/Favorite" className="navpage">favotite games</Link>
            </div>

            <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gamer-logo-design-template-9c1714f6bc3420bd27f18e7d7cd2452d_screen.jpg?ts=1637162711' className='navimg'></img>
            {/* <section className='showcase'>
                        <navpage.Brand className='title' href="/" >musicly</navpage.Brand>
                    </section> */}
            <Link to="/AboutUs" className="navpage">About us</Link>
            <Link to="/Login" className="navpage">Sign In</Link>




        </div >
    )
}

export default Header;