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
    axios.get('http://localhost:4000/posts/')
    .then(res => this.setState({title:res.data.posts}))
  }
  render(){
    let text = this.state.title.map((item,i) => <div key={i} className="title">

    <Link to={`/posts/${item._id}`}>{item.title}</Link>
    <div style={{float:"right",fontSize:"16px"}}>
    <Link to={`/Edit/${item._id}`} style={{marginRight:"10px"}}>更新</Link>
    <Link to={`/posts/${item._id}`}>删除</Link>
    </div>

  </div>)

    return(
      <div>

        {text}
      </div>
    )
  }
}
export default Home;
