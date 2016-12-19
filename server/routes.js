const Post = require('./models/post');


module.exports = function(app){
  app.get('/posts',function(req,res){
    Post.find().exec(function(err, posts) {
     if(err) return console.log(err);
     res.json({posts})
   });
  })

  app.get('/posts/:id',function() {
    res.send('read a post')
  })

  app.put('/posts/:id',function() {
    res.send('updata a post')
  })

  app.delete('/posts/:id',function() {
    res.send('delete a post')
  })

  app.post('/posts',function (req,res) {
    const post = new Post();
    post.title=req.body.title;
    post.content=req.body.content;
    post.save();
    console.log(req.body)
    res.json(req.body)
  })


}
