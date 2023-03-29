import { React, useState } from "react";
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import { Button, Form } from "react-bootstrap";
import './ThirdNavbar.css'
function ThirdNavbar(props) {

  return (
    <div className="main">
      <div className="backgroundImg">
        <nav className="navbar3">
          <Link to="/Games" className="link2">All Genres</Link>
          <Link to="/BattelRoyal" className="link2">Battle Royale</Link>
          <Link to="/Fighting" className="link2">Fighting </Link>
          <Link to="/MMORPG" className="link2">MMORPG </Link>
          <Link to="/MOBA" className="link2">MOBA </Link>
          <Link to="/Shooter" className="link2">Shooter </Link>
          <Link to="/Sports" className="link2">Sports</Link>
          <Link to="/Strategy" className="link2">Strategy </Link>
          <Link to="/Racing" className="link2">Racing </Link>
        </nav>
      </div>
    </div>
  );
}

export default ThirdNavbar;
