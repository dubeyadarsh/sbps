import React from 'react'
import Header from "./Header/Header"
import './Home.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
 const Home = () => {
    
    return (
        <>
        <Header />
       <div className="container cont">
            <div>
                <Link to="/ResultLKG" className="btn butn ">Class L.K.G</Link>

            </div>
            <div>
                <Link to="/ResultUKG" className="btn butn ">Class U.K.G</Link>

            </div>
            <div>
                <Link to="/Result1" className="btn butn ">Class 1st</Link>

            </div>
            <div>
            <Link to="/Result1" className="btn butn ">Class 2nd</Link>


            </div>
            <div>
                <Link to="/Result1" className="btn butn ">Class 3rd</Link>

            </div>
            <div>
                <Link to="/Result1" className="btn butn ">Class 4th</Link>

            </div>
            <div>
                <Link to="/Result5" className="btn butn ">Class 5th</Link>

            </div>
            <div>
                <Link to="/Result5" className="btn butn ">Class 6th</Link>

            </div>
            <div>
                <Link to="/Result7" className="btn butn ">Class 7th</Link>

            </div>
            <div>
                <Link to="/Result8" className="btn butn ">Class 8th</Link>

            </div>
            <div>
                <Link to="/Result9" className="btn butn ">Class 9th</Link>

            </div>
           
        </div> 
        </>
    );
}
export default Home;
