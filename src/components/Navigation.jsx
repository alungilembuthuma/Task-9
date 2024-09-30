import React from 'react'

export default function Navigation() {
  return (
      <nav>
        <ul style={{ display: "flex", color: 'black', fontSize: "30px", marginLeft: "60%", fontFamily: "cursive" }}>
          <a href='/About' style={{ color: 'BLACK', marginRight: "30px" }}>About</a>
          <a href='/Contact' style={{ color: 'BLACK', marginRight: "30px" }}>Contact</a>
          <a href='/Login' style={{ color: 'BLACK', marginRight: "30px" }}>Login</a>
        </ul>
      </nav>
   
  )
}
