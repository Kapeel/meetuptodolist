var express = require('express')
var app = express()


app.use(express.static('public')) //  app.use(express.static(__dirname + '/public'))


// ROUTES BEGIN
app.get('/todos', function (req, res){
  var todos = [{name: "clean house"}, {name: "do laundry"},{name: "attend Javascript meetup"}]
  res.json(todos)
})
// ROUTES END


app.set('port', 3000)
app.listen(3000)