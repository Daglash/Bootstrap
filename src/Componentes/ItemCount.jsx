import { Container } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useCartContext } from "../Componentes/CartContextfinal";




const Amount = styled.span`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  font-size: 40px;
  padding-bottom:10px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding:20px 20px;
  justify-content:space-between;
  margin:10px 20px;
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
  margin-left: 10px;
  margin-right:10px;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const ItemCount = ({stock, initial, onAdd, product }) => {
    const [count, setCount]  = useState(initial);
    const {addToCart} = useCartContext();
    const [addedToCart, setAddedToCart] =useState(false);
   
   
    function incrementar(){  
       if(count < stock){
         setCount( count + 1 )
       }    
     };
   
    function decrementar(){ 
        if(count <= 1) { return 1 }
        setCount( count - 1 )
     };
     
   const agregar = (e) => {  
    onAdd(count)
    setAddedToCart(true) }
    ;
   
   function handlerSubmit(){
     addToCart({ cantidad: count, data: product })
     onAdd(count)
   };
   
   


    return(
        <Container>
        <AmountContainer>
            <Button disabled={count<=0} onClick={decrementar}>-</Button>
            <Amount>{count}</Amount>
            <Button disabled= {count >= stock}  onClick={incrementar}>+</Button>
        <AmountContainer>
            {!addedToCart
            ?
            <Button disabled = {count<=0} onClick={agregar}>Agregar al carrito</Button>
            :
            <>
                <Link to="/Carrito">
                    <Button onClick={handlerSubmit}>Ir al carrito</Button>
                </Link>
                <Link to="/">
                    <Button>Seguir comprando</Button> 
                </Link>
            </>
            }   
        </AmountContainer>
        </AmountContainer>
    </Container>
    )
}

// {()=> HandleSubmit(count)}



export default ItemCount