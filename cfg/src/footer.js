import React from 'react';
import { FaFacebook ,FaTwitter, FaInstagram} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const facebookProfileUrl = 'https://www.facebook.com/RkssTrust/';
  const twitterProfileUrl = 'https://twitter.com/i/flow/login?redirect_after_login=%2Frkssngo%3Ft%3DUvyGpQpybPkFHxSPppFIvw%26s%3D09';
  const instagramProfileUrl='https://www.instagram.com/rkssmumbai/?igshid=YmMyMTA2M2Y%3D';
  return (
    <footer className="footer">
      <div className="social-media">
        <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
          <i className="fab fa-facebook"> facebook </i>
        </a>
        <a href={twitterProfileUrl} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon" />
          <i className="fab fa-twitter">twitter</i>
        </a>
        <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
          <i className="fab fa-twitter">instagram</i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
