'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');
var Article = require('../models/article');

var controller = {
    saveArticle: (req, res) => {
        //Recoger los parametros por post
        var params = req.body;
        // Validar datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);            
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por eviar!!!'
            });
        }

        if (validate_title && validate_content) {
            // Crear el objeto a guardar
            var article =  new Article();
            // Asignar valores
            article.title = params.title;            
            article.content = params.content;
            article.image = null;
            // Guardar el articulo
            article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se a guardado!!!'
                    });
                }
                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    articleStored
                });
            });            
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Los datos no son validos!!!'
            });
        }
    },
    listArticle: (req, res) => {
        var query = Article.find({});
        var last = req.params.last;
        if (last || last !== undefined) {
            query.limit(5);
        }
        // Consulta de articulos
        query.sort('-_id').exec((err, articles) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos!!!'
                });
            }
            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },
    getArticle: (req, res) => {
        // Recoger el id del articulo por la url
        var articleId = req.params.id;
        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!!!'
            });
        }
        // Buscar el articulo
        Article.findById(articleId, (err, article) => {            
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'El articulo no existe!!!'
                });
            }
            return res.status(200).send({
                status: 'success',
                article
            });
        });
        // Devolver en JSON
    },
    updateArticle: (req, res) => {
        // Recoger el id del articulo por la url
        var articleId = req.params.id;
        // Recoger los datos que llegan por PUT
        var params = req.body;
        // Validar datos
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            });
        }

        if (validate_title && validate_content) {
            // Find and update
            Article.findByIdAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err || !articleUpdated) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar el articulo!!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        } else {
            return res.status(500).send({
                status: 'error',
                message: 'La validación no es correcta!!!'
            });
        }
    },
    deleteArticle: (req, res) => {
        // Recoger el id del articulo por la url
        var articleId = req.params.id;
        // Find and delete
        Article.findByIdAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err || !articleRemoved) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar el articulo!!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },
    uploadArticle: (req, res) => {
        // Configurar el modulo connect multiparty router/article.js

        // Recoger el fichero de la petición
        var file_name_default = 'Imagen no subida...';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name_default
            });
        }

        // Conseguir nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[2];

        var list_ext = ['png', 'jpg', 'jpeg', 'gif'];
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];

        // Comprobar la extensión, solo imagenes, si es valido borrar el fichero
        if (!list_ext.includes(file_ext)) {
            // Borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(404).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es valida!!!'
                });
            });
        } else {
            // Recoger el id del articulo por la url
            var articleId = req.params.id;

            // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {
                if (err || !articleUpdated) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del articulo!!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });            
        }
    },
    getImage: (req, res) => {
        // Recoger el nombre de la imagen del articulo por la url
        var file = req.params.image;
        var path_file = './upload/articles/' + file;
        
        fs.exists(path_file, (exists) => {
            if (exists) {
                return  res.sendFile(path.resolve(path_file));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe!!!'
                });
            }
        });
    }
};

module.exports = controller;