import classnames from 'classnames';
import { ReactNode } from 'react';
import Box from '../../components/Box/Box';
import styles from './styles.module.css';

export type ItemDetailProps = {
    detail?: string,
    detailName?: string
}

const ItemDetail = (props: ItemDetailProps) => {
    const { detail, detailName } = props;

    const classProps = classnames(
        'fx-row',
        "shadow-in",
        styles['item-detail']
    )

    return (
        <div className={ classProps }>
            <Box
                className="font-w-600"
            >
                { detailName }
            </Box>
            <Box
                className="fx-c-end"
            >
                { detail }
            </Box>
        </div>
    )
}

export default ItemDetail;