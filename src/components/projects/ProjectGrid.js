import React from 'react'
import ProjectGridCard from './projectGridCard/ProjectGridCard'
import './ProjectGrid.css'

const ProjectGrid = () => {
    return (
        <div className="ProjectGrid">
            <h2>Projects</h2>
            <div className="ProjectGrid__flex">
            <ProjectGridCard />
            <ProjectGridCard />
            <ProjectGridCard />

            </div>
            
            <div className="ProjectGrid__flex">
            <ProjectGridCard />
            <ProjectGridCard />
            <ProjectGridCard />

            </div>
        </div>
    )
}

export default ProjectGrid
