import React from 'react';
import { useEffect , useState } from 'react';
import {TraerProducto} from '../data';
import ItemDetail from './ItemDetail';
// import { useParams } from 'react-router-dom';

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

// const ItemDetailContainer = () => {
//     const [ product, setProducto] =useState({});
//     const {id} = useParams ()

//     useEffect(() =>{
//         TraerProducto(parseInt(id))
//             .then((res) =>{
//                 setProducto(res)})
//     },[]);


    
//     return(
//         <ItemDetail {...product}/>
//     )
// }

// export default ItemDetailContainer 
