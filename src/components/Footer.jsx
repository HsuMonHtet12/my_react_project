import React from "react";
import { SlSocialFacebook,SlSocialInstagram,SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import "../styles/Footer.css";
function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
                <SlSocialFacebook/>
                <SlSocialInstagram/>
                <SlSocialLinkedin/>
                <SlSocialTwitter/>
            </div>
            <p>@2023 kood.com</p>
        
        </div>
    )
}
export default Footer;