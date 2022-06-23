import React from 'react';
import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../customFetch';


const ItemDetailContainer = () => {
    const [ product, setProducto] =useState({});
    const {id} =useParams()

    useEffect(() =>{
        getProductById(parseInt(id))
            .then((response) =>{setProducto(response);})
    },[id]);


    
    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer 
