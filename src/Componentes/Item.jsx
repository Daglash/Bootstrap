import React from 'react';
import {Link} from "react-router-dom"
import styled from "styled-components";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";


const Container = styled.div`
    flex: 1;
    margin: 20px;
    flex-wrap:wrap;
    min-width: 300px;
    height: 600px;
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

const Item = ({item}) => {
  
  return(
    <Container>
        <Image src ={item.img}/>
        <Wrapper>
            <Texto Nombre={item.Nombre}>{item.Nombre}</Texto>
            <Link to={`../ItemDetail/${item.id}`}><SearchOutlined /></Link>
            <Link to={`../ItemDetail/${item.id}`}><ShoppingCartOutlined/></Link>
        </Wrapper>
    </Container>
)
}
export default Item