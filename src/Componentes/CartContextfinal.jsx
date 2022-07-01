import { createContext,useState,useContext,useEffect } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider =({children}) => {

    const [cartList,setCartList] = useState(() =>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts');
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        }catch(error){
                return [];
            }
    });

    useEffect(() =>{
     localStorage.setItem('cartProducts',JSON.stringify(cartList));
        console.log(cartList)
    }, [cartList]);

    const addToCart = (product) => {
        const inCart = cartList.find(
                 (productInCart) => productInCart.id === product.id
             );

        if(inCart){
            setCartList(
             cartList.map((productInCart) => {
                if (productInCart.id === product.id){
                return {...inCart , amount: inCart.amount + 1};
                }else return productInCart;
             })
                 );
        } else {
            setCartList([...cartList,{...product,amount : 1}]);
            }
    };

    const clearList = () => setCartList([]);

    const totalPrice = () => {
        let total =0;
        
        cartList.forEach((newProduct) =>{
        total +=
            parseInt(newProduct.product.precio) * parseInt(newProduct.cantidad);
    });

    return parseInt(total);
    };

    const removeProduct = (id) => {
        setCartList(cartList.filter((newProduct) => newProduct.product.id !== id ));
    };

    const iconCart = () => cartList.reduce((acum,valor) => acum + valor.cantidad,0);

    return (
        <CartContext.Provider value = {{
            cartList,
            setCartList,
            addToCart,
            clearList,
            totalPrice,
            removeProduct,
            iconCart,
        }}
        >
            {children}
        </CartContext.Provider>
    );
};


