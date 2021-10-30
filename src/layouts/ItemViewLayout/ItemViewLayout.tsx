import classnames from 'classnames';
import { useEffect } from 'react';
import ActionButton, { ButtonSize, ButtonType } from '../../components/ActionButton/ActionButton';
import { ItemProps } from '../../components/Item/Item';
import ItemBar from './ItemBar';
import FullBox from '../../components/FullBox/FullBox';
import ItemDetail from './ItemDetail';
import styles from './styles.module.css';

type Props = {
    item: ItemProps;
}

const ItemViewLayout = (props: Props) => {
    const { item } = props;

    const classProps = classnames(
        'fx-column',
        styles['main-container']
    );

    return (
        <div className={ classProps }>
            <div>
                <img src="" />
            </div>
            <ItemBar className={ "shadow-in" }>
                <FullBox className="fx-center-all">
                    <h3>name</h3>
                </FullBox>
                <FullBox className="fx-center-all">
                    <p>likes</p>
                </FullBox>
            </ItemBar>
            <ItemBar>
                <FullBox className="fx-center-all">
                    <ActionButton
                        size={ ButtonSize.SMALL }
                        type={ "button" }
                    > trade
                    </ActionButton>
                </FullBox>
            </ItemBar>
            <ItemDetail
                detail={ item.name }
                detailName={ "test" }
            />
            <ItemDetail
                detail={ item.description }
                detailName={ "test" }
            />
        </div>
    )
}

ItemViewLayout.defaultProps = {
    item: null,
    className: ''
}

export default ItemViewLayout;