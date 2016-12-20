import React from 'react';
import { Link  } from 'react-router';


class App extends React.Component{


  render(){

    return(
      <div>
        
        <Link to={Home}>Home</Link><br />
        <Link to={Work}>Work</Link>

      </div>
    )
  }
}

class Home extends React.Component{


  render(){

    return(
      <div>
        hello Home

      </div>
    )
  }
}


class Work extends React.Component{


  render(){

    return(
      <div>
        hello Work

      </div>
    )
  }
}
export default App;
