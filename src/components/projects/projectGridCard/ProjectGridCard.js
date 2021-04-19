import React from "react";
import "./ProjectGridCard.css";
import code from '../../../assets/coding.svg'

const ProjectGridCard = (props) => {
  return (
    <div className="container1">
<div className="card">
            <div className="face face1">
                <div className="content">
                    <div className="icon">
                        <img className="fa fa-linkedin-square" src={props.img} />
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <h3>
                        <a href="" target="_blank">{props.title}</a>
                    </h3>
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
</div>
  );
};

export default ProjectGridCard;
