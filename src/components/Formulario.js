import React, {useContext} from 'react';
import {CategoriasContext} from './context/CategoriasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);

    console.log(categorias)

    return ( 
        <form className="col-12">
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
                    />
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria">
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