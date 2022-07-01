import { Container } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useCartContext } from "../Componentes/CartContextfinal";

const ItemCount =({min , max ,data , onAdd})
    const [count , setCount] =useState (min)
    const {addToCart} = useCartContext()

    function add(){
        if (count < max) {
            setCount(count +1)
        }
    }

    function substraction(){
        if(count > min){
            setCount(count-1)
        }
    }

    function reset (){
        setCount(min)
    }

    function handleSubmit(){
        addToCart({
            quantity:count,
            product :data
        })
        onAdd(true)

    }