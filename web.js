var express = require('express');
var todoController = require('./controllers/todoController');
var web = express();
var port = Number(process.env.PORT || 3000);
web.set('view engine', 'ejs');

web.use(express.static('./public'));

todoController(web);

web.listen(port, function(){
  console.log('listening on', web.address().port);
});
