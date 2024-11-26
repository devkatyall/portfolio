'use client'


import React, {useState} from 'react'
import './../assets/global.css'
import Link from 'next/link'

export default function Header() {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
 <nav>
    <div className="nav">
      <div className="logo"><Link href='/' >Dev Katyal</Link></div>
      <button className="menu-button" onClick={toggleDrawer}>
          ☰
      </button>
      <div className="r-s">
        <Link className="r-s1 n1"  href="#aboutme">About me</Link>
        <Link className="r-s1 n2" href="#skills">Skills</Link>
        <Link className="r-s1 n3" href="#work">Projects</Link>
        <Link className="r-s2" href="mailto:dev@strxt.com">Let's Connect</Link>
      </div>
    </div>
    {isDrawerOpen && (
        <div className="drawer">
          <button className="close-drawer" onClick={toggleDrawer}>×</button>
          <Link className="drawer-link" href="#aboutme" onClick={toggleDrawer}>About me</Link>
          <Link className="drawer-link" href="#skills" onClick={toggleDrawer}>Skills</Link>
          <Link className="drawer-link" href="#work" onClick={toggleDrawer}>Projects</Link>
          <Link className="drawer-link" href="mailto:dev@strxt.com" onClick={toggleDrawer}>Let's Connect</Link>
        </div>
      )}
  </nav>
  )
}
