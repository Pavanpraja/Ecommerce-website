import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <>
        <div className="navbar">
            <NavLink to="/">
                <h1>QuirkCart</h1>
            </NavLink>
            <Nav />
        </div>
    </>
  )
}

export default Header
