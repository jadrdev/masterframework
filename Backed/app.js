'use strict'

//cargar modulos de node  para crear el servidor

var express = require('express');
var bodyparse = require('body-parser');


// Ejecutar express

var app = express();

// cargar ficheros rutas

var articles_routes = require('./routes/article');

// MiddLewares

app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());

// CORS

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Añadir prefijos a las rutas / Cargar rutas

app.use('/api' ,articles_routes);

// Exportar modulo (fichero actual)

module.exports = app;