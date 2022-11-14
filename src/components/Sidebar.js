import React from 'react';

function SideBar({search, setSearch, filterByPhase, setFilterByPhase, filterByDiscipline, setFilterByDiscipline}) {
    return (
        <div>
        <div className= "searchbar">
            <label htmlFor="search">Search Blogs</label>
            <input type="text" id="search" placeholder="Type a Blog Title..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
        <select value={filterByDiscipline} onChange={(e) => setFilterByDiscipline(e.target.value)}>
            <option value="all">Select Discipline</option>
            <option value="Software Engineer">Software Engineering</option>
            <option value="Data Science">Data Science</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="CyberSecurity">Cyber Security</option>
        </select>
        <select value={filterByPhase} onChange={(e) => setFilterByPhase(e.target.value)}>
            <option value="all">Select Phase</option>
            <option value="Phase 1">Phase 1</option>
            <option value="Phase 2">Phase 2</option>
            <option value="Phase 3">Phase 3</option>
            <option value="Phase 4">Phase 4</option>
        </select>
        </div>
    )
}

export default SideBar;