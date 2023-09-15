import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";
import nabaraj from "../../../public/Images/nabaraj.jpg";

import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="container1" id="aboutMe">
      <div className="introBox">
        <div className="aboutMe">
          <div className="facebook">
            <i class="fa-brands fa-facebook fa-bounce"></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-instagram fa-bounce"></i>
          </div>
        </div>
        <div className="intro">
          Hello I'M <span className="name">Nabaraj Dahal.</span>
        </div>
        <div className="profession">
          <h1>
            <Typical
              loop={Infinity}
              className="loopName"
              steps={["Computer Engineer", 1000, "Frontend Developer", 1000]}
            />
          </h1>
        </div>
        <div className="des">
          Energetic Engineer having good skills in HTML, CSS, JavaScript,
          ReactJs.
        </div>
      </div>
      <div className="pic">
        <img className="imageCover " src={nabaraj} alt="nabaraj Photo" />
      </div>
    </div>
  );
};

export default AboutMe;
