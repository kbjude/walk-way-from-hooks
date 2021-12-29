import '../App.css';
import React from 'react';
import Header from './Header';
import Greetings from './Greeting';

class App extends React.Component {
  render() {
    const styles = {
      color: "red"
    }
  return (
    <div className="App">

        <Greetings />
        <Header username='Testing' />
    </div>
  );
}
}

export default App;
