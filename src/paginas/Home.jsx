
import React from "react";
import {Routes, Route} from "react-router-dom"
import Slider from "../Componentes/Slider";
import Categorias from "../Componentes/Categorias";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "../Componentes/ItemListContainer";
import BarCategorias from "../Componentes/BarCategorias";
import Carrito from "./Carrito";
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
            <Route path="/" element={<ItemListContainer/>}/>
        </Routes>
        <Routes>
            <Route path="/Categorias/:categorias" element={<BarCategorias/>}/>
        </Routes> 
        <Routes>
            <Route path="/Categorias/:categorias" element={<ItemListContainer/>}/>
        </Routes>
        <Routes>
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Routes>
            <Route path="/Carrito" element={<Carrito/>}/>
        </Routes>
        



        </div>
    )
}


export default Home