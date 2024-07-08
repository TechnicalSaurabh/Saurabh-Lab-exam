 
 const express = require('express');
 
 const app = express();
 const articleRoute = express.Router();
 
 // Article module which is required and imported
 let articleModel = require('../Model/Article');
 
 // To Get List Of articles
 ArticleRoute.route('/').get(function (req, res) {
 articleModel.find(function (err, article) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(article);
 }
 });
 });
 
 // To Add New Articles
 ArticleRoute.route('/addArticle').post(function (req, res) {
 let article = new articleModel(req.body);
 article.save()
 .then(game => {
 res.status(200).json({ 'articles': 'Article Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
 });
 
 // To Get Article Details By  ID
 ArticleRoute.route('/editArticle/:id').get(function (req, res) {
 let id = req.params.id;
 articleModel.findById(id, function (err, article) {
 res.json(article);
 });
 });
 
 // To Update The Article Details
 ArticleRoute.route('/updateArticle/:id').post(function (req, res) {
articleModel.findById(req.params.id, function (err, article) {
 if (!article)
 return next(new Error('Unable To Find Article With This Id'));
 else {
 article.Name = req.body.Name;
 article.Category = req.body.Category;
 article.createrName = req.body.createrName;
 
 article.save().then(emp => {
 res.json('Article Updated Successfully');
 })
 .catch(err => {
 res.status(400).send("Unable To Update Employee");
 });
 }
 });
 });
 
 // To Delete The Employee
 articleRoute.route('/deleteArticle/:id').get(function (req, res) {
 articleModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
 if (err) res.json(err);
 else res.json('Article Deleted Successfully');
 });
 });
 
 module.exports = articleRoute;
