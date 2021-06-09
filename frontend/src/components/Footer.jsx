import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Siguenos en nuestras Redes Sociales</p>
            <div className="footer-social-icons">
                <FacebookIcon fontSize="large" className="footer-social-icons__icon"/>
                <TwitterIcon fontSize="large" className="footer-social-icons__icon"/>
                <YouTubeIcon fontSize="large" className="footer-social-icons__icon"/>
                <InstagramIcon fontSize="large" className="footer-social-icons__icon"/>
            </div>
            <p>&copy; 2021 ReadIt. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer
