import React from 'react'
import './../assets/global.css'
import Link from 'next/link'

export default function Header() {
  return (
 <nav>
    <div className="nav">
      <div className="logo"><Link href='/' >Dev Katyal</Link></div>
      <div className="r-s">
        <Link className="r-s1 n1"  href="#aboutme">About me</Link>
        <Link className="r-s1 n2" href="#skills">Skills</Link>
        <Link className="r-s1 n3" href="#work">Projects</Link>
        <Link className="r-s2" href="mailto:dev@strxt.com">Let's Connect</Link>
      </div>
    </div>
  </nav>
  )
}
