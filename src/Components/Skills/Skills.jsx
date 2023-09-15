import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="path"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,101.3C120,139,240,213,360,229.3C480,245,600,203,720,181.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="projects">
          <div className="coverProj">
            <div className="proj1">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="weather"
                  src="./Images/weather.jpg"
                  alt="weather"
                />
                <div className="card-body">
                  <h5 className="card-title">Weather</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="proj2">
              <div className="card" style={{ width: "18rem" }}>
                <img src="./Images/meme.png" className="meme" alt="meme" />
                <div className="card-body">
                  <h5 className="card-title">Meme Generator</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="proj3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="./Images/todo.jpg"
                className="card-img-top toDo"
                alt="To Do React App"
              />
              <div className="card-body">
                <h5 className="card-title">To Do React app</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
