var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
var port = Number(process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(port, function(){
  console.log('listening on', app.address().port);
});
