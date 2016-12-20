import React from 'react';
import { Link  } from 'react-router';
import Home from './Home';
import Work from './Work';
class App extends React.Component{
   render(){
     return(
       <div>
         <Link to='/home'>home</Link>
         <Link to='/work'>work</Link>
         {this.props.children}
       </div>
     )
   }
 }
export default App;
