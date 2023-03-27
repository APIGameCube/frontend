import React from "react";
import '../Footer/Footer.css'
import {FiFacebook , FiTwitter , FiInstagram , FiGithub} from "react-icons/fi";

function Footer() {
    return (
        <div className="foot">
        <div className="Footer">
            <p> &copy; all copy right are resarved </p>
            <p>contact us on Social media:</p>
            <ul className='buttons'>
               
                <li>
                    <a href="https://github.com/Group04-Musicly" target="_blank" rel="noreferrer"><i className="fab fa-github"><FiGithub /></i></a>
                </li>
                <li>
                    <a href="/AboutUs" target="_blank" rel="noreferrer"><i className="fab fa-aboutus">ABOUT US</i></a>
                </li>

            </ul>
        </div>
        </div>

    )
}


export default Footer;