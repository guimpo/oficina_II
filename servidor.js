var fs = require('fs')
var Express = require('express')
var app = Express()

app.use(Express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    fs.readFile(__dirname + '/views/login.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  } catch (e) {
    next(e)
  }
})

app.get('/CadastrarProfessor', function (req, res, next) {
  try {
    fs.readFile(__dirname + '/views/cadastrarProfessor.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    })
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3001, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3001))
})