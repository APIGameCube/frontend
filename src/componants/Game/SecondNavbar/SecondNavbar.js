import { React } from "react";
import { Link } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import './SecondNavbar.css'

function SecondNavbar(props) {

const searchH =(e)=>{
e.preventDefault()
props.setInputText(e.target.search.value);
}

  return (
    <div className="main">
      <div className="backgroundImg">
        <nav className="navbar">
          <div >
          <Link to="/Games" className="link2">All Genres</Link>
          <Link to="/BattelRoyal" className="link2">Battle Royale</Link>
          <Link to="/Fighting" className="link2">Fighting </Link>
          <Link to="/MMORPG" className="link2">MMORPG </Link>
          <Link to="/MOBA" className="link2">MOBA </Link>
          <Link to="/Shooter" className="link2">Shooter </Link>
          <Link to="/Sports" className="link2">Sports</Link>
          <Link to="/Strategy" className="link2">Strategy </Link>
          <Link to="/Racing" className="link2">Racing </Link>
          </div>
          {/* <Link to="/MMO" className="link2">MMO </Link> */}
          

          {/* <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="🔍 Search"
              // onSubmit={inputText}
            />
          </div> */}

          <Form onSubmit={searchH} >
            <div className="form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Search" name="search" defaultValue={props.inputText} ></Form.Control>
            </Form.Group></div>

            <div className="btnForm">
            <Button variant="primary" className="searchgames" type="submit" >
            🔍 
            </Button></div>
          </Form>
        </nav>
        {/* <List /> */}

      </div>
    </div>
  );
}

export default SecondNavbar;
