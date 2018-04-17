var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds151348.mlab.com:51348/tododb');

var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model('Todo',todoSchema);

//var data = [{item: 'get milk'},{item:'walk dog'},{item:'run'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (web){
  web.get('/todo', function(req,res){
  Todo.find({}, function(err, data){
    if (err) throw err;
    res.render("todo", { todos: data });
  });

  });

  web.post('/todo', urlencodedParser,function(req,res){
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
      res.json(data);
    });

  });

  web.delete('/todo/:item',function(req,res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
  });

};
