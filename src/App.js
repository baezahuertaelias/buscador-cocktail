import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasContext from'./components/context/CategoriasContext';

function App() {
  return (
    <CategoriasContext>
      <Header />

      <div className="container mt-5" >
        <div className="row">
          <Formulario />
        </div>
      </div>

    </CategoriasContext>
  );
}

export default App;
