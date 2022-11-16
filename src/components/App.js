import React, {useState, useEffect} from 'react' 
import '../App.css';
import BlogPage from './BlogPage';
import About from './About'
import {Route, useLocation} from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
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

  function handleViews(data) {
    const updatedViews = blogs.map((blog)=> {
      if(blog.id === data.id) {
        return data;
      }
      else{
        return blog;
      }
    })
    setBlogs(updatedViews)
  }

  const location = useLocation();

  return (
    <div className="App">
      <Header/>
      <SlideRoutes location={location} duration={400}>
        <Route path="/" element={<BlogPage blogs={blogs} handleViews = {handleViews} exact/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blogform" element={<BlogForm addBlog={addBlog}/>}/>
      </SlideRoutes>
    </div>
  );
}

export default App;
