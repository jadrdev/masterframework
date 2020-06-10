import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPruebas'
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

class Router extends Component{
    render() {
        return(
            <BrowserRouter>
                    {/* Configurar rutas */}
                    <Switch>
                        <Route exa path="/" component={Peliculas} />
                        <Route path="/prueba-ruta" component={SeccionPruebas} />
                        <Route path="/segunda-ruta" component={MiComponente} />
                    </Switch>
                </BrowserRouter>
        );
    }

}

export default React;