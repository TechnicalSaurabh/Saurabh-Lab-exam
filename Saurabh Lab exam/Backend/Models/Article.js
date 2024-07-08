const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Article = new Schema({
Name: {
type: String
},
Category: {
type: String
},
createrName: {
type: String
},
},{
collection: 'articles'
});

module.exports = mongoose.model('Museum', Article);
