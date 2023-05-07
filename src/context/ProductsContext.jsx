import React from "react";
// importamos un hook de react nativo que se llama useContext para poder crear el contexto,
import { useContext, useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";


// crear el contexto
const ProductsContext = React.createContext([]);

// creo una funcion para exportar el contexto
export const useProductsContext = () => useContext(ProductsContext)

// creamos un componente proveedor y dentro iran todas las funciones y datos que los otros componentes,
// necesiten.

// children significa que este provider funcionara solamente en los componentes HIJOS.
const ProductsProvider = ( { children } ) => {
    // aca adentro van a ir todas las funciones y los estados para enviar a otros componentes.

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then((response) => setData(response.data))
    },[])








    return(
        // todo lo que quiero enviar lo ppongo dentro del value
        // aca adentro de este value va todo lo que queremos enviar hacia los componentes hijos 
    <ProductsContext.Provider value={{data}}>
        { children }
    </ProductsContext.Provider>
    )

}

export default ProductsProvider;