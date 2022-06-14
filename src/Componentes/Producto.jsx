import React from 'react';
import styled from "styled-components";
import ItemCount from './ItemCount';

const Container = styled.div`
    flex: 1;
    margin: 20px;
    flex-wrap:wrap;
    min-width: 300px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    overflow:hidden;
`

const Image = styled.img`
    height: 80%;

    `

const Wrapper =styled.div`
    flex:1;
    width: fit-content;
    background-color:lightgreen;
    margin: auto;
    padding: 1rem;
    text-align: center;
    font-size: 30px;
    flex-wrap: wrap;

`
const Texto = styled.h6`

`

const Producto = ({item}) => {

    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }


    return(
        <Container>
            <Image src ={item.img}/>
            <Wrapper>
                <Texto Nombre={item.Nombre}>{item.Nombre}</Texto>
                <ItemCount initial={0} stock={item.stock} onAdd={onAdd}/>
            </Wrapper>
        </Container>
    )
}

export default Producto