import React from "react";
import "../styles/Menu.css";

function MenuItem({name,image,price}){
    
    
    return(
        <div className="menuItem">
            <img src={image} alt={name} />
            <div className="details">
                <div className="cname">{name}</div>
                <div className="price">{price} Ks</div>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    );
}

export default MenuItem;