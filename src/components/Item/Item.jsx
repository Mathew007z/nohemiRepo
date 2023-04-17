import React from 'react'

const Item = ({ data }) => {
   
  return (

    <div style={{
            border:'1px solid #000', 
            padding:'30px 10px',
            maxWidth:'200px',
            borderRadius:'20px'
            }}>
        {/* desestructuring de datos. */}
        <h2>{data.first_name}</h2>
        <h3>{data.last_name}</h3>
        <img src={data.avatar} alt="Esta es la imagen de perfil de la persona."/>
    </div>
  )
}

export default Item