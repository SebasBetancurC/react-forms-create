import React from 'react';
import './info-vehiculos.estilo.css';

const InfoVehiculo = (props) => {
    return(
        <div className="info-vehiculo-contenedor">
            <span className = "placa">{props.vehiculo.placa}</span>
            <span className = "marca">{props.vehiculo.marca}</span>
            <span className = "modelo">{props.vehiculo.modelo}</span>
            <span className = "color">{props.vehiculo.color}</span>
        </div>
    );

}

export default InfoVehiculo;