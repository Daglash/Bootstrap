
import Home from "./paginas/Home";
import Navbar from "./Componentes/Navbar";
import {BrowserRouter} from "react-router-dom";
import Anuncio from "./Componentes/Anuncio";
import Footer from "./Componentes/Footer";
import { CartProvider } from "./Componentes/CartContext"


const App = () => {
    return (
        <BrowserRouter>
            <Anuncio/>
            <Navbar/>
            <CartProvider>
                <Home/>
            </CartProvider>
            <Footer/>
        </BrowserRouter>
);
    
}

export default  App ;