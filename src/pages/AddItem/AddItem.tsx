import axios from 'axios';
import React, { ChangeEvent, ChangeEventHandler, SyntheticEvent, useEffect, useState } from 'react'
import ActionButton, { ButtonType } from '../../components/ActionButton/ActionButton';
import { AddImages } from '../../components/AddImages/AddImages';
import Box from '../../components/Box/Box';
import { Form } from '../../components/Form/Form'
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import Input, { InputTheme, InputType } from '../../components/Input/Input';
import Item from '../../components/Item/Item';
import http from '../../http-common';
import AddItemLayout from '../../layouts/AddItemLayout/AddItemLayout';
import { FormsPagesLayout } from '../../layouts/FormsPagesLayout/FormsPagesLayout';

interface Test {
    name: string;
    description: string;
    category: number;
    condition: number;
    size: number;
    brand: string;
    user: string;
}

const AddItem = () => {
    const [resources, setResources] = useState({
        categories: [],
        conditions: [],
        sizes: [],
        user: { username: '', sub: '' }
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState<any>([]);
    const [item, setItem] = useState<Test>({
        name: '',
        description: '',
        category: 1,
        condition: 1,
        size: 1,
        brand: '',
        user: ''
    });

    useEffect(() => {
        axios.all([
            http.get('items/conditions'),
            http.get('items/categories'),
            http.get('items/sizes'),
            http.get('check-auth', { withCredentials: true })
        ]).then(axios.spread((...responses: any) => {
            setResources({
                conditions: responses[0].data,
                categories: responses[1].data,
                sizes: responses[2].data,
                user: responses[3].data
            })
        }))
        .then(() => {
            setIsLoaded(true);
            if(isLoaded)
                console.log(resources);
        })
        .catch(error => {
            setError(error);
        })
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setItem({
            ...item,
            [e.target.name]: value
        });
    }

    const selectImages = (e: any) => {
        setFiles([
            ...files, ...e.target.files
        ])
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        let formData = new FormData();
            formData.append('name', item.name);
            formData.append('description', item.description);
            formData.append('category', item.category.toString());
            formData.append('brand', item.brand);
            formData.append('size', item.size.toString());
            formData.append('condition', item.condition.toString());
            formData.append('user', resources.user.sub);
            for(let i = 0; i < files.length; i++)
                formData.append('images', files[i], files[i].name);
        http.post('items', formData)
        .then(res => {
            console.log(res);
        })
        clearData();
    }

    const clearData = () => {
        setItem({
            name: '',
            description: '',
            category: 1,
            condition: 1,
            size: 1,
            brand: '',
            user: ''
        });
    }

    return (
        <AddItemLayout>
            <Box>
                <Form onSubmit={ handleSubmit }>
                    <input type="file" multiple name="images" accept="image/*" onChange={ selectImages }/>
                    <InfoBlock title={ 'name' }>
                        <Input
                            type={ InputType.TEXT }
                            name="name"
                            placeholder={ 'name' }
                            theme={ InputTheme.BLANK }
                            onChange={ handleChange }
                            value={ item.name }
                        />
                    </InfoBlock>
                    <textarea
                        name="description"
                        onChange={ handleChange }
                        value={ item.description}
                    />
                    <InfoBlock title={ 'brand' }>
                        <Input
                            type={ InputType.TEXT }
                            name="brand"
                            placeholder={ 'brand' }
                            theme={ InputTheme.BLANK }
                            onChange={ handleChange }
                            value={ item.brand }
                        />
                    </InfoBlock>
                    <InfoBlock title={ 'category' }>
                        <select name="category" id="category" onChange={ handleChange }>
                            { resources.categories.map((data: any) => 
                                <option key={ data.id } value={ data.id }>{ data.category }</option>
                            )}
                        </select>
                    </InfoBlock>
                    <InfoBlock title={ 'condition' }>
                        <select name="condition" id="condition" onChange={ handleChange }>
                            { resources.conditions.map((data: any) => 
                                <option key={ data.id } value={ data.id }>{ data.condition }</option>
                            )}
                        </select>
                    </InfoBlock>
                    <InfoBlock title={ 'size' }>
                        <select name="size" id="size" onChange={ handleChange }>
                            { resources.sizes.map((data: any) => 
                                <option key={ data.id } value={ data.id }>{ data.size }</option>
                            )}
                        </select>
                    </InfoBlock>
                    <ActionButton type={ "submit" } className="w-100" text={'add' } />
                </Form>
            </Box>
        </AddItemLayout>
    )
}

export default AddItem;