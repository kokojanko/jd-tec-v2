import React from "react";
import Logo from '../images/LogoWhite.png'

function Footer(){
    return(
        <div className="FooterWrapper">
            <div className="FooterItem">
                <img src={Logo} className="logoFooter"/>
            </div>
            <div className="FooterItem">
                
            </div>
            <div className="FooterItem">
                <div className="FooterContent">
                    <h2>Связь</h2>
                    <p>Gmail: JD.tec2022@gmail.com</p>
                    <p>Ozon</p>
                    <p>Яндекс Маркет</p>
                </div>
            </div>
        </div>
    )
}

export default Footer