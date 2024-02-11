import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

function Header() {
  return (
    <>
        <div className="navbar">
            <NavLink to="/">
                <h1 style={{fontSize: "3rem"}}>VerdeVistaShop</h1>
            </NavLink>
            <Nav />
        </div>
    </>
  )
}

export default Header
