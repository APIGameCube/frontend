
import './Favorite.css'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Favorite() {

  const [favoriteArray, setFavoriteArray] = useState([]);
  const sendReq = async () => {
    const serverURL = 'https://backend-black-nu.vercel.app/allFavGame';
    const response = await fetch(serverURL);
    const data = await response.json();
    console.log(data);
    setFavoriteArray(data);
  }

  useEffect(() => {
      sendReq();
  }, [])


  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {favoriteArray.map((item) => {
          return <Col key={item.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.feedback}</Card.Text>
                <Button variant="primary" onClick=""> Delete</Button>
                <Button variant="primary" onClick=""> Update</Button>
              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>

    </div >
  );
}

export default Favorite;