import React from 'react'
import ProjectGridCard from './projectGridCard/ProjectGridCard'
import './ProjectGrid.css'

import Twitter from '../../assets/twitter.png'
import github from '../../assets/Image 1.png'
import ui from '../../assets/Image 2.png'
import Restaurant from '../../assets/Restaurant.png'
import amazon from '../../assets/amazon.png'


const ProjectGrid = () => {
    return (
        <div id="project" className="ProjectGrid">
            <div className="ProjectGrid__titleContainer"><h1 className="ProjectGrid__heading">Projects</h1></div>
            
            <div className="ProjectGrid__grid">
            <ProjectGridCard body="twitter clone built using react" title="Twitter" img={Twitter} link="https://twitter-clone-8d64a.web.app/" />
          <ProjectGridCard body="github api project using react" title="github api"  img={github} link="https://github-react-api.netlify.app" />
          <ProjectGridCard body="restaurant api project using react" title="Restaurant" img={Restaurant} link="https://prajwalr308.github.io/RestaurantFinder/" />
          <ProjectGridCard body="ui design" title="ui" img={ui} link="https://freshgroceryreact.netlify.app" />
          <ProjectGridCard body="amazon clone built using mern stack"  title="amazon"  img={amazon} link="https://reactamazonclone.herokuapp.com/" />
          <ProjectGridCard body="twitter clone built using react" title="Twitter" img={Twitter} link="" />
            </div>
         
        </div>
    )
}

export default ProjectGrid
