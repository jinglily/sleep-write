import React from 'react';
import axios from 'axios';

class Work extends React.Component{
  constructor(){
    super();
    this.state={
      disable:false
    }
  }
  handerClick(e){
    this.setState({disable:true})
    e.preventDefault();
    var title = this.refs.title.value;
    var content = this.refs.content.value;
    const data = {title:title,content:content}
    console.log(data);
    axios.post('http://localhost:4000/posts',data)
      .then((res) => this.props.router.push("/"))
      .catch((err) => {console.log(err)})
  }

  render(){
    // console.log(this.props);
    return(
      <div className="btn">
        <form  onSubmit={this.handerClick.bind(this)}>
          <input ref='title' type='text' name='title' /><br />
          <input ref='content' type='text' name='content' /><br />

          <button className="btns" disabled={this.state.disable}>提交</button>
        </form>
      </div>
    )
  }
}

export default Work;
