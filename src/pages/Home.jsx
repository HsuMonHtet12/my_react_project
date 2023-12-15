import React from "react";
import {Link} from "react-router-dom";
import "../styles/Home.css";

function Home()
{
    return(
        <div className="home">
            <div className="headerContainer">
                <h1>Fresh & Tasty </h1>
                  <h1>  KOREAN Food</h1>
                <p>You can order all the variety of Korean food & its current trends.</p>
                <Link to="/menu">
                <button>Order Now</button>
                </Link>
            </div>
        </div>
      
    )
}
export default Home;