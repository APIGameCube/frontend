import "../Cards/Cards.css"
import { FiFacebook, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";



function NawrsCard() {
  return (
    <>
      <div>
        <div className="card">
          <div className="card__image-container">
            <img className="card__image" src="https://pps.whatsapp.net/v/t61.24694-24/284990855_3104635743180107_5315448719391342225_n.jpg?ccb=11-4&oh=01_AdSEpsato42gV_4wp5a63VxOg4JsgNatPr7_WpBuWcLU0A&oe=642D4431" alt="gg"></img>
          </div>

          <svg className="card__svg" viewBox="0 0 800 500">

            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
            <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
          </svg>

          <div className="card__content">
            <div className="contact-card">
              <div>
                <h3 className="card__title">Nawrs Albibi</h3>
                <p>hi there my name is Nawrs and i am a great gamer and my dream is to be a great devoloper</p>
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

export default NawrsCard;