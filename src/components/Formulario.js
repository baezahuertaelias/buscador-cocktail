import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    /* Extraer los datos de categoriascontext */
    const { categorias } = useContext(CategoriasContext);

    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    /* State */
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    /* Funcion para leer contenidos */
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };


    return (
        <form 
            className="col-12" 
            onSubmit={e => { 
                e.preventDefault(); 
                buscarRecetas(busqueda); 
                guardarConsultar(true); }
                }>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria" onChange={obtenerDatosReceta}>
                        <option value="">Seleccione</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory} >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar por ingrediente"
                    />
                </div>

            </div>
        </form>

    );
}

export default Formulario;