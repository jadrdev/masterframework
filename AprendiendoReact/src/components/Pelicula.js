import React, { Component} from 'react';


class Pelicula extends Component {

    marcar = () =>{
        this.props.marcarfavorita(this.props.pelicula, this.props.indice);
    }

    render() {
        const pelicula = this.props.pelicula;
        const {title, image} = this.props.pelicula;



        
        return (

            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>
                    <h2>{title}</h2>
                        <span className="date">
                            hace 5 minutos
                        </span>
                    <a href="#">Leer más</a>
                    <button onClick={this.marcar}>
                        Marcar como Favorita
                    </button>
                <div className="clearfix"></div>
            </article>
    );


    }
}

export default Pelicula;