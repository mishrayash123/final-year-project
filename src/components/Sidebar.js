import React from 'react'
import git from "../images/git.jpeg"
// import PersonIcon from '@mui/icons-material/Person';
import developer from "../images/developer.png"
// import PersonIcon from '@mui/icons-material/Person';
function Sidebar() {
  return (
    <div style={{backgroundColor:"white",border:"1px solid #D6D6D6",width:"230px",height:"370px",borderRadius:"10px",marginLeft:"55px"}}>
       
        <img style={{height:"65px",width:"230px",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src={git}></img>

        <div style={{textAlign:"center"}}>
<div style={{position:"relative",left:"37"}}>
        <img style={{width:"65px",borderRadius:"40px"}} src={developer}></img>

        <h3 style={{textAlign:"center"}}>Name</h3>
        </div>
        <h4 style={{color:"#6F6F6F",textAlign:"center"}}>Designation</h4>
            <h5 style={{ fontweight:"100", color:"#6F6F6F",textAlign:"center"}}>Connections</h5>
            <h5 style={{fontweight:"100", color:"#6F6F6F",textAlign:"center"}}>Invitation</h5>
        </div>
    
    </div>
  )
}

export default Sidebar

