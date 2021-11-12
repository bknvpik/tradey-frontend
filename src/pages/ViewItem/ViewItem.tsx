import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemProps } from "../../components/Item/Item";
import http from "../../http-common";
import ViewItemLayout from "../../layouts/ViewItemLayout/ViewItemLayout";

const ViewItem = () => {
    const [item, setItem] = useState<any>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    let { id }: any = useParams();

    useEffect(() => {
        http.put(`items/${id}/views`, {withCredentials: true });
        http.get(`items/${id}`,{ withCredentials: true })
        .then((res: any) =>{
            setItem(res.data)
        })
        .then(() => {
            setIsLoaded(true);
            console.log(item)
        })
        .catch(error => {
            setError(error);
        })
    }, [])

    return (
        <>
            {isLoaded &&
            <ViewItemLayout item={ item } />}
        </>

    )
}

export default ViewItem;