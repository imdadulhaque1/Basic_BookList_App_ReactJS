import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

// ctrl + k + c => Comment
// ctrl + k + u => Uncomment

const App = () =>{
  return (
    <BrowserRouter>
       <MainComponent />
    </BrowserRouter>
  );
}

export default App;
