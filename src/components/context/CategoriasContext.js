import React, { createContext,useState, useEffect } from 'react';
import axios from 'axios';

/* Crear el context */
export const CategoriasContext = createContext();

/* Crear el provider, es donde se encuentran funciones y state */

const CategoriasProvider = (props) => {

    /* Crear el state del context */
    const [categorias, guardarCategorias] = useState([]);

    /* ejecutar el llamado a la api */
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            
            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks)
        };
        obtenerCategorias()
    }, [])
    

    return (
        /* 
         * El valor que esta dentro values en la etiqueta categoriascontext es la variable que se estara compartiendo
         * props.children es requerido
        
        */
        <CategoriasContext.Provider value={{categorias}}>
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;