import styles from './styles.module.css';
import { Item, ItemProps } from '../../components/Item/Item';

type Props = {
    items: ItemProps[]
}

export const BrowseLayout = (props: Props) => {
    const { items } = props;
    return (
        <div className="main-container">
            <div>filters... TODO</div>
            <div className={ styles['items-container'] }>
                { items.map(item =>
                    <Item
                        name={ item.name }
                        brand={ item.brand }
                    />
                ) }
            </div>
            <div>pagination... TODO</div>
        </div>
    )
}
