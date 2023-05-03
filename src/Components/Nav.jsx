import { Link } from 'react-router-dom'
import './Nav.css'
import React from 'react'

function Nav() {
  return (
    <div className='mainDivNav'>
        
        <div className='linkDiv'>
            <Link to='/' >Home</Link>
            <Link to='/userdetails'></Link>
            <Link><input className='search' type='text' /></Link>

        </div>
        
     </div>
  )
}

export default Nav