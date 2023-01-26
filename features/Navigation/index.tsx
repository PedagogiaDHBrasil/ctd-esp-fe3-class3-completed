import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className='container-fluid'>
        <Link href="/">
          <Image src="/logo.png" alt='logo' width={50} height={50}/>
        </Link>
        <Link href="/products"><a className='nav-link'>Products</a></Link>
        <Link href="/products/offers"><a className='nav-link'>Offers</a></Link>
      </div>
    </nav>
  )
}

export default NavBar