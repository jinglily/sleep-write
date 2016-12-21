import React from 'react';
import { Link  } from 'react-router';
import Home from './Home';
import Work from './Work';
class App extends React.Component{
   render(){
     return(
       <div>
         <div className="top">
         <Link className="tops" to='/'>home</Link>
         <Link className="tops" to='/work'>work</Link>
         </div>
         {this.props.children}
       </div>
     )
   }
 }
export default App;
