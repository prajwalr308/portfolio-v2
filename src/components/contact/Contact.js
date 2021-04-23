import React from 'react'
import footer from '../../assets/footer.png'
import twit from '../../assets/twit.png'
import './contact.css'


const Contact = () => {
    return (
        <div className="contact">
            <img className="contact__img" src={footer} />
            <img className="contact__twitterLogo" src={twit} />
        </div>
    )
}

export default Contact
