import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import error from "./components/error";

class Router extends Component{
    render() {
        return(
            <BrowserRouter>
                    {/* Configurar rutas */}
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/prueba-ruta" component={SeccionPruebas} />
                        <Route exact path="/segunda-ruta" component={MiComponente} />

                        <Route exact path="/pagina-1" render={() => (
                            <React.Fragment>
                            <h1> Hola Mundo </h1>
                            <MiComponente saludo="Hola Amigo" />

                            </React.Fragment>
                        )} />



                        <Route component={error} />

                    </Switch>
                </BrowserRouter>
        );
    }

}

export default Router;