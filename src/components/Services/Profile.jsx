import React, { useEffect, useState } from "react";
import pic from "../Images/profile.jpg";
import {Link} from "react-router-dom"
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
    const colRef = collection(db,"Posts");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setposts(docs.filter((e)=>(e.userid===userid)));
  }


  const fetchData = async () => {
    const docRef = doc(db, "Profiles",userid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setprofiledata(docSnap.data())
    } else {
      alert("you have not completed your profile yet ....")
    }
  }


  useEffect(() => {
    fetchData();
    fetchData1()
  }, []);

  return (
    <div>
    <div class="p-5">
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
                                  <p class="mt-2 text-gray-500">Linkedin Url : {profiledata.linkedin}</p>
                                  <p class="mt-2 text-gray-500">Email : {profiledata.email}</p>
                                </div>  
                               <div class="mt-12 flex flex-col justify-center">    
                               <p class="text-gray-600 text-center font-light lg:px-16">{profiledata.about}</p>  
                                </div>
                               </div>
                               </div>
                               <div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
         {
          posts.map(posts =>(
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
                src={posts.pic}
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    {posts.name}
                  </Typography>
                  {/* <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div> */}
                </div>
                <Typography color="blue-gray">{posts.sub.slice(0,40)}</Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-3 ">
              <Typography>
               {posts.content}
              </Typography>
            </CardBody>
            <div className='flex items-center justify-between m-3'>
            <p className=' text-red-600 font-bold text-sm cursor-pointer' placeholder="k" onClick={
                                            async (e) => {
                                                deleteDoc(doc(db,"Posts",posts.id));
                                                fetchData1();
                                                alert("Deleted from favourites");
                                            }
                                    }>
          Delete
        </p>
        <p className=' text-gray-600 font-bold text-sm' placeholder="k">
          {posts.date}
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