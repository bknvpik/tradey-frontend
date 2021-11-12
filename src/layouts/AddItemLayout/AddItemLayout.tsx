import Item from '../../components/Item/Item';
import Navigation from '../../components/Navigation/Navigation';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './styles.module.css';

const AddItemLayout = (props: any) => {
    const { children } = props;
    return (
        <div className={ styles['a-w-item-container'] }>
            <Navigation />
            <div className={ styles['item-detail-container'] }>
                { children }
            </div>
        </div>
    )
}

export default AddItemLayout;