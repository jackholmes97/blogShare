import React, { useState } from 'react';

function BlogForm({addBlog}) {

    const [blogTitle, setBlogTitle] = useState("")
    const [blogAuthor, setBlogAuthor] = useState("")
    const [blogDescription, setBlogDescription] = useState("")
    const [blogURL, setBlogURL] = useState("")
    const [blogThumbnail, setBlogThumbnail] = useState("https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png")
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="Blog Title" placeholder="Blog Title" value={blogTitle} onChange={addBlogTitle}/>
            <input type="text" name="Blog Description" placeholder="Blog Description" value={blogDescription} onChange={addBlogDescription}/>
            <input type="text" name="Author" placeholder="Author" value={blogAuthor} onChange={addBlogAuthor}/>
            <input type="text" name="Blog URL" placeholder="Blog URL" value={blogURL} onChange={addBlogURL}/>
            <input type="text" name="Thumbnail" placeholder={"https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"} value={blogThumbnail} onChange={addBlogThumbnail}/>
            <select value={blogDiscipline} onChange={addBlogDiscipline}>
                <option value="all">Select Discipline</option>
                <option value="Software Engineer">Software Engineering</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="CyberSecurity">Cyber Security</option>
            </select>
            <select value={blogPhase} onChange={addBlogPhase}>
                <option value="all">Select Phase</option>
                <option value="Phase 1">Phase 1</option>
                <option value="Phase 2">Phase 2</option>
                <option value="Phase 3">Phase 3</option>
                <option value="Phase 4">Phase 4</option>
            </select>
            <button type="submit">Add New Blog Post</button>
        </form>
        </div>
    )
}

export default BlogForm;