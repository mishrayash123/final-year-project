import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/setup"; 
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";
import {deleteDoc} from "firebase/firestore";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import '../Css/All.css'
import {useNavigate} from 'react-router-dom'

function Profile() {
  const [profiledata,setprofiledata] = useState([]);
  const [posts,setposts] = useState([])
  const nav = useNavigate();
  const userid = localStorage.getItem("useridengtrack");


  const fetchData1 = async () => {
    try {
      const response = await fetch(
        "https://eng-backend.onrender.com/getpost",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
      if (response.ok) {
        const data = await response.json();
        setposts(data.filter((e)=>(e.userid===userid)));
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }


  const fetchData = async () => {
    try {
      const sessionToken=localStorage.getItem("engtracktoken");
  const response = await fetch(
    "https://eng-backend.onrender.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({sessionToken}),
    }
  );
  if (response.ok) {
    const data = await response.json();
    setprofiledata(data)
  } else {
    alert("Something went wrong");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  const remove = async(postid)=>{
    try {
      const response = await fetch(
        `https://eng-backend.onrender.com/deletepost/${postid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Removed");
        fetchData1()
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }


  useEffect(() => {
    fetchData();
    fetchData1()
  }, []);

  return (
    <div>
    <div class="p-5">
    {
          profiledata.filter((e)=>(e._id===userid)).map(profiledata =>(
      <div class="p-8 bg-white shadow mt-24">  
      <div class="grid grid-cols-1 md:grid-cols-3">   
       <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">     
        <div>     
           <p class="font-bold text-gray-700 text-xl">{posts.length}</p>     
              <p class="text-gray-400">Total Post</p>    
                </div>    
                  {/* <div>     
                          <p class="font-bold text-gray-700 text-xl">10</p>    
                              <p class="text-gray-400">Photos</p>   
                                 </div>      
                                  <div>      
                                     <p class="font-bold text-gray-700 text-xl">89</p>     
                                 <p class="text-gray-400">Comments</p>  
                                  </div>     */}
                              </div>  
                                <div class="relative">   
                                 <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                 <img className="border-2 rounded-full w-48 h-48" src={profiledata.image}   />
                                 </div>  
                                </div>   
                               <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <button  class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={()=>{
                                  nav('/edit')
                                }}>Edit</button>   
                                </div> 
                                </div> 
                                <div class="mt-20 text-center border-b pb-12">  
                                 <h1 class="text-4xl font-medium text-gray-700">{profiledata.name} <span class="font-light text-gray-500"></span></h1>  
                                 <p class="font-light text-gray-600 mt-3">CS & IT {profiledata.category}</p>  
                                 <p class="mt-8 text-gray-500">{profiledata.subtitle}</p> 
                                 <p class="mt-2 text-gray-500">Phone No : {profiledata.phone}</p>
                                  <p class="mt-2 text-gray-500">Current Address : {profiledata.caddress}</p> 
                                  <p class="mt-2 text-gray-500">Parmanent Address : {profiledata.paddress}</p>
                                  <p class="mt-2 text-gray-500">Whatsapp No : {profiledata.whatsapp}</p>
                                  <p class="mt-2 text-gray-500">Email : {profiledata.email}</p>
                                  <a  href={profiledata.Linkedinid} className="flex justify-center mt-1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                  <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                  </svg></a>
                                </div>  
                               <div class="mt-12 flex flex-col justify-center">    
                               <p class="text-gray-600 text-center font-light lg:px-16">{profiledata.about}</p>  
                                </div>
                               </div>
                               ))}
                               </div>
                               <div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
         {
          posts.sort(function(x, y){
            return Date.parse(y.createdAt) - Date.parse(x.createdAt);
        }).map(posts =>(
            <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg">
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-4 px-2"
            >
              <Avatar
                size="lg"
                variant="circular"
                className="w-[50px] h-[50px] rounded-full"
                src={posts.profileimage}
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {posts.profilename}
                  </Typography>
                </div>
                <Typography color="blue-gray">{posts.profilesub.slice(0,40)}</Typography>
                <div className='flex justify-start '>
        <p className=' text-gray-600 font-bold text-sm' placeholder="k">
          {posts.date}
        </p>
        </div>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-3 ">
              <Typography>
               {posts.content}
              </Typography>
              <Typography className='text-blue-600 font-bold mt-10'>
               <a href={posts.link} target='_blank'>{posts.link}</a>
              </Typography>
              {posts.image && (
                <img src={posts.image}  className='mt-3 w-[400px] h-[350px]'/>
              )}
            </CardBody>
            <div className='flex items-center justify-center m-3'>
            <p className=' text-red-600 font-bold text-sm cursor-pointer' placeholder="k" onClick={
                                            async (e) => {
                                                remove(posts._id);
                                            }
                                    }>
          Delete
        </p>
        </div>
          </Card>
          ))
         }
     </div>
      </div>
                               </div>
  );
}

export default Profile;