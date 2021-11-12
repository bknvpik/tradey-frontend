import classNames from 'classnames'
import { useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Item, { ItemProps } from '../../components/Item/Item'
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

export const HomepageBrowseLayout = (props: any) => {
    const { items, headerTxt } = props;
    useEffect(() => {
        console.log(items)
    }, [])
    return (
        <div className={classNames(
            'p-h-medium'
        )}>
            <SearchBar />
            <SectionTitle text={ headerTxt }/>
            <ItemsContainer>
                { items.map((item: ItemProps) => 
                    <Item 
                        key={ item.id }
                        id={ item.id }
                        name={ item.name }
                        views={ item.views }
                        likes={ item.likes }
                        images={ item.images }
                    />
                )}
            </ItemsContainer>
        </div>
    )
}
