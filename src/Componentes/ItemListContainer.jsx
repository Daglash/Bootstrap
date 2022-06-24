import { useEffect, useState } from "react"
// import { categorias } from "../data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { customFetch, getProductByCategorias } from "../customFetch"



const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categorias } = useParams()


  useEffect(() => {

    if(categorias){
      getProductByCategorias(categorias)
      .then(res => setItems(res))
  
    }else{ customFetch()
      .then(res => setItems(res))
    }
  }, [categorias])

   


  return (
    <>
      <ItemList products={items} />
    </>
  )

  }
export default ItemListContainer