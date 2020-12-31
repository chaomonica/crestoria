import React from 'react';
import { hot } from 'react-hot-loader/root';
//npm install react-hot-loader

//import { Link, Route, Switch } from 'react-router-dom';
import Demo from './components/demo.jsx'

//React - function vs class components
const App = () => {
  return (
    <>
     <p>Hi, am app</p>
     <Demo />
    </>
  );
};

export default hot(App);