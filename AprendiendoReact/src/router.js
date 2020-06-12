import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


/* Importar componentes */
import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import error from "./components/error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


class Router extends Component{
    render() {
        var buttonString = "Ver más";
        return(
            <BrowserRouter>

                <Header />

                <Slider
                    title="Bienvenido al curso de React"
                    btn= {buttonString}

                />

                <div className="center">


                    {/* Configurar rutas */}
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/home" component={Peliculas} />
                        <Route exact path="/prueba-ruta" component={SeccionPruebas} />
                        <Route exact path="/segunda-ruta" component={MiComponente} />

                        <Route exact path="/pagina-1" render={() => (
                            <React.Fragment>
                            <h1> Hola Mundo </h1>
                            <MiComponente saludo="Hola Amigo" />

                            </React.Fragment>
                        )} />

                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return (
                                    <div id="content">
                                        <h1 className="subheader">Página de pruebas</h1>
                                        <h2>
                                            {nombre && !apellidos &&
                                            <React.Fragment>
                                                {nombre}
                                            </React.Fragment>
                                            }
                                            {nombre && apellidos &&
                                            <React.Fragment>
                                                {nombre} {apellidos}
                                            </React.Fragment>
                                            }
                                        </h2>
                                    </div>
                            );
                                                                            }
                                                                }/>

                        <Route component={error} />

                    </Switch>

                    <Sidebar />
                </div>
                    <div className="clearfix"></div>



                    {/*Footer */}
                    <Footer></Footer>
                    {/* Fin Footer */}

                </BrowserRouter>
        );
    }

}

export default Router;