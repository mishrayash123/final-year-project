import {Button, ListItem, ListItemText, Paper,Avatar,List } from '@mui/material'

import React from 'react'

function Invitation() {
  return (
    <div>
      <Paper>
        <List>
            <ListItem>
                <Avatar/>
                    <ListItemText/>
              <Button variant="outlined" size='small'>Reject</Button>
              <Button sx={{ml:"5px"}} variant="contained" size="small">Accept</Button>
            </ListItem>
        </List>
      </Paper>
    </div>
  )
}

export default Invitation
