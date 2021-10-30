import { useEffect, useState } from "react"
import { ItemProps } from "../../components/Item/Item"
import http from "../../http-common"
import ItemViewLayout from "../../layouts/ItemViewLayout/ItemViewLayout"

const ItemView = () => {
    const [item, setItem] = useState<ItemProps>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        http.get(`items/ca6abcfc-48df-4713-ab57-fae5cb9e5a64`)
        .then((res: any) =>
            setItem(res.data)
        )
        .then(() => {
            setIsLoaded(true);
            console.log(item)
        })
        .catch(error => {
            setError(error);
        })
    }, [])
    
    const check = isLoaded;

    return (
        <>
            {check &&
            <ItemViewLayout item={ item } />}
        </>

    )
}

export default ItemView;