import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import FlexContainer, { FlexContainerAlign } from '../FlexContainer/FlexContainer';
import Paragraph, { ParagraphSize } from '../Paragraph/Pragraph';
import styles from './styles.module.css';

export const LabelType = {
    ITEM: 'item',
    USER: 'user'
}

export type LabelProps = {
    type?: string | undefined,
    name?: string | undefined,
    likes?: number | undefined,
    views?: number | undefined,
    numberOfItems?: number | undefined,
    trades?: number | undefined,
    buttonOnClick?: any;
    toggleLike?: any;
    liked?: boolean;
}

const Label = (props: LabelProps) => {
    const { type, name, likes, views, numberOfItems, trades, buttonOnClick, toggleLike, liked } = props;
    
    return (
        <div className={ styles['label'] }>
            <FlexContainer flex={ 'flex-1' }>
                <Paragraph children={ name } /> 
            </FlexContainer>
            <FlexContainer flex={ 'flex-1' }>
                {type === LabelType.ITEM &&
                <>
                    <FlexContainer
                        flex={ 'flex-1' }
                        align={ FlexContainerAlign.AROUND_CONTENT }
                    >
                        <FontAwesomeIcon icon={ faHeart } style={ liked ? { color: 'red', cursor: 'pointer' } : { cursor: 'pointer' } } onClick={ toggleLike }/>
                        <Paragraph 
                            children={ likes }
                            size={ ParagraphSize.SMALL }
                        />
                    </FlexContainer>
                    <FlexContainer flex={ 'flex-2' }>
                        <ActionButton
                            size={ ButtonSize.SMALL }
                            onClick={ buttonOnClick }
                            text={ 'trade' }
                        />
                    </FlexContainer>
                    <FlexContainer
                        flex={ 'flex-1' }
                        align={ FlexContainerAlign.AROUND_CONTENT }
                    >
                        <Paragraph
                            children={ views }
                            size={ ParagraphSize.SMALL }
                        />
                        <FontAwesomeIcon icon={ faEye } />
                    </FlexContainer>
                </>
                }
                {type === LabelType.USER &&
                <>
                    <div className={ styles['data'] }>
                        <FontAwesomeIcon icon={ faHeart } />
                        <p>{ numberOfItems }</p>
                    </div>
                    <div className={ styles['data'] }>
                        <ActionButton size={ ButtonSize.SMALL } text={ 'view items' }/>
                    </div>
                    <div className={ styles['data'] }>
                        <p>{ trades }</p>
                        <FontAwesomeIcon icon={ faEye } />
                    </div>
                </>
                }
            </FlexContainer>
        </div>
    )
}

Label.defaultProps = {
    type: LabelType.ITEM
}

export default Label;