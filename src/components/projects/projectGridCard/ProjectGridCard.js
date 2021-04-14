import React from "react";
import "./ProjectGridCard.css";
import code from '../../../assets/coding.svg'

const ProjectGridCard = () => {
  return (
    <div className="container1">
<div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img className="fa fa-linkedin-square" src={code} />
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                    </h3>
                    <p>This is where I network and build my professional protfolio.</p>
                </div>
            </div>
        </div>
</div>
  );
};

export default ProjectGridCard;
