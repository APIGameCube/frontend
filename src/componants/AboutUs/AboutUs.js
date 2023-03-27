import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../AboutUs/AboutUs.css"

function AboutUs() {
  return (
    <>
      <div className='banner'>
        <h1 className='content'>About Us</h1>
        <p className='content'>Welcome to our gaming website! We are a team of five passionate developers who have come together to create an exciting platform for gamers of all levels. Our website offers a diverse range of games, from classic favorites to the latest releases, all in one convenient location. We strive to provide a user-friendly interface that makes it easy for you to browse and discover new games, connect with other gamers, and engage in a fun and immersive gaming experience. We are constantly working to improve our website and add new features to enhance your gaming experience. Thank you for choosing our website as your go-to gaming destination!</p>
      </div>
      <cards className="cards">
        <Card className='card'>
          <Card.Img className='image' src="blob:https://web.whatsapp.com/a0ed7c70-6e57-4e0c-9bb7-1c0841fcdec7" />
          <Card.Body>
            <Card.Title className='cardTitle'>Rakan Al-Madani</Card.Title>
            <Card.Text className='card-text'>
              <h5>Full-stack Web Developer</h5>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/rakan-almadani-b77281179'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/298883697_584382600086370_3667121077064123418_n.jpg?ccb=11-4&oh=01_AdTqu1VLmbyE0ylq6nPkMX4frhM5qQuCxim6hMxnffYwpQ&oe=642D3D94" />
          <Card.Body>
            <Card.Title className='cardTitle'>Mohammed Shahin</Card.Title>
            <Card.Text className='card-text'>
              <h5>Full-stack Web Developer</h5>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/mohammad-shahin-982875225'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/322992086_212909801186751_6845628969085474803_n.jpg?ccb=11-4&oh=01_AdQc8jpILzPrzSeijZMOi9F8zlwQzuDrrgQ1DTk3vssB-A&oe=642D3C84" />
          <Card.Body>
            <Card.Title className='cardTitle'>Mohannad Qasim</Card.Title>
            <Card.Text className='card-text'>
              <h5>Full-stack Web Developer</h5>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/mohannad-qasim96/'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/284990855_3104635743180107_5315448719391342225_n.jpg?ccb=11-4&oh=01_AdSEpsato42gV_4wp5a63VxOg4JsgNatPr7_WpBuWcLU0A&oe=642D4431" />
          <Card.Body>
            <Card.Title className='cardTitle'>Nawras Albibi</Card.Title>
            <Card.Text className='card-text'>
              <h5>Full-stack Web Developer</h5>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/nawrs-bibi-935ba510a'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://files.slack.com/files-tmb/TNGRRLUMA-F0510E6K6G0-cb18640eef/fb_img_1679841114743_720.jpg" />
          <Card.Body>
            <Card.Title className='cardTitle'>Ala'a Hmaidat</Card.Title>
            <Card.Text className='card-text'>
              <h5>Full-stack Web Developer</h5>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/nawrs-bibi-935ba510a'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>
      </cards>
    </>
  );
}

export default AboutUs;
