import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      inventory: [
        {
          imageUrl: '',
          productName: 'Car',
          price: 200
        }
      ]
    }
  }

  componentDidMount(){

  }


  render() {
  return (
    <div className="App">
      <Dashboard />
      <Form />
      <Header />
    </div>
  );
  }
}

export default App;
