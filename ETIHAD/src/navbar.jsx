import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    const navStyles={
        background:'navy',
        padding:'15px 20px',
        display:'flex',
        alignItems:'center',
        gap:'30px',
        boxshadow:'0 2px 4px aqua'
    };
    const linkStyles={
        color:'white',
        textDecoration:'none',
        fontSize:'1em',
        fontWeight:'normal',
        padding:'5px 10px',
        borderRadius:'3px'
    };
    const logoStyles={
        color:'white',
        fontSize:'1.5em',
        fontWeight:'bold',
        marginRight:'auto'
    };
  return (
      <nav style={navStyles}>
        <div style={logoStyles}>ETIHAD</div>
        <Link to='/home' style={linkStyles}>HOME</Link>
        <Link to='/destination' style={linkStyles}>DESTINATION</Link>
        <Link to='/book' style={linkStyles}>BOOK</Link>
      </nav>
  )
}
