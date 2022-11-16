import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function BlogForm({addBlog}) {

    const [blogTitle, setBlogTitle] = useState("")
    const [blogAuthor, setBlogAuthor] = useState("")
    const [blogDescription, setBlogDescription] = useState("")
    const [blogURL, setBlogURL] = useState("")
    const [blogThumbnail, setBlogThumbnail] = useState("")
    const [blogDiscipline, setBlogDiscipline] = useState("all")
    const [blogPhase, setBlogPhase] = useState("all")

    function clearForm() {
        setBlogTitle("")
        setBlogAuthor("")
        setBlogDescription("")
        setBlogURL("")
        setBlogThumbnail("")
        setBlogDiscipline()
        setBlogPhase()
    }

    function addBlogTitle(e) {
        setBlogTitle(e.target.value)
    }
    function addBlogAuthor(e) {
        setBlogAuthor(e.target.value)
    }
    function addBlogDescription(e) {
        setBlogDescription(e.target.value)
    }
    function addBlogURL(e) {
        setBlogURL(e.target.value)
    }
    function addBlogThumbnail(e) {
        setBlogThumbnail(e.target.value)
    }
    function addBlogDiscipline(e) {
        setBlogDiscipline(e.target.value)
    }
    function addBlogPhase(e) {
        setBlogPhase(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const newBlog = {
            title: blogTitle,
            author: blogAuthor,
            description: blogDescription,
            link: blogURL,
            thumbnail: blogThumbnail,
            discipline: blogDiscipline,
            phase: blogPhase
        }
        clearForm()
        addBlog(newBlog)
    }

    return (
        <div className='new-blog-post'>
        <h3>New Blog Post</h3>
        <div className= "new-blog-container">
        <form onSubmit={handleSubmit}>
            <TextField sx={{ m: 1, background:"transparent" }} className = "form-input" id="margin-normal" label="Blog Title" placeholder="Enter Title..." value={blogTitle} onChange={addBlogTitle}/>
            <TextField sx={{ m: 1, background:"transparent"}} className = "form-input" label="Blog Description" placeholder="Enter Description..." value={blogDescription} onChange={addBlogDescription}/>
            <TextField sx={{ m: 1, background:"transparent"}} className = "form-input" label="Author" placeholder="Enter Author..." value={blogAuthor} onChange={addBlogAuthor}/>
            <TextField sx={{ m: 1, background:"transparent"}} className = "form-input" label="Blog URL" placeholder="Enter URL..." value={blogURL} onChange={addBlogURL}/>
            <TextField sx={{ m: 1, background:"transparent"}} className = "form-input" id="margin-normal" label="Thumbnail" placeholder="Enter Thumbnail..." value={blogThumbnail} onChange={addBlogThumbnail}/>
            <Box sx={{ p: 0.5 , m: 0.5, display: 'flex', background:"transparent"}}>
            <TextField sx={{ m: 0.5, background:"transparent"}} className="form-dropdown" id="margin-none" select value={blogDiscipline} onChange={addBlogDiscipline} helperText='Please select your discipline' >
                <MenuItem value="all" label="all">Select Discipline</MenuItem>
                <MenuItem value="Software Engineer" label="Software Engineer">Software Engineer</MenuItem>
                <MenuItem value="Data Science" label="Data Science">Data Science</MenuItem>
                <MenuItem value="UI/UX Design" label="UI/UX Design">UI/UX Design</MenuItem>
                <MenuItem value="CyberSecurity" label="Cyber Security">CyberSecurity</MenuItem>
            </TextField>
            <TextField sx={{ m: 0.5, background:"transparent"}} className= "form-dropdown" select value={blogPhase} onChange={addBlogPhase} helperText="Please select your phase">
                <MenuItem value="all">Select Phase</MenuItem>
                <MenuItem value="Phase 1">Phase 1</MenuItem>
                <MenuItem value="Phase 2">Phase 2</MenuItem>
                <MenuItem value="Phase 3">Phase 3</MenuItem>
                <MenuItem value="Phase 4">Phase 4</MenuItem>
            </TextField>
            </Box>
            <Button sx={{ m: 0.5, p: 1, backgroundColor: "none", borderColor: 'white' }} className= "form-button" variant='outlined' type="submit">{<AddIcon/>} Add</Button>
        </form>
        </div>
        </div>
    )
}

export default BlogForm;