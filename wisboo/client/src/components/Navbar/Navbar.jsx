import React from 'react';
import { Link } from 'react-router-dom'
import "./Navbar.css"

function NavBar() {
    return (
      <>
        <ul>
          <li> <Link to="/home"><a href='a' class="active">Home</a></Link> </li>
          <li> <Link to="/create"><a href='a' >Create</a></Link></li>
        </ul>
      </>
    );
  }
  
  export default NavBar;