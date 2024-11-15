import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="footer">
       <ul>
          <Link href="#" className="active"> Home</Link>
        <Link href="#services">Services</Link>
         <Link href="#about">About us</Link>
        <Link href="#contact">Contact</Link>
          </ul>
        <p> @Rent Homes.| All rights reserved.</p>

        </footer>
      
    </div>
  )
}

export default footer
