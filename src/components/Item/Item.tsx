import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import styles from './styles.module.css';

export type ItemProps = {
    name: string,
    brand: string,

}

export const Item = (props: ItemProps) => {
    const { name, brand } = props;
    return (
        <div className={ styles['item-container'] }>
            <div>
                <img src="" alt="item image"/>
            </div>
            <div className={ styles['item-label'] }>
                <div className={ styles['item-details'] }>
                    <h3>{ name }</h3>
                    <p>{ brand }</p>
                </div>
                <div className={ styles['item-likes'] }>
                    likes
                </div>
                <ActionButton size={ ButtonSize.SMALL }>
                    trade
                </ActionButton>
            </div>
        </div>
    )
}
