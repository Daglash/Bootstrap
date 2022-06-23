import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`

const Center = styled.div`
    flex:0,5;
    display:flex;
    text-align:center;
    
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
`

function BarCategorias(){
    return(

<Container>
        <Wrapper>
            <Left>
                <Link to={`../Categorias/KEIKOGI`}>KEIKOGI</Link>
            </Left>
            <Center>
                <Link to={`../Categorias/WAFUKU`}>WAFUKU</Link>
            </Center>
            <Right>
                <Link to={`../Categorias/Yōhin`}>YOHIN</Link>
            </Right>
        </Wrapper>
        
    </Container>

)

}

export default BarCategorias


