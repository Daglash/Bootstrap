import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return(
        <Link to="/Carrito"><Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
        </Badge></Link>
    )
}

export default CartWidget



