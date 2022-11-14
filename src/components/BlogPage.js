import React, {useState, useEffect} from 'react'
import SideBar from './Sidebar'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

export default function BlogPage({blogs}) {
   
    return(
        <div className='blog-page'>
            <BlogList blogs={blogs}/>
        </div>
    )
}