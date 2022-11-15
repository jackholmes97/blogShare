import React, {useState} from 'react'
import SideBar from './Sidebar'
import BlogList from './BlogList'

export default function BlogPage({ blogs, handleViews }) {

    const [search, setSearch] = useState("")
    const [filterByPhase, setFilterByPhase] = useState("all")
    const [filterByDiscipline, setFilterByDiscipline] = useState("all")
    const [views, setViews] = useState(0)

    const filteredBlogs = blogs.filter((filteredBlogs) => {
        return filteredBlogs.title.toLowerCase().includes(search.toLowerCase())
    }).filter((disciplineB) => {
        if (filterByDiscipline === 'all') {
            return true
        }
        else {
            return filterByDiscipline === disciplineB.discipline
        }
    }).filter((phaseB) => {
        if (filterByPhase === 'all') {
            return true
        }
        else {
            return filterByPhase === phaseB.phase
        }
    })

    const topBlogs = [...blogs]

        const sortedArray = topBlogs.sort((a,b) => {return b.views - a.views})
        console.log(sortedArray)

        const topFiveBlogs = sortedArray.slice(0,5)
        console.log(topFiveBlogs)

    return (
        <div className='blog-page'>
            <SideBar search={search} setSearch={setSearch} filterByPhase={filterByPhase} setFilterByPhase={setFilterByPhase} filterByDiscipline={filterByDiscipline} setFilterByDiscipline={setFilterByDiscipline} topFiveBlogs={topFiveBlogs} />
            <BlogList blogs={filteredBlogs} views={views} setViews={setViews} handleViews={handleViews} />
        </div>
    )
}