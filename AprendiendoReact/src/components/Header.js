import React, { Component } from 'react';
import logo from '../assets/images/logo.svg'
import {NavLink} from 'react-router-dom';



class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                {/* Logo */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo"></img>
                            <span id="brand"><strong>Curso</strong>React</span>
                    </div>
                    {/* Menu */}
                        <nav id="menu">
                            <ul>
                                <li>
                                   <NavLink to="/" activeClassName="active">Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/prueba-ruta/" activeClassName="active">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/segunda-ruta/" activeClassName="active">Formulario</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pagina-1" activeClassName="active">Página 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pruebas/Joshua" activeClassName="active" >Página 2</NavLink>
                                </li>
                            </ul>
                        </nav>
                        {/* Eliminar Flotados */}
                        <div className="clearfix"></div>
                </div>
            </header>
        );

    }
}

export default Header;