import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Nabaraj Dahal</h3>
      <p>Fell Free to contact me.</p>
      <h3>+977-9843077865</h3>
      <div className="socialMedia">
        <div className="facebook">
          <i class="fa-brands fa-facebook "></i>
        </div>
        <div className="instagram">
          <i class="fa-brands fa-instagram "></i>
        </div>
        <div className="youtube">
          <i class="fa-brands fa-youtube "></i>
        </div>
      </div>

      <h2>Copyright: &copy; All right reserved.</h2>
    </div>
  );
};

export default Footer;
