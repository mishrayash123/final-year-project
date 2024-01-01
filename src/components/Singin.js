import React from "react";
import { useState } from 'react';

import { Button, Grid, TextField } from "@mui/material";
import logo from "../images/logo.png";
import developer from "../images/developer.png";
import { ToastContainer, toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth,database,googleProvider } from "../firebase/setup";
import { addDoc,collection, setDoc,doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
function Singin() {
  const navigate=useNavigate()
    const [username,setUsername] = useState("")
    const [designation,setDesignation] = useState("")

const addUser =async()=>
{
    const userRef = doc(database,"Users",auth.currentUser?.uid)
    try{
        await setDoc(userRef,{
          username:username,
          email:auth.currentUser?.email,
          designation:designation
          // profile_image:auth.currentUser?.photoURL
        })
    }catch(err){
        console.error(err)
    }
  
}
const signInwithGoogle =async()=>
{
    !username && toast.warning("Please enter username")
    try{
        await signInWithPopup(auth, googleProvider)
         username && addUser()
         navigate("/main")
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
          <img src={logo} style={{ width: "50px" }} />
          <h2 style={{ fontWeight: "100", fontSize: "60px", color: "#B26F28" }}>
            Tiwari ki lene k liye yaha login kre
          </h2>
          {/* <label style={{ color: "grey", fontSize: "10px" }}>
            Enter username
          </label> */}
          

          {/* <label></label>
          <br></br>
          <TextField
            size="small"
            variant="outlined"
            label="Desgnation"
            xs={{ width: "400px", mt: "5px" }}
          /> */}
          <br/>
          <label style={{color:"grey",fontSize:"10px",fontWeight:"bolder"}}>Enter Username</label>
            <br/>
            <TextField onChange={(e)=>setUsername(e.target.value)}
            size="small"
            variant="outlined"
            label="Username"
            xs={{ width: "400px", mt: "5px" }}
          />
          <br/>
          <label style={{ color: "grey", fontSize: "10px",fontWeight:"bolder" }}>
            Enter Designation
          </label>
          <br/>
           <TextField onChange={(e)=>setDesignation(e.target.value)}
            size="small"
            variant="outlined"
            label="Designation"
            xs={{ width: "400px", mt: "5px" }}
          />
          <br/>

          <Button onClick={signInwithGoogle} size='large' variant='contained' sx={{width:"250px",borderRadius:"50px",mt:"25px",height:"50px"}}>Signin</Button>
          
        </Grid>
        <Grid item xs={6}>
          <img style={{ width: "400px"}} src={developer} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Singin;
