import React from 'react'
// hooks nativos de react/ Hooks = Herramientas que ofrece react por defecto
import {useState, useEffect} from 'react';
// el componente HIJO de ItemContainer.


// uSeState nos almacena un dato o datos, en una variable de estado.
// useEffect lo que hace es unir la ejecucion que este dentro de esta HERRAMIENTA, al momento
// que el componente se crea en DOM.

// importarme el contexto con la funcion que creamos.
import { useProductsContext } from '../../context/ProductsContext';
// EN ESTE COMPONENTE SE HARIA EL FETCH, PARA HACER EL ENLACE ENTRE EL BACK Y EL FRONT.






const ItemCotainer = () => {
 
//  aca voy a desestructurar QUE QUIERO obtener del contexto que tengo.
  const { data } = useProductsContext()
 
     //props = propiedades
  return (
    <div>
        {
          data.map((item,index) => (
            <div key={index}>
              <h1> {item.first_name}</h1>
            </div>
          ))
        }
    
    </div>
  )
}


export default ItemCotainer;