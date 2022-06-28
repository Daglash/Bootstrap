import { Container } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 200px;

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
        <Container>
        <div>
            <Button disabled={count<=0} onClick={decrease}>-</Button>
            <Amount>{count}</Amount>
            <Button disabled= {count >= stock} onClick={increase}>+</Button>
        <div>
            {!addProducto
            ?
            <Button disabled = {count<=0} onClick={confirmarContador}>Agregar al carrito</Button>
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
    </Container>
    )
}

export default ItemCount