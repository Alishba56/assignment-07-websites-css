'use client'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from 'react-icons/rx';




const header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [attr, setAttr] = useState<string>('block')
  const [attr2, setAttr2] = useState<string>('none')

  const handleOpen = () =>{
    setAttr(isOpen? 'block' : 'none')
    setAttr2(isOpen? 'none' : 'block')
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <header className="header">
      <Link href="#home" className="logo">
        RENT
        <span>Homes</span>
      </Link>
    
      <nav className="navbar">
        <Link href="#home" className="active"> Home</Link>
        <Link href="#services">Services</Link>  
         <Link href="#about">About us</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <IoMenuSharp className= {`icon-menu ${attr}`} onClick={handleOpen}/>
      <RxCross2 className={`icon ${attr2}`}  onClick={handleOpen}/>
    </header>
    <nav className={`navbar-res ${attr2}`}>
      <Link href="#home"> <li>Home</li> </Link>
      <Link href="#services"> <li>Services</li> </Link>
      <Link href="#about"> <li>About us</li> </Link>
      <Link href="#contact"> <li>Contact</li> </Link>
     
    </nav>
    </div>
  )
}

export default header
