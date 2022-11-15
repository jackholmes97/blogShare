import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
function SideBar({search, setSearch, filterByPhase, setFilterByPhase, filterByDiscipline, setFilterByDiscipline, topFiveBlogs}) {

    const renderFive = topFiveBlogs.map((blogs) => {
        return <li key={blogs.id}><a href={blogs.link} target="_blank">{blogs.title}</a></li>
    })

    return (
        <div className='sidebar'>
        <div className= "searchbar">
            <TextField
                id="outlined-search"
                sx={{background:"transparent"}}
                label={<SearchIcon/>}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {/* <label htmlFor="search">Search Blogs</label>
            <input type="text" id="search" placeholder="Type a Blog Title..." value={search} onChange={(e) => setSearch(e.target.value)}/> */}
        </div>
        <FormControl sx={{ m: 1, minWidth: 80, background: "transparent" }} size="small">
            <InputLabel id="discipline-filt">Discipline</InputLabel>
            <Select
                labelId="discipline-filt"
                id="discipline-filt"
                value={filterByDiscipline}
                label="discipline"
                onChange={(e) => setFilterByDiscipline(e.target.value)}
            >
                <MenuItem value="all">
                    <em>Select Discipline</em>
                </MenuItem>
                <MenuItem value="Software Engineer">Software Engineering</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                <MenuItem value="CyberSecurity">CyberSecurity</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80, background: "transparent" }} size="small">
                <InputLabel id="phase-filt">Phase</InputLabel>
                <Select
                    labelId="phase-filt"
                    id="phase-filt"
                    value={filterByPhase}
                    label="phase"
                    onChange={(e) => setFilterByPhase(e.target.value)}
                >
                    <MenuItem value="all">
                        <em>Select Phase</em>
                    </MenuItem>
                    <MenuItem value="Phase 1">Phase 1</MenuItem>
                    <MenuItem value="Phase 2">Phase 2</MenuItem>
                    <MenuItem value="Phase 3">Phase 3</MenuItem>
                    <MenuItem value="Phase 4">Phase 4</MenuItem>
                </Select>
        </FormControl>
        <div className='top5'>
            <h2>Most Viewed</h2>
            <ol>{renderFive}</ol>
        </div>
        </div>
    )
}

export default SideBar;