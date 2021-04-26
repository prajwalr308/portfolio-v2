import React from 'react'
import './AboutMe.css'
import coding from '../../assets/scuba.png'

const AboutMe = () => {
    return (
        <div id="about" className="AboutMe">
            <img className="AboutMe__image" src={coding} alt="code" />
            <div className="AboutMe__text">
                <h1>About Me</h1>
                <p>Hello! I'm prajwal,I enjoy creating things that live on the internet, whether that is websites, applications, or anything in between and I love learning about new technologies.</p>
            </div>
        </div>
    )
}

export default AboutMe
