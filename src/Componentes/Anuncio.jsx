import styled from "styled-components"

const Container = styled.div`

    height:30px;
    background-color:lightgreen;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;

`

const Anuncio = () => {
    return(
        <Container>
            Aprovecha las ultimas ofertas de mayo con descuentos de hasta el 30%
        </Container>
    )
}

export default Anuncio