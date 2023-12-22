import React from 'react'
import git from "../images/git.jpeg"
import PersonIcon from '@mui/icons-material/Person';
// import PersonIcon from '@mui/icons-material/Person';
function Sidebar() {
  return (
    <div style={{backgroundColor:"white",border:"1px solid #D6D6D6",width:"230px",height:"370px",borderRadius:"10px",marginLeft:"55px"}}>
        <image style={{height:"55px", width:"210px",}} src={git}></image>
        
        <div style={{textAlign:"center"}}>
        <PersonIcon style={{width:"65px",borderRadius:"40px"}}/>
            <h5 style={{ fontweight:"100", color:"#6F6F6F",textAlign:"center"}}>Connections</h5>
            <h5 style={{color:"#6F6F6F"}}>Invitation</h5>
        </div>
    
    </div>
  )
}

export default Sidebar

