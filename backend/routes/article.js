'use strict'

var express = require('express');
var articleController = require('../controllers/article');
var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './upload/articles' });

router.post('/article', articleController.saveArticle);
router.put('/article/:id', articleController.updateArticle);
router.delete('/article/:id', articleController.deleteArticle);
router.get('/articles/:last?', articleController.listArticle);
router.get('/article/:id', articleController.getArticle);
router.post('/article/upload/:id', md_upload, articleController.uploadArticle);
router.get('/article/imagen/:image', articleController.getImage);
router.get('/article/search/:search', articleController.searchArticle);

module.exports =  router;