import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../AboutUs/AboutUs.css"

function AboutUs() {
  return (
    <>
      <div className='banner1'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <cards className="cards">
        <Card className='card'>
          <Card.Img className='image' src="https://files.slack.com/files-tmb/TNGRRLUMA-F050AH5FBNW-adabb2f492/081614cd-da5a-47ab-9cc7-7996f470fb34_720.jpg" />
          <Card.Body>
            <Card.Title className='cardTitle'>Rakan Al-Madani</Card.Title>
            <Card.Text className='card-text'>
              <p>Full-stack Web Developer</p>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/rakan-almadani-b77281179'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/298883697_584382600086370_3667121077064123418_n.jpg?ccb=11-4&oh=01_AdTqu1VLmbyE0ylq6nPkMX4frhM5qQuCxim6hMxnffYwpQ&oe=642D3D94" />
          <Card.Body>
            <Card.Title className='cardTitle'>Mohammed Shahin</Card.Title>
            <Card.Text className='card-text'>
              <p>Full-stack Web Developer</p>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/mohammad-shahin-982875225'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/322992086_212909801186751_6845628969085474803_n.jpg?ccb=11-4&oh=01_AdQc8jpILzPrzSeijZMOi9F8zlwQzuDrrgQ1DTk3vssB-A&oe=642D3C84" />
          <Card.Body>
            <Card.Title className='cardTitle'>Mohannad Qasim</Card.Title>
            <Card.Text className='card-text'>
              <p>Full-stack Web Developer</p>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/mohannad-qasim96/'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/284990855_3104635743180107_5315448719391342225_n.jpg?ccb=11-4&oh=01_AdSEpsato42gV_4wp5a63VxOg4JsgNatPr7_WpBuWcLU0A&oe=642D4431" />
          <Card.Body>
            <Card.Title className='cardTitle'>Nawras Albibi</Card.Title>
            <Card.Text className='card-text'>
              <p>Full-stack Web Developer</p>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/nawrs-bibi-935ba510a'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img className='image' src="https://pps.whatsapp.net/v/t61.24694-24/284990855_3104635743180107_5315448719391342225_n.jpg?ccb=11-4&oh=01_AdSEpsato42gV_4wp5a63VxOg4JsgNatPr7_WpBuWcLU0A&oe=642D4431" />
          <Card.Body>
            <Card.Title className='cardTitle'>Ala'a Hmaidat</Card.Title>
            <Card.Text className='card-text'>
              <p>Full-stack Web Developer</p>
            </Card.Text>
            <Button className='btn-primary' href='https://www.linkedin.com/in/nawrs-bibi-935ba510a'>LinkedIn Profile</Button>
          </Card.Body>
        </Card>
      </cards>
    </>
  );
}

export default AboutUs;
