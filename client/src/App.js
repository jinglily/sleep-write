import React from 'react';
import { Link  } from 'react-router';
import Home from './Home';
import Work from './Work';
class App extends React.Component{
   render(){
     return(
       <div>
         <div className="top">
         <Link activeStyle={{color:'#00695C'}} onlyActiveOnIndex={true} className="tops" to='/'>home</Link>
         <Link activeStyle={{color:'#00695C'}} className="tops" to='/work'>New</Link>
         </div>
         {this.props.children}
       </div>
     )
   }
 }
export default App;
