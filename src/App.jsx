
import Home from "./paginas/Home";
import Navbar from "./Componentes/Navbar";
import {BrowserRouter} from "react-router-dom";
import Anuncio from "./Componentes/Anuncio";
import Footer from "./Componentes/Footer"

const App = () => {
    return (
        <BrowserRouter>
            <Anuncio/>
            <Navbar/>
            <Home/>
            <Footer/>
        </BrowserRouter>
);
    
}

export default  App ;