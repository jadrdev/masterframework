import React, {Component} from 'react';
import Pelicula from './Pelicula.js';

class Peliculas extends Component{
        state = {
            peliculas: [
                {
                    title: 'Batman: Begins',
                    image: 'https://pics.filmaffinity.com/Batman_Begins-413277928-large.jpg',
                
                },
                {
                    title: 'Batman: El Caballero Oscuro',
                    image: 'https://i.pinimg.com/originals/a6/00/a8/a600a8339308d9fc74465215da537edf.jpg',   
                },
                {
                    title: 'Batman: El Caballero Resurección',
                    image: 'https://pics.filmaffinity.com/the_dark_knight_rises-149544881-large.jpg',   
                }
            ],
            nombre: 'Joshua A. Díaz Robayna'
             
        };

        cambiarTitulo = () => {
            var {peliculas} = this.state;
            //var random = Math.floor(Math.random() * 3);
            peliculas[0].title = "The Joker"
            //peliculas[random].image = "https://www.ecccomics.com/content/productos/6604/cubierta_DCBLackLabel_Joker.jpg"

            this.setState({
                peliculas: peliculas
            })
        }

        favorita = (pelicula) => {
            console.log("Favorita");
            console.log(pelicula);
          
        }
        
        
        render(){

        return (
        <div id="content" className="peliculas">
             
             <h2 className="subheader">Peliculas</h2>
             <p>Selección de mis peliculas favoritas de {this.props.nombre}</p>
             <p>
                 <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
            </p>

            <p>La Película Favorita es:</p>
            <span>x</span>

             {/** Crear Componente Pelicula **/}

            <div id="articles" className="Peliculas">

                {
                    this.state.peliculas.map((peliculas, i) => {
                        return (
                            <Pelicula 
                               key={i} 
                               pelicula={peliculas}
                               marcarfavorita={this.favorita} 
                            />
                          
                        )
                    
                    })
                }
            </div>
            
        </div>
           
        );
    }
}

export default Peliculas;