import React from 'react';
import AsociadosNombre from '../asociados/asociados';
import InfoVehiculo from '../info-vehiculos/info-vehiculos';
import './tabla-info-lives.css';


const TablaDeInfoLives = (props) => {

    //console.log ({props});

    return(
        <div className = "contenedor-info-lives"> 
             <div className = "titulo-info">
                INFORMACIÓN ASOCIADOS LIVES
            </div>

            
            {props.livesM.map((asociados, index)=>{
                return (
                
                <React.Fragment key= {asociados.id}>
                    <AsociadosNombre nombreAsociado = {asociados.nombre}/>
                    {asociados.vehiculos.map((vehiculos, indexVehiculo)=>{
                        return (
                            <InfoVehiculo 
                                key={vehiculos.id} 
                                vehiculo={vehiculos}/>

                        );
                    })}
                </React.Fragment>);
            })}
           
           


            


    
        </div>
    );

}

export default TablaDeInfoLives;