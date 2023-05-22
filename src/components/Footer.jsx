import React from 'react';
import { FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { HiEnvelope } from "react-icons/hi2";
import './Footer.css';

function Footer() {
  return (
    <footer>
      <h3>Vanessa Sánchez</h3>
      <p>React Developer</p>
      <div>
        <ul>
            <li>
            <a href='mailto:bvanesanchezp@gmail.com'>
                <HiEnvelope size={30}/>
            </a>
            </li>
            <li>
            <a href='https://twitter.com/QtieAlpaca'>
                <FaTwitterSquare size={30}/>
            </a>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/bertha-vanessa-s%C3%A1nchez-posadas-5b05a9208/'>
                <FaLinkedin size={30}/>
            </a>
            </li>
        </ul>
      </div>
      
    </footer>
  );
}

export default Footer;