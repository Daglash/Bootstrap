import { createContext } from "react";
import { useState } from "react";



export const context = createContext(); 

export const Provider=context.Provider; 




export const MiProvider = ({children}) => {
  const [carrito,setCarrito]=useState([])
  const [cantidad_total,setCantidadTotal]=useState(0)
  const [precio_total,setPrecioTotal]=useState(0)


  function comprobarDuplicado(producto,array){
    const add=false
    for(let product in array){
      if(product.id==producto.id){
        product.cantidad=product.cantidad+producto.cantidad
      }else{
        add=true
      }
    }
    add? array.push(producto):console.log("solo se le suma cantidad")
    return array;
  }
  const addProducto=(producto,cantidad)=>{
    console.log("Su compra es "+{carrito})
    const carr=carrito
    const carro=[]
    carro=carrito
    carro=comprobarDuplicado(producto,carro,cantidad);
    updateContador();
    setCarrito(carro);
  }
  const deleteProducto=(producto)=>(id) => {
    carrito.splice(
        carrito.findIndex((i) => i.id === id), 1
    )
    setCarrito([...carrito])
    
}

  const actualizeProduct=(producto)=>{}
      setCarrito([])
  
  const updateContador=()=>{
      setCantidadTotal(carrito.length)
      
  }


  
  const valorDelContexto={
    carrito:carrito,
    cantidad_total:cantidad_total,
    precio_total:precio_total,
    updateConta:updateContador,
    addProducto:addProducto,
  }
  return (
   <Provider value={valorDelContexto}>
    {children}
   </Provider>
  )
}
