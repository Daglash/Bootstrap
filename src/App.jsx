
import Home from "./paginas/Home";
import Navbar from "./Componentes/Navbar";
import {BrowserRouter} from "react-router-dom";
import Anuncio from "./Componentes/Anuncio";
import Footer from "./Componentes/Footer";
import { CartContextProvider } from "./Componentes/CartContextfinal"


const App = () => {
    return (
    <CartContextProvider>
        <BrowserRouter>
            <Anuncio/>
            <Navbar/>
            <Home/>
            <Footer/>
        </BrowserRouter>
    </CartContextProvider>
);
    
}

export default  App ;