import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
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
}

const Label = (props: LabelProps) => {
    const { type, name, likes, views, numberOfItems, trades, buttonOnClick } = props;
    
    return (
        <div className={ styles['label'] }>
            <div className={ styles['detail'] }>
                <p>{ name }</p>
            </div>
            <div className={ styles['detail'] }>
                {type === LabelType.ITEM &&
                <>
                    <div className={ styles['data'] }>
                        <FontAwesomeIcon icon={ faHeart } />
                        <p>{ likes }</p>
                    </div>
                    <div className={ styles['data'] }>
                        <ActionButton
                            size={ ButtonSize.SMALL }
                            onClick={ buttonOnClick }
                        >
                            trade
                        </ActionButton>
                    </div>
                    <div className={ styles['data'] }>
                        <p>{ views }</p>
                        <FontAwesomeIcon icon={ faEye } />
                    </div>
                </>
                }
                {type === LabelType.USER &&
                <>
                    <div className={ styles['data'] }>
                        <FontAwesomeIcon icon={ faHeart } />
                        <p>{ numberOfItems }</p>
                    </div>
                    <div className={ styles['data'] }>
                        <ActionButton size={ ButtonSize.SMALL }>
                            view items
                        </ActionButton>
                    </div>
                    <div className={ styles['data'] }>
                        <p>{ trades }</p>
                        <FontAwesomeIcon icon={ faEye } />
                    </div>
                </>
                }
            </div>
        </div>
    )
}

Label.defaultProps = {
    type: LabelType.ITEM
}

export default Label;