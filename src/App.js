import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import LoginContainer from './components/LoginContainer.jsx'
// import ProductsContainer from './components/products/ProductsContainer.jsx'
// import FormContainer from './components/forms/FormContainer.jsx'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Routes/>
      </div>
    );
  }
}

export default App;
