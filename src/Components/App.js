import '../App.css';
import React from 'react';
import Header from './Header';
import Greetings from './Greeting';

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      name:"Joram Bagonza",
      food:"Animal meat",
      isLoggedIn : false
    }
  }
  render() {
    let wordDisplay
    if (this.state.isLoggedIn===true){
      wordDisplay= "In"
    } else {
      wordDisplay= "out"
    }

    const styles = {
      color: "red"
    }
  return (
    <div className="App">
      <h1> You are currently logged {wordDisplay}</h1>
        <Greetings  />
        <Header username={this.state.name}  />
    </div>
  );
}
}

export default App;
