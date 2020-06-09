import React, {Component} from 'react';

class MiComponente extends Component{

    render () {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Queso','Jamón Cocido'],
            calorias: 400
        }
        return (
           <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias} </h2>
                <ol>
                {
                    receta.ingredientes.map((ingredientes,i) => {
                        console.log(ingredientes);
                        return(
                            <li key={i}>
                                {ingredientes}
                            </li>
                        )
                    })
                }
                <hr></hr>
                </ol>

            </div>
            
        );
    }
    
}

export default MiComponente;