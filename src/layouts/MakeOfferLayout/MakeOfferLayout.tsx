import styles from 'styles.module.css';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Footer from '../../components/Footer/Footer';
import InfoLabel from '../../components/InfoLabel/InfoLabel';
import Navigation from '../../components/Navigation/Navigation';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const MakeOfferLayout = () => {
    return (
        <>
            <Navigation />
            <ContentContainer column={ true }>
                <SectionTitle text={ 'Make Offer' } />
                <InfoLabel text={ 'Your Items' } />
            </ContentContainer>
            <Footer />
        </>
    )
}

export default MakeOfferLayout;