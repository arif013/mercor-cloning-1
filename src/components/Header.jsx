import React from 'react'

function Header() {
    const styles={
     main:{
        position:"fixed",
        zIndex: 10,
        width:"90%",
        top:20,
        left:90,
        display:"flex",
        justifyContent: "space-between", 
        padding: "0px",
        fontSize:"22px",
        color:"white",
        
     },   
     joinBeta:{
        backgroundColor:"white",
        color:"black",
        padding:"6px",
        borderRadius:"5px",
        styleType:"none",
     }
    }
  return (
    
    <div style={{width:"90%"}}>
        <ul style={styles.main}>
            <li style={{listStyle:"none"}}>chronicle</li>
            <li style={styles.joinBeta}>Join beta</li>
        </ul>
    </div>
  )
}

export default Header