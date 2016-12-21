import React from 'react';
import axios from 'axios';
class Post extends React.Component{
  constructor(){
    super();
    this.state={
      post:{}
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:4000/posts/${this.props.params._id}`)
    .then((res) => this.setState({post:res.data}))
  }
  render(){

    return(
      <div>
        {this.state.post.content}

      </div>
    )
  }
}
export default Post;
