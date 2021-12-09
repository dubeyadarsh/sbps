import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
const Header = () => {
  
   return (
  <div className="head" >
  
    <Link className="navbar-brand maintxt" to="/">S.B.PUBLIC SCHOOL</Link>
   
  
  
</div>
  );
}
export default Header;