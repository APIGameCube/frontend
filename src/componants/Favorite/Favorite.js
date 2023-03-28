
import './Favorite.css'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalFav from '../../ModalFav/ModalFav';


function Favorite(props) {



  const deleteGame  = async () => {
    await fetch(`https://backend-black-nu.vercel.app/addGame/${props.item.id}`, {

        method: 'DELETE',
        headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })

}
useEffect(()=>{
  deleteGame();
},)

  const [favoriteArray, setFavoriteArray] = useState([]);
  const sendReq = async () => {
    const serverURL = 'https://backend-black-nu.vercel.app/allFavGame';
    const response = await fetch(serverURL);
    const data = await response.json();
    console.log(data);
    setFavoriteArray(data);
  }

  const [showFlag, setShowFlag] = useState(false)
  const [clickedCard, setClickedCard] = useState({});
  const handleShow = (item) => {
      setClickedCard(item);
      setShowFlag(true);
  }

  const handleClose = () => {
      setShowFlag(false);
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
                <Button variant="primary" onClick={() => { deleteGame(item) }}> Delete</Button>
                <Button variant="primary" onClick={() => { handleShow(item) }}> Update</Button>
              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>
      <ModalFav showFlag={showFlag} handleClose={handleClose} item={clickedCard} />
    </div >
  );
}

export default Favorite;