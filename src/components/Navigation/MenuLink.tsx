import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer, { FlexContainerAlign, FlexContainerCenter } from '../FlexContainer/FlexContainer';
import Paragraph from '../Paragraph/Pragraph';
import styles from './styles.module.css';

export interface MenuLinkProps {
    icon: IconDefinition;
    text: string;
    linkTo: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MenuLink = (props: MenuLinkProps) => {
    const { icon, text, linkTo } = props;

    return (
        <Link to={ linkTo } style={{ all: 'unset' }}>
            <div className={ styles['menu-link'] }>
                <ContentContainer>
                    <FlexContainer>
                        <FontAwesomeIcon icon= { icon } />
                    </FlexContainer>
                    <FlexContainer
                        flex={ 'flex-1' }
                        center={ FlexContainerCenter.ITEMS }
                        align={ FlexContainerAlign.END_CONTENT }
                    >
                        <Paragraph children={ text } />
                    </FlexContainer>
                </ContentContainer>
            </div>
        </Link>
    )
}

export default MenuLink;
