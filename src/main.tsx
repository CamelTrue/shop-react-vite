// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Non è utile avere la strict mode attiva in fase di apprendimento
  // Perchè genera due render, questo vuol dire che ogni reload dell'apllicazione
  // Se c'è per esempio uno useEffect, o un console.log, il tutto verrà renderizzato due volte
  // Questo e molto scomodo in fase di apprendimento, perchè non si capisce il perchè dei due render
  
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
