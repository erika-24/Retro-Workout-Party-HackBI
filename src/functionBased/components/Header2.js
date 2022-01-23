import React from "react"

const Header2 = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#fff", textAlign: "center", background: "#ff48c4", margin: "0px 150px", borderRadius: "100px",}}>Ready to workout?</h1>
    </header>
  )
}

export default Header2