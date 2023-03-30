
import './Favorite.css'
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdateModal from '../U-D-modals/UpdateModal';
import DeleteModal from '../U-D-modals/DeleteModal';
import { useAuth0 } from '@auth0/auth0-react';



function Favorite() {

  const {user} = useAuth0();

  const [favoriteArray, setFavoriteArray] = useState([]);
  const sendReq = async () => {
    const serverURL = `https://backend-production-8a11.up.railway.app/allFavGame/${user.email}`;
    const response = await fetch(serverURL);
    const data = await response.json();
    console.log(data);
    setFavoriteArray(data);


  }

  const takeNewArrFromChild = (arr) => {
    console.log("parent: ", arr);
    setFavoriteArray(arr);
  }

  useEffect(() => {
    sendReq()
  }, [])

  const [clickedCard, setClickedCard] = useState({})
  const [showFlag, setShowFlag] = useState(false)
  const handleShow = (item) => {
    setClickedCard(item);
    setShowFlag(true);

  }

  const [updateFlag, setupdateFlag] = useState(false)
  const showUpdateModal = (item) => {
    setupdateFlag(true);
    setClickedCard(item);
    console.log(item);
  }

  const closeUpdateModal = () => {
    setupdateFlag(false);

  }


  const handleClose = () => {
    setShowFlag(false);

  }

  const [deleteFlag, setdeleteFlag] = useState(false)
  const showDeleteModal = (item) => {
      setdeleteFlag(true);
      setClickedCard(item);
      console.log(item);
  }

  const closeDeleteModal = () => {
      setdeleteFlag(false);

  }





  return (
    <div className='favback'>
      <Row xs={1} md={1} className="g-4">
        {favoriteArray.map((item) => {
          return <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.comment}</Card.Text>

                {/* <Button variant="Light" className='BtnCard0' href={item.game_url}> more </Button> */}
                <Button variant="Success" className='BtnCard1-fav' onClick={() => { showUpdateModal(item) }}> Update</Button>
                <Button variant="Danger" className='BtnCard2' onClick={() => { showDeleteModal(item) }}> Delete</Button>

              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>

      <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={clickedCard} takeNewArrFromChild={takeNewArrFromChild} />
      <DeleteModal deleteFlag={deleteFlag} closeDeleteModal={closeDeleteModal} item={clickedCard} takeNewArrFromChild={takeNewArrFromChild} />

    </div>
  );
}

export default Favorite;