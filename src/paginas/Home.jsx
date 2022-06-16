import Anuncio from "../Componentes/Anuncio";
import React from "react";
import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
import Categorias from "../Componentes/Categorias";
import Productos from "../Componentes/Productos";
import ItemDetailContainer from "../paginas/ItemDetailContainer";
// import { Slider } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <Anuncio/>
            <Navbar/>
            <Slider/>
            <Categorias/>
            <Productos/>
            <ItemDetailContainer/>
        </div>
    )
}


export default Home