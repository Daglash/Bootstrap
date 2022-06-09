import React from 'react';
import ItemCount from './ItemCount';



export const ItemListContainer = () => {
    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    
    return(
        <div>

        <h1> No me quedo muy claro el punto :P , queria poner todo el catalogo en una pagina diferente pero lo dejo aca por el desafio</h1>

        <p> Tambien queria preguntar como vincular links con las imagenes para empezar a usar otras paginas</p>   

        <ItemCount initial={0} stock={5} onAdd={onAdd}/>

        </div>
    )
}

export default ItemListContainer