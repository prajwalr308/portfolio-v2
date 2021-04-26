import React from 'react'
import footer from '../../assets/footer.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer__img" src={footer} />
            <p className="designed">Designed and built by Prajwal</p>
        </div>
    )
}

export default Footer
