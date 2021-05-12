import React, { useState } from 'react';
import AsociadosNombre from '../asociados/asociados';
import './contenedor-formulario-info-asociados.css';


const ContenedorFormularioInfoAsociados = (props) => {


    const [identificacion, setIdentificacion] = useState(' ');
    const [nombre, setNombre] = useState(' ');
    const [apellidos, setApellidos] = useState(' ');
    const [edad, setEdad] = useState(' ');
    
    const agregarAsociado =(event)=>{
        event.preventDefault();
        const asociadoNuevo =
        {
            id: identificacion,
            identificacion: identificacion,
            nombre: nombre,
            apellidos: apellidos,
            edad: edad
        };
        props.enAgregarAsociado(asociadoNuevo);
       
    }

    

    return(
        <div className = "contenedor-formulario-info-asociados">
            <div className = "titulo-registro">
                REGISTRO ASOCIADOS LIVES
            </div>

            <div className = "informacion-form">
                <form>
                    <table> 
                                <tr>
                                    <td>Identificación Asociado</td>
                                </tr>
                            <tr>
                                <td><input  type = "text" 
                                            value = {identificacion}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setIdentificacion(event.target.value);

                                            }}
                                    /> 
                                </td>
                            </tr> 
 
                                <tr>
                                    <td>Nombre del Asociado</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {nombre}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setNombre(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Apellidos del asociado</td>
                                </tr>
                            <tr>
                            <td><input      type = "text"
                                            value = {apellidos}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setApellidos(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                    <td>Edad</td>
                                </tr>
                            <tr>
                                <td><input  type = "text"
                                            value = {edad}
                                            size = "35"
                                            onChange = {(event)=>{
                                            setEdad(event.target.value);

                                            }}
                                     /> 
                                </td>
                            </tr>

                            <tr>
                                <td><button
                                            size = "35"
                                            onClick={agregarAsociado}
                                >
                                    Agregar Asociado</button></td>
                            </tr>

                            

                            
                        </table>
                    </form>
                </div>
        

    
        </div>
    );

}

export default ContenedorFormularioInfoAsociados;