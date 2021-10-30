import classnames from 'classnames';
import { ReactNode } from 'react';
import FullBox from '../../components/FullBox/FullBox';
import styles from './styles.module.css';

export type ItemDetailProps = {
    detail: string,
    detailName: string
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
            <FullBox
                className="font-w-600"
            >
                { detailName }
            </FullBox>
            <FullBox
                className="fx-c-end"
            >
                { detail }
            </FullBox>
        </div>
    )
}

export default ItemDetail;