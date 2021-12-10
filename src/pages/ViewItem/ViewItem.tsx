import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemProps } from "../../components/Item/Item";
import http from "../../http-common";
import ViewItemLayout from "../../layouts/ViewItemLayout/ViewItemLayout";
import { AuthContext } from "../../routing/AuthContext";
import { checkOwner } from "../../services/items.service";

const ViewItem = () => {
    const [item, setItem] = useState<any>([]);
    const [popularity, setPopularity] = useState({
        views: 0,
        likes: 0
    })
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    let { id }: any = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        checkOwner(id, user.sub)
        .then((res) => {
            if(res.data === false)
                http.put(`popularity/items/${id}/views`, {withCredentials: true })
        })
            
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
            <ViewItemLayout 
                item={ item }
                popularity={ popularity }
            />}
        </>

    )
}

export default ViewItem;
