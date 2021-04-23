import React from 'react'
import './AboutMe.css'
import coding from '../../assets/scuba.png'

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <img className="AboutMe__image" src={coding} alt="code" />
            <div>
                <h1>About Me</h1>
                <p>lorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default AboutMe
