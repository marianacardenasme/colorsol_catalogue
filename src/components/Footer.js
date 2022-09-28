import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
        <h3>
            Comunícate con una asesora a través de Whatsapp
            <a href="https://api.whatsapp.com/send?phone=0123456789" target="_blank"> dando click aquí</a>
        </h3>
    </div>
  )
};

export default Footer;