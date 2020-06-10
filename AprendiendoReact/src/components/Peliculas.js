import React, {Component} from 'react';
import Pelicula from './Pelicula.js';

class Peliculas extends Component{
        state = {};

        cambiarTitulo = () => {
            var {peliculas} = this.state;
            //var random = Math.floor(Math.random() * 3);
            peliculas[0].title = "The Joker"
            //peliculas[random].image = "https://www.ecccomics.com/content/productos/6604/cubierta_DCBLackLabel_Joker.jpg"

            this.setState({
                peliculas: peliculas
            })
        }

        favorita =  (pelicula, indice) => {
            console.log("Favorita");
            console.log(pelicula, indice);
            this.setState({
                favorita: pelicula
            });
          
        }

        componentWillMount(){
            //alert("se va montar el componente");
            this.setState({
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
                nombre: 'Joshua A. Díaz Robayna',
                favorita: {}
            })
        }

        componentDidMount() {
            //alert("Se termino de montar");
        }

        componentWillUnmount() {
           // alert ("me desconecto");
        }


    render(){
            var pStyle = {
                background: 'green',
                color: 'white',
                padding: '10px'
            }
            var favorita;
            if(this.state.favorita.title){
                favorita = (
                    <p className="favorita" style={pStyle}>
                        <strong> La Película Favorita es: </strong>
                        <span>{this.state.favorita.title}</span>
                    </p>
                );

            } else {
                favorita =
                    (
                    <p>No hay pelicula favorita</p>
                )
            }

        return (
        <div id="content" className="peliculas">
             
             <h2 className="subheader">Peliculas</h2>
             <p>Selección de mis peliculas favoritas de {this.props.nombre}</p>
             <p>
                 <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
            </p>

            {/*this.state.favorita.title ? (
                <p className="favorita" style={pStyle}>
                    <strong> La Película Favorita es: </strong>
                <span>{this.state.favorita.title}</span>
                </p>
            ) : (
                <p>No hay pelicula favorita</p>
            )
            */}

            {favorita}

             {/** Crear Componente Pelicula **/}

            <div id="articles" className="Peliculas">

                {
                    this.state.peliculas.map((peliculas, i) => {
                        return (
                            <Pelicula 
                               key={i} 
                               pelicula={peliculas}
                               indice={i}
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