import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";


const NavBar = () => {

    const links = [
        {'link':'/','name':'dashboard'},
        {'link':'/issue','name':'issue'},

    ]

  return (
    <nav className='flex space-x-6 border-b mb-4 items-center py-4 px-4'>
      <Link href='/'><FaBug></FaBug></Link>
      <ul className='flex space-x-6'>
        {
            links.map(link=>
           
                <Link className=' text-zinc-600 hover:text-zinc-800 transition-colors' href={link.link}>{link.name}</Link>
           )
        }
      </ul>
    </nav>
  )
}

export default NavBar
