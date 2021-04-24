import React from 'react'
import footer from '../../assets/footer.png'
import twit from '../../assets/twit.png'
import link from '../../assets/linkedin.png'
import git from '../../assets/github.png'
import './contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <h1 style={{display:'grid',placeItems:"center"}}>Contact Me</h1>
            <div className="contact__logo">
            <img className="contact__twitterLogo" src={twit} />
            <img className="contact__githubLogo" src={git} />
            <img className="contact__linkedinLogo" src={link} />
            </div>
        </div>
    )
}

export default Contact
