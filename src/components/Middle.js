import React from 'react'
import developer from "../images/developer.png"
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import git from "../images/git.jpeg"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Middle() {
  return (
    <div>
      <div style={{backgroundColor:"white",padding:"15px",borderRadius:"10px"}}>
<img style={{width:"55px",borderRadius:"40px", alignContent:"left"}} src={developer}></img>

<TextField variant='outlined' label="Start a post"  style={{width:"450px",marginLeft:"70px"}} InputProps={{sx:{borderRadius:150}}}/><br></br>
<ImageIcon  style={{width:"30px",marginLeft:"10px"}}></ImageIcon>
        <VideocamIcon  style={{width:"30px",marginLeft:"200px"}}/>
        <ArticleIcon  style={{width:"30px",marginLeft:"200px"}}/>
        {/* <CalendarMonthIcon style={{width:"30px",marginLeft:"140px"}}/> */}
      </div>
      <div style={{paddingTop:"20px"}}>
       <Card>
        <CardContent>
            <div style={{display:"flex"}}>
            <img style={{width:"40px"}} src={developer} ></img>
<div style={{marginLeft:"10px"}}>
<Typography>Name</Typography>
<Typography sx={{color:"#BFBFBF"}}>Designation</Typography>
            </div>

</div>
<h5>Description</h5>

        </CardContent>
        <CardMedia
        component="img"
        height={300}
        image={git}>

        </CardMedia>
       </Card>
      </div>
    </div>
  )
}

export default Middle
