// import logo from './logo.svg';
import './App.css';
import  { Router, Link }from '@reach/router';
import React from 'react';
import AllAuthors from './components/AllAuthors';
import CreateAuthor from './components/CreateAuthor';
import ShowOneAuthor from './components/ShowOneAuthor';
import ColorAuthor from './components/ColorAuthor';

function App() {
  return (
    <div className="App">
      <h1>this is app.js</h1>
      <Link to="/">Welcome</Link> | <Link to="/create/:message">Hello</Link> | <Link to="/edit/:id">ID</Link> | <Link to="/color/:message">Color</Link>
      <Router>
        <AllAuthors path="/" />
        <CreateAuthor path="/create/:message" />
        <ShowOneAuthor path="/edit/:id" />
        <ColorAuthor path="/color/:message" />
      </Router>
    </div>
  );
}

export default App;
// url data passed to viewer