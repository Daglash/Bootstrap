
import Home from "./paginas/Home";
import Navbar from "./Componentes/Navbar";
import {BrowserRouter} from "react-router-dom";
import Anuncio from "./Componentes/Anuncio";


const App = () => {
    return (
        <BrowserRouter>
            <Anuncio/>
            <Navbar/>
            <Home/>
        </BrowserRouter>
);
    
}

export default  App ;