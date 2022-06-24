import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";



const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  flex-wrap: wrap;

  &:hover{
      background-color: #f8f4f4;
  }
`;

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [addProducto, setAddProducto] = useState(initial);

    const decrease= () => {
        setCount( count-1);
    }

    const increase= () => {
        setCount( count+1);
    }

    const confirmarContador = (e) => {
        onAdd(count)
        setAddProducto(true)
      }

    return(
        <div>
            <button disabled={count<=0} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled= {count >= stock} onClick={increase}>+</button>
        <div>
            {!addProducto
            ?
            <button disabled = {count<=0} onClick={confirmarContador}>Agregar al carrito</button>
            :
            <>
                <Link to="/Carrito">
                    <Button>Ir al carrito</Button>
                </Link>
                <Link to="/">
                    <Button>Seguir comprando</Button> 
                </Link>
            </>
            }   
        </div>
        </div>
    )
}

export default ItemCount