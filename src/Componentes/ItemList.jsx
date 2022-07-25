import React from 'react';
import Item from "./Item"
import styled from "styled-components";

const Container = styled.div`
padding:10px;
display:flex;
flex-wrap: wrap;
`

const ItemList = ({products}) => {
  return (
    <Container>
      {products.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default ItemList