import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <h1>BlogShare</h1>
            <div className='links'>
                <NavLink className='navLink' to="/">Browse </NavLink>
                <NavLink className='navLink'to="/about"> About </NavLink>
                <NavLink className='navLink'to="/blogform"> Submit</NavLink>
            </div>
        </div>
    )
}