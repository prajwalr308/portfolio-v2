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
        <div className="ProjectGrid">
            <h1>Projects</h1>
            <div className="ProjectGrid__grid">
            <ProjectGridCard body="twitter clone built using react" title="Twitter" img={Twitter} />
          <ProjectGridCard body="github api project using react" title="github api"  img={github} />
          <ProjectGridCard body="restaurant api project using react" title="Restaurant" img={Restaurant}/>
          </div>
          <div className="ProjectGrid__grid2">
          <ProjectGridCard body="ui design" title="ui" img={ui}/>
          <ProjectGridCard body="amazon clone built using mern stack"  title="amazon"  img={amazon}/>
          <ProjectGridCard body="twitter clone built using react" title="Twitter" img={Twitter}/>
            </div>
         
        </div>
    )
}

export default ProjectGrid
