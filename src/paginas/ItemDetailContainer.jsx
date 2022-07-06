import React from 'react';
import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
// import { getProductById } from '../customFetch';
import { collectionProd} from "../firebaseConfig"
import { getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {


    const [product, setProducto] = useState({})
    const { id } = useParams()
  
    useEffect(() => {
        const ref = doc(collectionProd, id);
        getDoc(ref).then((response) => {
            setProducto({
                id: response.id,
                ...response.data(),
            });
        });
    }, [id]);
  
  
    return (
      <>
        <ItemDetail product={product} />
      </>
    )
  }






// const ItemDetailContainer = () => {
//     const [ product, setProducto] =useState({});
//     const {id} =useParams()
   
    
//     useEffect(() =>{
//         getProductById(parseInt(id))
//             .then((response) =>{setProducto(response);})
//     },[id]);


    
//     return(
//         <ItemDetail product={product}/>
//     )
// }

export default ItemDetailContainer 
