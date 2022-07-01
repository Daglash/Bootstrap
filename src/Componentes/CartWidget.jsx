import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContextfinal";




const CartWidget = () => {

    const{iconCart,cartList} = useCartContext()
    
    return(
        <Link to="/Carrito"><Badge  color="primary">
                        <ShoppingCartOutlined/>{cartList.length === 0 ? 0 :iconCart()}
        </Badge></Link>
    )
}



export default CartWidget



