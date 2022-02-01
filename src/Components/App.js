import '../App.css';
import React from 'react';
import Header from './Header';
import Greetings from './Greeting';
import Todos from './TodoForm';


const eventMethod = () => {
  console.log("I was Clicked")
}

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      name:"Joram Bagonza",
      food:"Animal meat",
      isLoggedIn : false,
      count : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState( prevState => {
      return{
        count: prevState.count + 1
      }
    })
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
    <div className="App" onPointerOver={()=> {console.log("I am on top")}}>
      <h1> You are currently logged {wordDisplay}</h1>
      <button onClick={eventMethod}> Click Me </button>
      <button onClick={()=>{console.log("I am the Second")}}> Button 2 </button>

      <div>
        <h2> {this.state.count} </h2>
        <button onClick={this.handleClick}> Count</button>
      </div>
        <Greetings  />
        <Header username={this.state.name}  />
        <Todos />
    </div>
  );
}
}

export default App;
