import React from "react"

const Final_Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", background: "#91d4d5", margin: "28px 150px", textAlign: "center", borderRadius: "100px", }}>Good job!</h1>
    </header>
  )
}

export default Final_Header;


{/* <header style={headerStyle}>
<h1 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#fff", textAlign: "center", background: "#ff48c4", margin: "0px 150px", borderRadius: "100px",}}>Ready to workout?</h1>
</header> */}