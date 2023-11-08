import "./Footer.css";
import logo from "../Assets/Ecommerce_Frontend_Assets/Assets/logo.png";
import insta from "../Assets/Ecommerce_Frontend_Assets/Assets/instagram_icon.png";
import pintreset from "../Assets/Ecommerce_Frontend_Assets/Assets/pintester_icon.png";
import whatsapp from "../Assets/Ecommerce_Frontend_Assets/Assets/whatsapp_icon.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} alt="Logo" />
        <h1>SHOPPER</h1>
      </div>
      <div className="navigate-links">
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">offices</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social-media-links">
        <img src={insta} alt="Insatgesm-SHOOPERS" />
        <img src={pintreset} alt="Pintreset-SHOOPERS" />
        <img src={whatsapp} alt="Whatsapp-SHOOPERS" />
      </div>
      <hr />
      <p className="cp-right">Copyright @ 2023 - All Right Reserved</p>
    </div>
  );
};
