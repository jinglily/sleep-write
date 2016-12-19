var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sleep-write');

var Cat = mongoose.model('Cat',{ name:String });
// 数据库会创建一个cats集合
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

var db = mongoose.connection;
db.on('error', function () {
  console.log('aaa');
});
db.once('open', function () {
  var cat = new Cat();
  cat.name='aaa';
  cat.save()
  console.log('success');
});

app.get('/',function(req,res){
  res.send('about');
  console.log('success');
})

app.post('/posts',function (req,res) {

  console.log(res.body)
  res.send('aaa')
})
app.listen(3000,function(){
  console.log('running on port 3000...');
})
