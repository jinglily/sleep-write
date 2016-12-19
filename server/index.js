const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')
mongoose.connect('mongodb://localhost:27017/sleep-write');

// const Cat = mongoose.model('Cat',{ name:String });
// 数据库会创建一个cats集合
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

var db = mongoose.connection;
db.on('error', function () {
  console.log('aaa');
});
db.once('open', function () {
  // var cat = new Cat();
  // cat.name='aaa';
  // cat.save()
  console.log('success');
});

routes(app);

app.listen(3000,function(){
  console.log('running on port 3000...');
})
