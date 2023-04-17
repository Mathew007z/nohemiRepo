import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ data }) => {
//    en este componente vamos a mapear la DATA que nos envio el padre.
  return (
    <div>
        {
            data.map((data)=> (
                <Item data={data} key={data.id}/>
            ))
        }
    </div>
  )
}

export default ItemList