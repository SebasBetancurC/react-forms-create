import React from 'react';
import './asociados.css';


const AsociadosNombre = (props) => {
    return(
        <div className="nombre-asociado-contenedor"> 
            {props.nombreAsociado}  
        </div>
    );

}

export default AsociadosNombre;