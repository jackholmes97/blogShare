import React, {useState} from 'react'
import SideBar from './Sidebar'
import BlogList from './BlogList'

export default function BlogPage({blogs}) {

    const [search, setSearch] = useState("")
  const [filterByPhase, setFilterByPhase] = useState("all")
  const [filterByDiscipline, setFilterByDiscipline] = useState("all")

  const filteredBlogs = blogs.filter((filteredBlogs) => {
      return filteredBlogs.title.toLowerCase().includes(search.toLowerCase())
  }).filter((disciplineB) => {
      if(filterByDiscipline === 'all'){
          return true
      }
      else{
          return filterByDiscipline === disciplineB.discipline
      }
  }).filter((phaseB) => {
      if(filterByPhase === 'all'){
          return true
      }
      else{
          return filterByPhase === phaseB.phase
      }
  })
   
    return(
        <div className='blog-page'>
            <SideBar search={search} setSearch={setSearch} filterByPhase={filterByPhase} setFilterByPhase={setFilterByPhase} filterByDiscipline={filterByDiscipline} setFilterByDiscipline={setFilterByDiscipline} />
            <BlogList blogs={filteredBlogs}/>
        </div>
    )
}