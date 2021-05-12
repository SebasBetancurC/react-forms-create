import React, { useState } from 'react';
import FiltroLives from './componentes/filtro-lives/filtro-lives.comp';


const PaginaLives = () => {

    let livesM = [
            {
                id: "1060653116",
                identificacion: "1060653116",
                nombre: 'Sebastián',
                apellidos: "Betancur Castillo",
                edad: "27",

                vehiculos: [
                    {
                        id: "Ve1So1",
                        placa: "NAU169",
                        marca: "Spark LT",
                        modelo: "2009",
                        color: "Gris Bretaña"
                    },
                    {
                        id: "Ve2So1",
                        placa: "TAR876",
                        marca: "Spark go",
                        modelo: "2017",
                        color: "Verde"
                    },
                    {
                        id: "Ve3So1",
                        placa: "COE534",
                        marca: "KIA Picanto",
                        modelo: "2020",
                        color: "Negro"
                    },
                    {
                        id: "Ve4So1",
                        placa: "TOE765",
                        marca: "Sandero",
                        modelo: "2019",
                        color: "Azul"
                    },
                    {
                        id: "Ve5So1",
                        placa: "LOY324",
                        marca: "Sedan",
                        modelo: "2017",
                        color: "Rojo"
                    }
                ]
            },
            {
                id: 'So2',
                nombre: 'Rubén Darío Castillo B.',
                vehiculos: [
                    {
                        id: 'Ve1So2',
                        placa: "UFT678",
                        marca: "Chevrolet Corsa Evolution",
                        modelo: "2006",
                        color: "Rojo"
                    },

                    {
                        id: "Ve2So2",
                        placa: "SGD864",
                        marca: "Corsa",
                        modelo: "2014",
                        color: "Blanco"
                    },

                    {
                        id: "Ve3So2",
                        placa: "SKL734",
                        marca: "Mazda 3",
                        modelo: "2012",
                        color: "Negro"
                    }
                ] 
            },
            {
                id: "So3",
                nombre: 'Laura Natalia Molina Calderón',
                vehiculos: [
                    {
                        id: "Ve1So3",
                        placa: "SYN192",
                        marca: "Mazda 6",
                        modelo: "2020",
                        color: "Negro"
                    },
                    {
                        id: "Ve2So3",
                        placa: "TYJ764",
                        marca: "Sandero",
                        modelo: "2019",
                        color: "Rojo"
                    },
                    {
                        id: "Ve3So3",
                        placa: "SHD734",
                        marca: "Clio",
                        modelo: "2016",
                        color: "Verde"
                    }
                ]
            },

            {
                id: "So4",
                nombre: 'Carlos Betancur Gómez',
                vehiculos: [
                    {
                        id: "Ve1So4",
                        placa: "SFD764",
                        marca: "Sandero",
                        modelo: "2017",
                        color: "Verde"
                    },
                    {
                        id: "Ve2So4",
                        placa: "KSD756",
                        marca: "Spark GT",
                        modelo: "2021",
                        color: "Gris"
                    },
                    {
                        id: "Ve3So4",
                        placa: "SGD763",
                        marca: "Corsa",
                        modelo: "2018",
                        color: "Azul"
                    }

                ]
            },
        ];

    const [asociados, setAsociados] = useState(livesM);
    const [vehiculos, setVehiculos] = useState(livesM);

    

    return(
        <>
            <FiltroLives
                livesM = {asociados}
                enAgregarAsociado={(nuevoAsociadoObj)=>{
                
                    for(let i=0; i<asociados.length; i++){
                        nuevoAsociadoObj.push(asociados[i].id);

                    }

                    console.log({nuevoAsociadoObj});
                    

                }}


             
             livesM = {vehiculos} 
             enAgregarVehiculo={(vehiculoObj, asociadoObj)=>{
                console.log(asociadoObj); 
                console.log(vehiculoObj);
                const vehiculosNuevos = [];

                for(let i=0; i<vehiculos.length; i++){
                    if(vehiculos[i].id !== asociadoObj){
                        vehiculosNuevos.push(vehiculos[i]);
                    }
                    else{
                        vehiculosNuevos.push(
                            {
                                ...vehiculos[i],
                                vehiculos:[...vehiculos[i].vehiculos, vehiculoObj]
                            }
                        );
                    }
                    
                }
                setVehiculos(vehiculosNuevos);
                console.log(vehiculosNuevos);
                
             }}
            

             />       
        </>


    
    
    
    );

}

export default PaginaLives;