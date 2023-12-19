import React from "react";
import { useState } from 'react';

import { Button, Grid, TextField } from "@mui/material";
import logo from "../images/logo.png";
import developer from "../images/developer.png";
import { ToastContainer } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth,database,googleProvider } from "../firebase/setup";
import { addDoc,collection } from "firebase/firestore";
function Singin() {
    const [username,setUsername] = useState("")

const addUser =async()=>{
    const userRef = collection (database,"Users")
    try{
        await addDoc(userRef,{username:username})
    }catch(err){
        console.error(err)
    }
  
}
const signInwithGoogle =async()=>
{
    try{
        await signInWithPopup(auth, googleProvider)
        addUser()
    }
    catch(err)
    {
        console.error(err)
    }
 
}



  return (
    <div>
      <Grid container>
        <Grid item xs={6} sx={{ paddingLeft: "80px", paddingTop: "15px" }}>
          <ToastContainer autoClose={2000} position="top-right" />
          <image src={logo} style={{ width: "130px" }} />
          <h2 style={{ fontWeight: "100", fontSize: "60px", color: "#B26F28" }}>
            Tiwari ki lene k liye yaha login kre
          </h2>
          <label style={{ color: "grey", fontSize: "10px" }}>
            Enter username
          </label>
          

          <label></label>
          <br></br>
          <TextField
            size="small"
            variant="outlined"
            label="Desgnation"
            xs={{ width: "400px", mt: "5px" }}
          />
          <br/>
          <label style={{color:"grey",fontSize:"10px"}}>Designation</label>
            <br/>
            <TextField onChange={(e)=>setUsername(e.target.value)}
            size="small"
            variant="outlined"
            label="Username"
            xs={{ width: "400px", mt: "5px" }}
          />
          <br></br>
          <Button onClick={signInwithGoogle} size='large' variant='contained' sx={{width:"250px",borderRadius:"50px",mt:"25px",height:"50px"}}>Signin</Button>
          
        </Grid>
        <Grid item xs={6}>
          <image style={{ width: "500px" }} src={developer} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Singin;
