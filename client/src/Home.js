import React from 'react';
import axios from 'axios';

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
    let text = this.state.title.map((item,i) => <div key={i} className="title">{item.title}</div>)

    return(
      <div>

        {text}
      </div>
    )
  }
}
export default Home;
