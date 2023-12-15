import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import Logo from "../assets/klogo.png";
import { AiOutlineBars } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function NavBar()
{   const [Mobile, setMobile]=useState(false);
    return(
        <div className="navbar">
            <div className="leftside">
                <img src={Logo} alt="Logo"/>
                <p>Kood</p>
            </div>
            <div className="rightside">
            <ul className={Mobile? "navlink-mobile":"navlink"} onClick={()=>setMobile(false)}>
                
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/login"><li>Login</li></Link>
              
           
                <button className="CartIcon">
                   <li> <FaCartShopping/><span>0</span></li>
                   
                </button>
            
                
              
               
            </ul>
            <button className="BarIcon" onClick={()=>setMobile(!Mobile)}>
                    {Mobile?<ImCross/>:<AiOutlineBars/>}</button>
            </div>
        </div>
    )
}
export default NavBar;