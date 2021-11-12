import classnames from 'classnames';
import { useEffect } from 'react';
import ActionButton, { ButtonSize, ButtonType } from '../../components/ActionButton/ActionButton';
import Item, { ItemProps } from '../../components/Item/Item';
import ItemDetail from './ItemDetail';
import styles from './styles.module.css';
import Box from '../../components/Box/Box';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Navigation from '../../components/Navigation/Navigation';
import ItemBar from '../../components/Item/ItemBar';
import ItemImg from '../../components/Item/ItemImg';
import SlideShow from './SlideShow';
import { Slide } from 'react-slideshow-image';
import { itemImagesUrl } from '../../_assets/paths';
import Label from '../../components/Label/Label';

type Props = {
    item: ItemProps;
}

const ViewItemLayout = (props: Props) => {
    const { item } = props;

    const classProps = classnames(
        'fx-column',
        styles['main-container']
    );

    return (
        <>
        <Navigation/>
        <Box>
            <SlideShow images={ item.images } />
            <Label
                name={ item.name }
                views={ item.views }
                likes={ item.likes }
            />
            <InfoBlock title={ 'description' }>
            </InfoBlock>
            <div style={{ height: '10em' }}>
                { item.description }
            </div>
            <InfoBlock title={ "owner" }>
                TODO
            </InfoBlock>
            <InfoBlock title={ "category" }>
                <span>{ item.category.category }</span>
            </InfoBlock>
            <InfoBlock title={ "brand" }>
                <span>{ item.brand }</span>
            </InfoBlock>
            <InfoBlock title={ "size" }>
                <span>{ item.size.size }</span>
            </InfoBlock>
            <InfoBlock title={ "condition" }>
                <span>{ item.condition.condition }</span>
            </InfoBlock>
        </Box>
        </>
    )
}

ViewItemLayout.defaultProps = {
    item: null,
    className: ''
}

export default ViewItemLayout;