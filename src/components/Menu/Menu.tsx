'use client'

import Link from "next/link"
import './Menu.scss'
import { IoHomeSharp } from "react-icons/io5";
import { FaDumbbell } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
 const menuRef = useRef(null)
 const path = usePathname()
 const [hasScrolled, sethasScrolled] = useState(false)

 useEffect(() => {
   const handleScroll = () => {
        let scrollPosY = window.scrollY

        if(scrollPosY > 0) {
            sethasScrolled(true)
        } else {
            sethasScrolled(false)
        }

   }
   window.addEventListener("scroll", handleScroll)
 
   return () => {
     window.removeEventListener("scroll", handleScroll)
   }
 }, [])

   return (
  
    <nav className={`menu ${hasScrolled ? "hasScrolled" : ""}`} ref={menuRef}>
        <Link href="/" className={path === '/' ? 'current-Link' : ''}>
            <IoHomeSharp size={24} />
        </Link>
        <Link href="/AddTreino" className={path === '/AddTreino' ? 'current-Link' : ''}>
            <VscAdd size={24} />
        </Link>
        <Link href="/Cadastro" className={path === '/Cadastro' ? 'current-Link' : ''}>
            <FaWpforms size={24} />
        </Link>
        <Link href="/Treino" className={path === '/Treino' ? 'current-Link' : ''}>
            <FaDumbbell size={24} />
        </Link>
       
    </nav>
   
  )
}

export default Menu