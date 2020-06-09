'use strict'

var express = require('express');
var ArticleControler = require('../controllers/article');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});

var router = express.Router();

//Routes para prueba
router.post('/datos-curso', ArticleControler.datosCurso);
router.get('/test-de-controlador', ArticleControler.test);


//Routes para articulos
router.post('/save', ArticleControler.save);
router.get('/articles/:last?', ArticleControler.getArticles);
router.get('/article/:id', ArticleControler.getArticle);
router.put('/article/:id', ArticleControler.update);
router.delete('/article/:id', ArticleControler.delete);
router.post('/upload-image/:id', md_upload, ArticleControler.upload);
router.get('/get-image/:image', ArticleControler.getimage);
router.get('/search/:search', ArticleControler.search);
module.exports = router;

