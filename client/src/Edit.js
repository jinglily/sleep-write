import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
class Work extends React.Component{
  constructor(){
    super();
    this.state={
      title:'',
      content:'',
      disable:false
    }
  }
  componentWillMount(){
    axios.get(`http://localhost:4000/posts/${this.props.params._id}`)
      .then(res => this.setState({title:res.data.title,content:res.data.content}))
  }
  handerClick(e){
    this.setState({disable:true})
    e.preventDefault();
    var title = this.refs.title.value;
    var content = this.refs.content.value;
    const data = {title:title,content:content}
    console.log(data);
    axios.put(`http://localhost:4000/posts/${this.props.params._id}`,data)
      .then((res) => this.props.router.push("/"))
      .catch((err) => {console.log(err)})
  }
  handleChange(e){
    this.setState({
      title:e.target.value
    })
  }
  handleChange1(e){
    this.setState({
      content:e.target.value
    })
  }
  render(){
    return(
      <div>
        <div className="btn">
          <form onSubmit={this.handerClick.bind(this)}>
            <input ref='title' type='text' name='title' value={this.state.title}
              onChange={this.handleChange.bind(this)}/><br />
            <input ref='content' type='text' name='content' value={this.state.content}
              onChange={this.handleChange1.bind(this)}/><br />

            <button className="btns"  disabled={this.state.disable}>确认</button>
            <Link to='/'>取消</Link>

          </form>
        </div>
      </div>
    )
  }
}

export default Work;
