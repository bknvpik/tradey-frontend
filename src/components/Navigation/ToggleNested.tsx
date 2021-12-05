import { faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer, { FlexContainerAlign, FlexContainerCenter } from '../FlexContainer/FlexContainer';
import Paragraph from '../Paragraph/Pragraph';
import styles from './styles.module.css';

const ToggleNested = (props: {open: boolean, toggle: () => void}) => {
    return (
        <div className={ styles['menu-link'] } onClick={ props.toggle }>
            <ContentContainer>
                <FlexContainer>
                    <FontAwesomeIcon icon= { faUser } />
                    <FontAwesomeIcon
                        icon={ props.open? faChevronUp : faChevronDown }
                        style={{ color: 'var(--green-2)', margin: '1em' }}
                    />
                </FlexContainer>
                <FlexContainer
                    flex={ 'flex-4' }
                    center={ FlexContainerCenter.ITEMS }
                    align={ FlexContainerAlign.END_CONTENT }
                >
                    <Paragraph children={ 'my profile' } />
                </FlexContainer>
            </ContentContainer>
        </div>
    )
}

export default ToggleNested;
