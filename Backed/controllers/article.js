'use strict'
var validator = require ('validator');
var Article = require ('../models/article');
var fs = require('fs');
var path = require('path');

var controller = {

    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Master en FrameworksJS',
            autor: 'Joshua',
            url: 'jadrdev.com',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: "Soy la acción text del mi controlador"
        });

    },

    save: (req, res) => {
        //Recoger pararmetros post
        var params = req.body;

        //validar datos con (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }

        if (validate_title && validate_content) {

            // Crear el objeto a guardar
            var article = new Article();

            //Asignar Valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;


            // Guardar el artículo
            article.save((err, articleStored) => {

                if ( err || ! articleStored) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'Los datos no son validos'
                    });
                }

                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });


            });




        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });

        }
    },

    getArticles: (req, res) => {
        //Find

        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {

            query.limit(5);

        }

        query.sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Los datos no son validos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });

        });


    },

    getArticle: (req, res) => {

        // recoger id
        var articleID = req.params.id;

        //comprobar que existe

        if(!articleID  || articleID == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo'
            });

        }

        //buscar articulo

        Article.findById(articleID, (err, article) => {

            if( err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo'
                });

            }

            //devolverlo el json
            return res.status(404).send({
                status: 'success',
                article

            });

        });

    },

    update: (req, res) => {

        //recoger id que viene por la ulr
        var articleID = req.params.id;

        // recoger datos que llegan por Put

        var params = req.body;

        //validat datos

        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }
        catch (err) {
            return res.status(404).send({
                status: 'error',
                message: 'faltan datos por enviar'
            });
        }

        if (validate_title  || validate_content ) {
            //Find and update
            Article.findOneAndUpdate({_id: articleID}, params, {new:true}, (err, articleUpdated) => {
                if (err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    });

                if(!articleUpdate) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });

                }
                //devolver una respuesta
                return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                }
            });
        }else{
            return res.status(404).send({
                status: 'error',
                message: 'La validación no es correcta'
            });

        }

    },

    delete : (req, res) => {

        //recoger el id de la url
        var articleID = req.params.id;

        //Find and delete
        Article.findOneAndDelete({_id: articleID}, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo'
                });
            }

            //devolver una respuesta
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    upload : (req, res) => {

            //Configurar el modulo connet multiparty router/article.js

            //Recoger fichero de la petición

              var file_name = 'imagen no subida...';

              if (!req.files){
                  return res.status(404).send({
                      status: 'error',
                      message: file_name

                  });
              }
            //Conseguir nombre y la extensión del archivo

              var file_path = req.files.file0.path;
              var file_split = file_path.split('/');

              //Nombre del archivo

             var file_name = file_split[2];

             //Extensión

            var extension_split = file_name.split('\.');
            var file_ext = extension_split[1];


            //Comprobar la extension, solo imagenes, si es valida borrar el fichero

            if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {

                fs.unlink(file_path, (err) => {
                    return res.status(200).send({
                       status: 'error',
                        message: 'el fichero no es una imagen',
                    });

                });

                }else {

                var articleid = req.params.id;

                Article.findOneAndUpdate({_id: articleid}, {image: file_name}, {new: true}, (err, articleUpdated) => {
                    if (err || !articleUpdated){
                        return res.status(404).send({
                            status: 'error',
                            message: 'Error al guardar imagen de artículo'
                         });

                    }else{
                    
                    return res.status(200).send({
                       status: 'succes',
                       article: articleUpdated
                    });
                }
                });
                

                

            }

    }, // end unploud file

    getimage: (req, res) => {

        var file = req.params.image;
        var path_file = './upload/articles/'+file;

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }
        
            else{
                return res.status(404).send({
                    status: 'error',
                    mensaje: 'La Imagen no existe'
                 });
            }


        });

    
    }, //end getimage

    search: (req, res) => {
        //Sacar el String a buscar
        var searchString = req.params.search;
        
        //Finf or
        Article.find({ "$or" : [
            {"title" : {"$regex": searchString, "$options":"i"}},
            {"content" : {"$regex": searchString, "$options":"i"}}
        
        ]})
        .sort([['date','descending']])
        .exec((err, articles) => {

            if (err){
                return res.status(404).send({
                    status: 'error',
                    mensaje: 'La Imagen no existe',
                 });

            }

            if (!articles || articles.length <= 0 ){
                return res.status(404).send({
                    status: 'error',
                    mensaje: 'No hay artículos para mostrar',
                 });

            }

         
                return res.status(200).send({
                    status: 'sucess',
                    articles
                 });
                

        });
        
        
    }






}; //end controler


module.exports = controller;
