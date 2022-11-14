import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import BlogPage from './BlogPage'
import About from './About'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/BlogPage" element={ <BlogPage/> } />
          <Route path="/About" element={ <About/> } />
        </Routes>
      </BrowserRouter>
      <ul>
        <li><a href='http://localhost:3002/BlogPage'>Browse</a></li>
        <li><a href='http://localhost:3002/About'>About</a></li>
      </ul>
    </div>
  );
}

export default App;
