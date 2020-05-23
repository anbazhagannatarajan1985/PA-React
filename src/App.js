import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorldService } from "./Services/HelloWorldService";

function App() {
  const [greeting, setGreeting] = useState('Hi');

  useEffect(() => {
    setTimeout( () => {
      setGreeting(HelloWorldService.getHelloWorld)
    }, 5000);
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting} World!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
