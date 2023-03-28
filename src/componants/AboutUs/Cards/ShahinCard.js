
import "../../FavModal/PlayList.css"


import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";



function ShahinCard() {
  return (
    <>
      <div>
        <div className="cardperson">
          <div className="card__image-container">
            <img className="card__image" src="https://pps.whatsapp.net/v/t61.24694-24/298883697_584382600086370_3667121077064123418_n.jpg?ccb=11-4&oh=01_AdRkdzwxQyF2_7QJGVCPb6UNvQeocRHiAP7aq7l6uAYq6Q&oe=642EC754" alt="gg"></img>
          </div>

          <svg className="card__svg" viewBox="0 0 800 500">

            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
          </svg>

          <div className="card__content">
            <div className="contact-card">
              <div>
                <h3 className="card__title">Mohammad Shahin</h3>
                <p>hi there my name is Mohammad and i am a great gamer and my dream is to be a great devoloper</p>
              </div>
              <div>
                <a href="https://github.com/Group04-Musicly" target="_blank" rel="noreferrer"><i className="fab fa-github"><FiGithub /></i></a>
                <a href="https://github.com/Group04-Musicly" target="_blank" rel="noreferrer"><i className="fab fa-lenkedin"><FiLinkedin /></i></a>
                <a href="https://web.facebook.com/dante.neero" target="_blank" rel="noreferrer"><i className="fab fa-facebook"><FiFacebook /></i></a>
                <a href="https://www.instagram.com/nawrs_sama/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"><FiInstagram /></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShahinCard;