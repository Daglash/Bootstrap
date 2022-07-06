import { useEffect, useState } from "react"
// import { categorias } from "../data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
// import { customFetch, getProductByCategorias } from "../customFetch"
import {collectionProd} from "../firebaseConfig"
import { getDocs, query,where } from "firebase/firestore"



const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categorias } = useParams()


  useEffect(() => {
    //const collectionProd = collection(db, 'products')
    //const ref = collectionProd;

    const ref = categorias
        ? query(collectionProd, where('categorias', '==', categorias))
        : collectionProd;

    getDocs(ref).then((response) => {
        const items = response.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        setItems(items);
    });
}, [categorias]);













//   useEffect(() => {

//   const collectionProductos =collection(db,"productos venta")
//   const consulta =getDocs(collectionProductos)
//   // son las dos lineas sintetizadas getDoc(collection(db,"productos venta"))

//   consulta
//   .then((resultado)=> {

//     const productos_mapeados= resultado.docs.map(referencia =>{
//       // console.log(referencia.id)
//       // console.log(referencia.data()) fire no agrega al id en la data es necesario crear una variable 
//       const aux = referencia.data()
//       aux.id = referencia.id

//       return aux
//     })

//     setItems(productos_mapeados)

//   })
//   .catch((error)=>{console.log(error)
//   })
  
// },[categorias])






  // useEffect(() => {

  //   if(categorias){
  //     getProductByCategorias(categorias)
  //     .then(res => setItems(res))
  
  //   }else{ customFetch()
  //     .then(res => setItems(res))
  //   }
  // }, [categorias])

   


  return (
    <>
      <ItemList products={items} />
    </>
  )

  }
export default ItemListContainer