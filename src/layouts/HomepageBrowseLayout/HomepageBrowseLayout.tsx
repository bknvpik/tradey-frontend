import ContentContainer from '../../components/ContentContainer/ContentContainer';
import Footer from '../../components/Footer/Footer';
import Item, { ItemProps } from '../../components/Item/Item';
import ItemsContainer from '../../components/ItemsContainer/ItemsContainer';
import MainContainer, { MainContainerHeight } from '../../components/MainContainer/MainContainer';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

export const HomepageBrowseLayout = (props: any) => {
    const { items, headerTxt } = props;
    
    return (
        <>
        <Navigation />
        <MainContainer height={ MainContainerHeight.MIN }>
            <ContentContainer column={ true }>
                {/* <SearchBar /> */}
                <SectionTitle text={ headerTxt } />
                <ItemsContainer>
                    { items.map((item: ItemProps) => 
                        <Item 
                            key={ item.id }
                            id={ item.id }
                            name={ item.name }
                            views={ item.views }
                            images={ item.images }
                        />
                    )}
                </ItemsContainer>
            </ContentContainer>
        </MainContainer>
        <Footer />
        </>
    )
}
