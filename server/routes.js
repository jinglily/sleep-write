const Post = require('./models/post');


module.exports = function(app){
  app.get('/posts',function(req,res){
    Post.find().exec(function(err, posts) {
     if(err) return console.log(err);
     res.json({posts})
   });
  })

  app.get('/posts/:_id',function( req,res ) {
    Post.findById(req.params._id,function(err,post){
    if(err) return console.log(err);
    console.log(post);
    res.send(post)
  })
  })

  app.put('/posts/:id',function( req,res ) {
    console.log(req.body);
    Post.findOneAndUpdate({_id:req.params.id},req.body,function(err){
      if(err) res.status(500).json({error:'更新失败'})
      res.send('updata a post')
    })
  })

  app.delete('/posts/:id',function( req,res ) {
    console.log(req.params.id);
    Post.remove({_id:req.params.id},function(err){
      if (err) return handleError(err);
      res.send('成功')
    })
  })

  app.post('/posts/',function (req,res) {
    const post = new Post();
    post.title=req.body.title;
    post.content=req.body.content;
    post.save();
    console.log(req.body)
    res.json(req.body)
    // res.status(500).json({error:'执行失败'});
  })


}
