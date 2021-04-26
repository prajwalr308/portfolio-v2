import React from 'react'
import footer from '../../assets/footer.png'
import twit from '../../assets/twit.png'
import link from '../../assets/linkedin.png'
import git from '../../assets/github.png'
import './contact.css'


const Contact = () => {
    return (
        <div id="contact" className="contact">
            <h1 style={{display:'grid',placeItems:"center"}}>Contact Me</h1>
            <div className="contact__logo">
            <a href="https://twitter.com/prajwalr308"><img className="contact__twitterLogo" src={twit} /></a>
            <a href="https://github.com/prajwalr308"><img className="contact__githubLogo" src={git} /></a>
            <a href="https://www.linkedin.com/in/prajwalrthedeveloper/"><img className="contact__linkedinLogo" src={link} /></a>
            </div>
        </div>
    )
}

export default Contact
