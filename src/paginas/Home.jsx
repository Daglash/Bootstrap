import Anuncio from "../Componentes/Anuncio";
import React from "react";
import Navbar from "../Componentes/Navbar";
import Slider from "../Componentes/Slider";
// import { Slider } from "@material-ui/core";

const Home = () => {
    return (
        <div>
            <Anuncio/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home