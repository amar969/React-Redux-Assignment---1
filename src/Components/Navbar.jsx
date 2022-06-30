import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return(
        <>
        <Link to="/"> Todo </Link>
        <Link to="/Counter" > Counter </Link>
        <Link to="/TodoItem/:id"></Link>
        </>
    )
}