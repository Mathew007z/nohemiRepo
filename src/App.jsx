import React from 'react'
import ItemCotainer from './components/ItemsContainer/ItemCotainer'
// Una API es un endpoint o PUNTO DE ENCUENTRO, entre el BACKEND Y EL FRONTEND 
import ProductsProvider from './context/ProductsContext'

const App = () => {
  return (
    <ProductsProvider>
      {/* aca estoy envolviendo el componente con el contexto, para que sea un hijo de mismo y tenga acceso a todo. */}
        <ItemCotainer/>
    </ProductsProvider>

  )
}

export default App