import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ImagesList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  /* background: 'rgb(168, 250, 250)', */
  color: 'rgb(66, 66, 66)',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'rgb(66, 66, 66)',
  textDecoration: 'none'
}

export default Header;