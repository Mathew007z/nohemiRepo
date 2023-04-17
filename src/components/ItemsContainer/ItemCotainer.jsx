import React from 'react'
// hooks nativos de react/ Hooks = Herramientas que ofrece react por defecto
import {useState, useEffect} from 'react';
// el componente HIJO de ItemContainer.
import ItemList from '../ItemList/ItemList';

// uSeState nos almacena un dato o datos, en una variable de estado.
// useEffect lo que hace es unir la ejecucion que este dentro de esta HERRAMIENTA, al momento
// que el componente se crea en DOM.



// EN ESTE COMPONENTE SE HARIA EL FETCH, PARA HACER EL ENLACE ENTRE EL BACK Y EL FRONT.
const ItemCotainer = () => {
    // dentro del state vamos a indicar el tipo de dato que va a recibir
    const [data, setData] = useState([]);

    
    useEffect(() => {
        // Lo que esta aca adentro se va a ejercutar cuando se lo indiquemos, A LA PAR que el componente crea.
        // asyncronico es que no se ejecuta en el mismo momento que la app.
        // volver sincronico
        // fetch te devuelve una promesa y la promesa tiene que ser resuelta para que se ejecute.
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        // a setData le digo que TRADUZCA A REACT EL JSON PARA QUE LO PUEDA ENTENDER.
        .then(res => setData(res.data))

        //EL ARRAY VACIO QUE VA AL FINAL DE USEEFFECT ES UNA DEPENDENCIA QUE NECESITA REACT
        // PARA ENTENDER QUE LA LLAMADA A LA API SE EJECUTE SOLO UNA VEZ. 
    },[])
 


     //props = propiedades
  return (
    <div>
        {/*le estoy enviando los datos de la API al hijo */}
        <ItemList data={data}/>
    </div>
  )
}


export default ItemCotainer;