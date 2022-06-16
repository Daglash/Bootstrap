import React from 'react';
import { useEffect , useState } from 'react';
import {TraerProducto} from '../data';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [ product, setProducto] =useState({});

    useEffect(() =>{
        TraerProducto()
            .then((res) =>{
                setProducto(res);
            })
            .catch((error) =>{
                console.log(error);
            });

    },[]);


    
    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer 