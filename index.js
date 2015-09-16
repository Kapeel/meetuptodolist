var express = require('express')
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public')) //  app.use(express.static(__dirname + '/public'))

// MONGO CONNECTION
var uristring = 'mongodb://localhost/test';
mongoose.connect(uristring);
// MONGO CONNECTION

// MONGOOSE
var todoSchema = mongoose.Schema({
    name: String
});
var Todo = mongoose.model('Todo', todoSchema);
// MONGOOSE

// ROUTES BEGIN
app.get('/todos', function (req, res){
  Todo.find(function (err, docs) {
    if (err) return console.error(err);
    res.json(docs); 
  })
})
// ROUTES END


app.set('port', 3000)
app.listen(3000)