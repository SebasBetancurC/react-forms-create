import React, { useState } from 'react';
import AsociadosNombre from '../asociados/asociados';
import './contenedor-formulario.css';


const ContenedorFormulario = (props) => {



    const [placa, setPlaca] = useState(' ');
    const [marca, setMarca] = useState(' ');
    const [modelo, setModelo] = useState(' ');
    const [color, setColor] = useState(' ');
    const [asociado, setAsociado] = useState(' ');
    
    const agregarVehiculo =(event)=>{
        event.preventDefault();
        const vehiculoNuevo =
        {
            id: placa,
            placa: placa,
            marca: marca,
            modelo: modelo,
            color: color
        };
        props.enAgregarVehiculo(vehiculoNuevo, asociado);
       
    }

    

    return(
        <div className = "contenedor-formulario">
            <div className = "titulo-registro">
                REGISTRO ASOCIADO LIVES
            </div>

            <div className = "informacion-form">
                <form>
                    <table> 
                        <tr>
                            <td>
                                Asociado
                            </td>  
                        </tr>
                            <tr>
                                <td> 
                                    <select value = {asociado}
                                        onChange = {(event)=>{   
                                        setAsociado(event.target.value); 
                                        }}
                                    >
                                        <option value = "So1">Sebastián Betancur Castillo</option>
                                        <option value = "So2">Rubén Darío Castillo Bedoya</option>
                                        <option value = "So3">Laura Natalia Molina Calderón</option>
                                        <option value = "So4">Carlos Betancur Gómez</option>
                                    </select>
                                </td>
                            </tr> 
                                <tr>
                                    <td>Placa del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text" 
                                            value = {placa}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setPlaca(event.target.value);

                                            }}
                                    /> 
                                </td>
                            </tr> 
 
                                <tr>
                                    <td>Marca del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {marca}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setMarca(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Modelo del Vehículo</td>
                                </tr>
                            <tr>
                            <td><input      type = "text"
                                            value = {modelo}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setModelo(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Color del Vehículo</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {color}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setColor(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                <td><button 
                                            onClick={agregarVehiculo}
                                >
                                    Agregar Vehículo</button></td>
                            </tr>

                            

                            
                        </table>
                    </form>
                </div>
        

    
        </div>
    );

}

export default ContenedorFormulario;