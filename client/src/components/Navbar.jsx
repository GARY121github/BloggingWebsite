import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="relative">
    <nav className="bg-black p-4 flex flex-wrap justify-around fixed w-full top-0 z-10">
        <Link to="/" className="text-white text-3xl">Blogging Website</Link>

        <ul className="flex flex-wrap justify-around w-1/5">
            <NavLink to="/" className={({isActive}) => `text-2xl cursor-pointer hover:text-blue-600 self-center ${isActive ? "text-blue-600" : "text-white"}`}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => `text-2xl cursor-pointer hover:text-blue-600 self-center ${isActive ? "text-blue-600" : "text-white"}`}>Blog</NavLink>
            <NavLink to="/create" className={({isActive}) => `text-2xl cursor-pointer hover:text-blue-600 self-center ${isActive ? "text-blue-600" : "text-white"}`}>Create</NavLink>
            
        </ul>

        <button className="text-white bg-blue-600 text-lg w-20 rounded hover:bg-blue-700">login</button>
    </nav>
    </div>
  )
}

export default Navbar