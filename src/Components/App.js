import '../App.css';
import React from 'react';
import Header from './Header';
import Greetings from './Greeting';

class App extends React.Component {
  render() {
    username = "Jude Kajura"
    const styles = {
      color: "red"
    }
  return (
    <div className="App">
        <Header username={this.props.username} />
        <Greetings />
    </div>
  );
}
}

export default App;
