import Anuncio from "../Componentes/Anuncio";
import React from "react";
import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
import Categorias from "../Componentes/Categorias";
import Productos from "../Componentes/Productos";
// import { Slider } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <Anuncio/>
            <Navbar/>
            <Slider/>
            <Categorias/>
            <Productos/>
        </div>
    )
}


export default Home