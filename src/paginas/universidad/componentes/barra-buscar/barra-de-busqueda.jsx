import React from 'react';
import './barra-de-busqueda.css';


const BarraDeBusqueda = () => {
    return(
        <span className = "contenedor-barra-de-busqueda"> 
            <input type = "text" placeholder = "Buscar..."/>

            <tr>
                <td><button>Buscar</button></td>
            </tr>
        </span>
    );

}

export default BarraDeBusqueda;