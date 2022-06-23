import React from 'react';
import Item from "./Item"
import {productosventa} from "../data";
import styled from "styled-components";

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap: wrap;
`

const ItemList = () => {
  return (
    <Container>
      {productosventa.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default ItemList