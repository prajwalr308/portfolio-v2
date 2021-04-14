import React from 'react'
import ProjectGridCard from './projectGridCard/ProjectGridCard'
import './ProjectGrid.css'

const ProjectGrid = () => {
    return (
        <div className="ProjectGrid">
            <div className="ProjectGrid__grid">
            <ProjectGridCard />
          <ProjectGridCard />
          <ProjectGridCard />
          <ProjectGridCard />
          <ProjectGridCard />
          <ProjectGridCard />
            </div>
         
        </div>
    )
}

export default ProjectGrid
