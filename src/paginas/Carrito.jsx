import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Text = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;


const Carrito = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tu Carrito</Title>
        <Top>
        <Link to="/"><TopButton>CONTINUAR COMPRANDO</TopButton> </Link>
            <Text>Shopping Bag(2)</Text>
            <Text>Lista de Deseadod (0)</Text>
          <TopButton type="filled">COMPRAR</TopButton>
        </Top>
      </Wrapper>
    </Container>
  );
};




export default Carrito