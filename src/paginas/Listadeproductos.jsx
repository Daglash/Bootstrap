import styled from "styled-components"
import Anuncio from "../Componentes/Anuncio"
import Navbar from "../Componentes/Navbar"


const Container = styled.div`


`

const Listadeproductos = () => {
    return(
        <Container>
            <Navbar/>
            <Anuncio/>
            <div>pagina de compra</div>
        </Container>
        
    )
}

export default Listadeproductos