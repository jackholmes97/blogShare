import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <h1>Blog Site</h1>
            <NavLink to="/">Browse</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogform">Submit</NavLink>
        </div>
    )
}