import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import {  Grid  } from "@mui/material";
const Navbar = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
            {/* Image */}
            <SearchIcon/>

        </Grid>
        <Grid item xs={6}>
        <PeopleIcon/>
        <FeedIcon/>
            <MessageIcon/>

        </Grid>

      </Grid>
    </div>
  )
}

export default Navbar
