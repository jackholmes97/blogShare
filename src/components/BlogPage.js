import React, {useState, useEffect} from 'react'
import SideBar from './Sidebar'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
export default function BlogPage() {
    const [blogs, setBlogs] = useState([])

    use

    return(
        <div className='blog-page'>
            <SideBar/>
            <BlogList/>
        </div>
    )
}