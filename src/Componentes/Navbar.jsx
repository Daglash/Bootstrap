
import { Search} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import CartWidget from "../Componentes/CartWidget";
import { Link } from "react-router-dom";
import {mobile} from "../responsive";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
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
`
const Language =styled.span`
    font-size:14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
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
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const Logo =styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "24px" })}
`

const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`

const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
    border:none;
    ${mobile({ width: "50px" })}

`

const Navbar = () => {
return(
    <Container>
        <Wrapper>
            <Left>
                <Language>ES</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"green", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Link to="/" style={{color:"black",textDecoration: 'none'}}>
                <Logo>Tomoe Gozen 巴 御前</Logo>
                </Link>
            </Center>
            <Right>
                <Link to="/Registro" style={{color:"black",textDecoration: 'none'}}>
                    <MenuItem>REGISTER</MenuItem> 
                </Link>
                <Link to="/Login" style={{color:"black",textDecoration: 'none'}}>
                <MenuItem>LOGIN</MenuItem>
                </Link>
                <MenuItem>
                    <CartWidget/>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>

)

}

export default Navbar



