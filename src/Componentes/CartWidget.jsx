import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";
// import { useCartContext } from "./CartContextfinal";


// const{iconCart,cartList} = useCartContext()

const CartWidget = () => {

    
    return(
        <Link to="/Carrito"><Badge  color="primary">
                        <ShoppingCartOutlined/>
        </Badge></Link>
    )
}

// {cartList.length === 0 ? 0 :iconCart()}

export default CartWidget



