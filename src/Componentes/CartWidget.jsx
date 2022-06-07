import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react';

const CartWidget = () => {
    return(
        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
        </Badge>
    )
}

export default CartWidget



