import React from 'react';
import './footer-style.scss'
const Footer = props =>{
    return(
        <footer className="footer" data-test="footerCompoent">
            <div className="wrap" data-test="copyWriterComponent">
              &#169; Venakt FreeLance
            </div>
        </footer>
    )
}

export default Footer;