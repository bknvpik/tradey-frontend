import classnames from 'classnames';
import { useEffect } from 'react';
import ActionButton, { ButtonSize, ButtonType } from '../../components/ActionButton/ActionButton';
import { ItemProps } from '../../components/Item/Item';
import ItemBar from './ItemBar';
import ItemDetail from './ItemDetail';
import styles from './styles.module.css';
import Box from '../../components/Box/Box';

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
                <Box className="fx-center-all">
                    <h3>name</h3>
                </Box>
                <Box className="fx-center-all">
                    <p>likes</p>
                </Box>
            </ItemBar>
            <ItemBar>
                <Box className="fx-center-all">
                    <ActionButton
                        size={ ButtonSize.SMALL }
                        type={ "button" }
                    > trade
                    </ActionButton>
                </Box>
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