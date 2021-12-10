import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import Copyright from '../Copyright/Copyright';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer, { FlexContainerAlign } from '../FlexContainer/FlexContainer';

const Footer = () => {
    const phone: number = 111222333;
    const eMail: string ='tradey.support@tradey.com';
    const fbUrl: string ='https://www.facebook.com';
    const igUrl: string = 'https://www.instagram.com';

    return (
        <footer className={ styles.footer }>
            <ContentContainer>
                <FlexContainer
                    flex={ 'flex-1' }
                >
                    <a href={ `tel:${ phone }` } className={ styles.link }>
                        <FontAwesomeIcon icon={ faPhone } />
                    </a>
                    <a href={ `mailto:${ eMail }`} className={ styles.link }>
                        <FontAwesomeIcon icon={ faEnvelope } />
                    </a>
                </FlexContainer>
                <FlexContainer flex={ 'flex-3' }>
                        <Copyright />
                </FlexContainer>
                <FlexContainer
                    flex={ 'flex-1' }
                >
                    <a href={ fbUrl } target="_blank" className={ styles.link }>
                        <FontAwesomeIcon icon={ faFacebookSquare } />
                    </a>
                    <a href={ igUrl } target="_blank" className={ styles.link }>
                        <FontAwesomeIcon icon={ faInstagramSquare } />
                    </a>
                </FlexContainer>
            </ContentContainer>
        </footer>
    )
}

export default Footer;