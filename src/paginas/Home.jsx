import Anuncio from "../Componentes/Anuncio";
import React from "react";
import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
import ItemListContainer from "../Componentes/ItemListContainer";
import ItemCount from "../Componentes/ItemCount";
// import { Slider } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <Anuncio/>
            <Navbar/>
            <Slider/>
            <ItemListContainer/>
        </div>
    )
}


export default Home