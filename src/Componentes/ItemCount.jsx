import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";


export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const decrease= () => {
        setCount( count-1);
    }

    const increase= () => {
        setCount( count+1);
    }

    const confirmarContador = (e) => {
        onAdd(count)
      }

    return(
        <div>
            <button disabled={count<=0} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled= {count >= stock} onClick={increase}>+</button>
        <div>
            <Link to="/Carrito"><button disabled = {stock <=0} onClick={confirmarContador}>Agregar al carrito</button></Link>
        </div>
        </div>
    )
}

export default ItemCount