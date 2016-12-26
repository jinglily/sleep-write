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
  handerClick(id){

    let aa = this.state.title.filter(function(e){
      return e._id !== id
    })
    this.setState({
      title:aa
    })
    axios.delete(`http://localhost:4000/posts/${id}`)
    .then(res => alert(res.data))
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
    <span onClick={this.handerClick.bind(this,item._id)} style={{color:"#fff"}}>删除</span>
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
