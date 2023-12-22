import React from 'react'
import Sidebar from './Sidebar'
import Middle from './Middle'
import RightBar from './RightBar'
import { Grid } from '@mui/material'
function Home() {
    return (
        <div style={{backgroundColor:"#F6F7F3",height:"100%",padding:"20px"}}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={6}>
                    <Middle/>
                </Grid>
                <Grid item xs={3}>
                    <RightBar/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
