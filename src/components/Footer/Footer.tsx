import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './styles.module.css';
import Box from '../Box/Box';
import Copyright from '../Copyright/Copyright';
import { faFacebookF, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const phone: number = 111222333;
    const eMail: string ='tradey.support@tradey.com';
    const fbUrl: string ='https://www.facebook.com';
    const igUrl: string = 'https://www.instagram.com';

    return (
        <footer className={ styles.footer }>
            <div className={ styles['footer-box'] }>
                <a href={ `tel:${ phone }` } >
                    <FontAwesomeIcon icon={ faPhone } />
                </a>
                <a href={ `mailto:${ eMail }`}>
                    <FontAwesomeIcon icon={ faEnvelope } /> 
                </a>
                </div>
                <div className={ styles['footer-box-center'] }>
                    <Copyright />
                </div>
                <div className={ styles['footer-box'] }>
                <a href={ fbUrl } target="_blank">
                    <FontAwesomeIcon icon={ faFacebookSquare } />
                </a>
                <a href={ igUrl } target="_blank">
                    <FontAwesomeIcon icon={ faInstagramSquare } />
                </a>
            </div>
        </footer>
    )
}

export default Footer;