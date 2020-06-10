import React from 'react';
import './assets/css/App.css';


//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
//import SeccionPruebas from './components/SeccionPruebas';
//import Peliculas from './components/Peliculas';
import Router from './router';



function App() {
  var buttonString = "Ver más";

  return (
    <div className="App">

      <Header></Header>

      <Slider 
      title="Bienvenido al curso de React"
      btn= {buttonString}
      
      />

      <div className="center">

          {/*<Peliculas></Peliculas>*/}

          <Router></Router>


       
        <Sidebar />
        <div className="clearfix"></div>

      </div> 
      {/*Fin de center */}
      
      {/*Footer */}
      <Footer></Footer>
      {/* Fin Footer */}
      
    </div>
    

  );
}

export default App;
