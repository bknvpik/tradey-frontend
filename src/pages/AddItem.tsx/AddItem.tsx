import axios from 'axios';
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { Form } from '../../components/Form/Form'
import Input, { InputType } from '../../components/Input/Input';
import http from '../../http-common';
import { FormsPagesLayout } from '../../layouts/FormsPagesLayout/FormsPagesLayout';

export const AddItem = () => {
    const [itemDetails, setItemDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.all([
            http.get('items/conditions'),
            http.get('items/categories'),
            http.get('items/sizes')
        ]).then(axios.spread((...responses) => {
            setItemDetails({
                categories: responses[0].data,
                conditions: responses[1].data,
                sizes: responses[2].data
            })
        }))
        .then(() => {
            setIsLoaded(true);
        })
        .catch(error => {
            setError(error);
        })
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        http.post('items', item)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div></div>
    )
}
