import Navigation from "../../components/Navigation/Navigation";
import Image from "../../components/Image/Image";
import UserInterface from "../../pages/ViewUser/interfaces/UserInterface";
import Label, { LabelType } from "../../components/Label/Label";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import styles from './styles.module.css';

const ViewUserLayout = (props: {userDetails: UserInterface}) => {
    const { userDetails: {
        eMail,
        username,
        firstName,
        lastName,
        country,
        image,
        about
    }} = props;

    return (
        <div className={ styles['container'] }>
            <Navigation />
            <Image image={ image } />
            <Label 
                type={ LabelType.USER }
                name={ username }
            />
            <InfoBlock title={ 'about me' }>
            </InfoBlock>
                <div className={ styles.about }>
                    <p>{ about }</p>
                </div>
            <InfoBlock title={ 'first name' }>
                <span>{ firstName }</span>
            </InfoBlock>
            <InfoBlock title={ 'last name' }>
                <span>{ lastName }</span>
            </InfoBlock>
            <InfoBlock title={ 'e-mail' }>
                <span>{ eMail }</span>
            </InfoBlock>
            <InfoBlock title={ 'country' }>
                <span>{ country }</span>
            </InfoBlock>
        </div>
    )
}

export default ViewUserLayout;
