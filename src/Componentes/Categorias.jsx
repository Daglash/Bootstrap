import styled from "styled-components";
import React from 'react';
import {categorias} from "../data";
import CategoriasItems from "./CategoriasItems";

const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content: space-between;

`

const Categorias = () => {
    return(
        <Container>
            {categorias.map(item =>(
                <CategoriasItems item={item} key={item.id}/>


            ) )}


        </Container>
    )
}

export default Categorias