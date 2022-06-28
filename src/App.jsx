
import Home from "./paginas/Home";
import Navbar from "./Componentes/Navbar";
import {BrowserRouter} from "react-router-dom";
import Anuncio from "./Componentes/Anuncio";
import Footer from "./Componentes/Footer";
import { Provider } from "./Componentes/MiContexto"


const App = () => {
    return (
        <BrowserRouter>
            <Anuncio/>
            <Navbar/>
            <Provider>
                <Home/>
            </Provider>
            <Footer/>
        </BrowserRouter>
);
    
}

export default  App ;