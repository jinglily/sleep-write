const express = require('express');
const app = express();

app.use(express.static('public'));
// 用跟本文件平级的一个 public 夹作为静态文件的存放位置
// 没有这一行，后面 sendFile 的 index.html 就找不到了。

app.get('*',function(req,res){
  // console.log('success');
  res.sendFile('index.html',{root:'public'});
})

app.listen(4000,function(){
  console.log('running on port 4000...');
})
