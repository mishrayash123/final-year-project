import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import {  Grid  } from "@mui/material";
import FitbitIcon from '@mui/icons-material/Fitbit';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  return (
    <div style={{padding:"10px",borderBottom:"1px solid grey"}}>
      <Grid container>
        <Grid item xs={6}>
            {/* Image */}
            <FitbitIcon style={{width:"30px",marginLeft:"80px"}}/>
            <SearchIcon style={{width:"30px",marginLeft:"20px"}}/>

        </Grid>
        <Grid item xs={6}>
          <HomeIcon style={{width:"30px",marginLeft:"20px"}}/>
        <PeopleIcon style={{width:"30px",marginLeft:"20px"}}/>
        <FeedIcon style={{width:"30px",marginLeft:"20px"}}/>
            <MessageIcon style={{width:"30px",marginLeft:"20px"}}/>
<PersonIcon style={{width:"30px",marginLeft:"20px"}}/>

        </Grid>

      </Grid>
    </div>
  )
}

export default Navbar
