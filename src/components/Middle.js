import React from 'react'
import developer from "../images/developer.png"
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import git from "../images/git.jpeg"
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useEffect, useRef } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import {auth,database} from '../firebase/setup'
import Post from "../components/Post"
import Filepost from './Filepost';
import { useState } from 'react'

function Middle() {
  
  const postRef = useRef(null)
  const filePostRef = useRef(null)
  const [posts,setPosts] = useState([])

  const getPost = ()=>{
    setTimeout(async()=>{
      const postDocument = doc(database,"Users", `${auth.currentUser?.uid}`)
      const postRef = collection(postDocument, "Posts")
      try{
       const data = await getDocs(postRef)
       const filteredData = data.docs.map((doc)=>({
         ...doc.data(),
         id:doc.id
       }))
       setPosts(filteredData)
      }catch(err){
        console.error(err)
      }
    },1000)
  }

  useEffect(()=>{
    getPost()
  },[posts])
  return (
    <div>
      <div style={{backgroundColor:"white",padding:"15px",borderRadius:"10px"}}>
<img style={{width:"55px",borderRadius:"40px", alignContent:"left"}} src={developer}></img>

<TextField onClick={()=> postRef.current?.click()} variant='outlined' label="Start a post"  style={{width:"450px",marginLeft:"70px"}} InputProps={{sx:{borderRadius:150}}}/><br></br>
<Post ref={postRef}/>
         <Filepost ref={filePostRef}/>
<ImageIcon onClick={()=> filePostRef.current?.click()} style={{width:"30px",marginLeft:"10px"}}></ImageIcon>
        <VideocamIcon  style={{width:"30px",marginLeft:"200px"}}/>
        <ArticleIcon  style={{width:"30px",marginLeft:"200px"}}/>
        {/* <CalendarMonthIcon style={{width:"30px",marginLeft:"140px"}}/> */}
      </div>
      <div style={{paddingTop:"20px"}}>{posts.map((post)=>{
          return<Card sx={{mt:"10px"}}>
            <CardContent>
                <div style={{display:"flex"}}>
                <img src={git} style={{width:"50px",borderRadius:"40px"}}/>
               <div style={{marginLeft:"10px"}}>
               <Typography>{post.username}</Typography>
               <Typography sx={{color:"#BFBFBF"}}>{post.designation}</Typography>
               </div>  
                </div>
                <h5>{post.textPost}</h5>
            </CardContent>
            {post.filePost && <CardMedia
            component="img"
            height={250}
            image={post.filePost ?? git}>

            </CardMedia>}
        </Card>
        })}
      </div>
    </div>
  )
}

export default Middle
