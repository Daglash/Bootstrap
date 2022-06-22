
import React from "react";
import {Routes, Route} from "react-router-dom"
import Slider from "../Componentes/Slider";
import Categorias from "../Componentes/Categorias";
import Productos from "../Componentes/Productos";
import ItemDetailContainer from "./ItemDetailContainer";
// import { Slider } from "@material-ui/core";

const Home = () => {
    return (
        <div>
        <Routes>
            <Route path="/" element={<Slider/>}/>
        </Routes>  
        <Routes>
            <Route path="/" element={<Categorias/>}/>
        </Routes>
        <Routes>
            <Route path="/" element={<Productos/>}/>
        </Routes>
        <Routes>
            <Route path="/Categorias/:categorias" element={<Productos/>}/>
        </Routes>
        <Routes>
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        
        </div>
    )
}


export default Home