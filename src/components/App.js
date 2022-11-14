import React, {useState, useEffect} from 'react' 
import '../App.css';
import BlogPage from './BlogPage';
import About from './About'
import {Routes, Route} from 'react-router-dom'
import Header from './Header';
import BlogForm from './BlogForm'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/blogs")
          .then(r => r.json())
          .then(data => setBlogs(data))
  }, [])

  function addBlog(newBlog) {
      fetch('http://localhost:3000/blogs',{
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify(newBlog)
      })
      .then(response => response.json())
      .then(data => setBlogs([...blogs, data]))
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<BlogPage blogs={blogs}/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blogform" element={<BlogForm addBlog={addBlog}/>}/>
      </Routes>
    </div>
  );
}

export default App;
