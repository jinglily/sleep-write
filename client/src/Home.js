import React from 'react';
import axios from 'axios';
import { Link  } from 'react-router';
class Home extends React.Component{
  constructor(){
    super();
    this.state={
      title:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/posts')
    .then(res => this.setState({title:res.data.posts}))
  }
  render(){
    let text = this.state.title.map((item,i) => <Link to={`/posts/${item._id}`} key={i} className="title">{item.title}</Link>)

    return(
      <div>

        {text}
      </div>
    )
  }
}
export default Home;
