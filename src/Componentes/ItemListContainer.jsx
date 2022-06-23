import { useEffect, useState } from "react"
// import { categorias } from "../data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProductByCategorias } from "../customFetch"



const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categorias } = useParams()


  useEffect(() => {
    getProductByCategorias(parseInt(categorias))
      .then(res => setItems(res.filter(product => product.categorias === categorias)))
  }, [categorias])



  return (
    <>
      <ItemList {...items} />
    </>
  )

  }
export default ItemListContainer