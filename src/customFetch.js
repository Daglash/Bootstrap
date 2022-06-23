import { productosventa } from "./data";

export const customFetch = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productosventa);
        },500)
    })
}


export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productosventa.find(prod => prod.id ===id));
        },500)
    })
}

export const getProductByCategorias = (categorias) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productosventa.filter(prod => prod.categorias === categorias));
        },500)
    })
}

