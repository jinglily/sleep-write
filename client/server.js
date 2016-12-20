const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/',function(req,res){
  console.log('success');
  res.sendFile('index.html');
})

app.listen(4000,function(){
  console.log('running on port 4000...');
})
