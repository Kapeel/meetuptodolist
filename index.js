var express = require('express')
var app = express()


app.use(express.static('public')) //  app.use(express.static(__dirname + '/public'))


app.set('port', 3000)
app.listen(3000)