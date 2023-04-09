// importar react

// este el archivo MAIN que enlaza JAVASCRIPT o TYPESCRIPT con REACT, (jsx)
import React from 'react';
// nos proporciona una funcion para ejecutar nuestra aPP en el ROOT del proyecto 
import ReactDOM from 'react-dom/client'; 
import App from './App';


const root  = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
)
