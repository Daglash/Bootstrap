import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {mobile} from "../responsive";

const Container = styled.div`
  height: 60px;
  padding 30px;
  ${mobile({ padding: "65px" })}
`

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    font-weight:bold;
`

const Center = styled.div`
    flex:0,5;
    display:flex;
    text-align:center;
    font-weight:bold;
    
    
`
const Right = styled.div`
    font-weight:bold;
    flex:1;
    display: flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

function BarCategorias(){
    return(

<Container>
        <Wrapper>
            <Left>
                <Link to={`../Categorias/KEIKOGI`} style={{color:"black",textDecoration: 'none'}}>KEIKOGI</Link>
            </Left>
            <Center>
                <Link to={`../Categorias/WAFUKU`} style={{color:"black",textDecoration: 'none'}}>WAFUKU</Link>
            </Center>
            <Right>
                <Link to={`../Categorias/Yōhin`} style={{color:"black",textDecoration: 'none'}}>YOHIN</Link>
            </Right>
        </Wrapper>
        
    </Container>

)

}

export default BarCategorias


