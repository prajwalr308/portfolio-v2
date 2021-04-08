import React from "react";
import "./ProjectGridCard.css";
import code from '../../../assets/coding.svg'

const ProjectGridCard = () => {
  return (
    <div>
   

      <div className="card">
        <img src={code} alt="Avatar" style={{width: "100%"}} />
        <div className="card__container">
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectGridCard;
