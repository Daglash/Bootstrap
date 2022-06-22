import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;

`
const Image=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const Info=styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
    color:#${(props) => props.bg};
    margin-bottom: 20px;
    font-size:40px;
    
`
const Button=styled.button`
    border:none;
    padding: 10px;
    background-color:white;
    color:gray;
    cursor: pointer;
    font-weight:600;

`


const CategoriasItems = ({item}) => {
    return(
        <div>
            <Container>
                <Link to={`/Categorias/${item.title}`}>
                <Image src={item.img}/>
                <Info>
                    <Title bg={item.bg}>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
                </Link>
            </Container>


        </div>
    )
}

export default CategoriasItems