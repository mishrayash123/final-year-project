import React, { useEffect, useState } from "react";
import pic from "../Images/profile.jpg";
import {Link} from "react-router-dom"
import { db } from "../../firebase/setup"; 
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";
import '../Css/All.css'
import {useNavigate} from 'react-router-dom'
import { useLocation } from "react-router-dom";

function Profile() {
  const [profiledata,setprofiledata] = useState([]);
  const nav = useNavigate();
  const location = useLocation();

  const fetchData = async () => {
    const colRef = collection(db,"Profiles");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setprofiledata(docs);
  }

  useEffect(() => {
    
    fetchData();
  }, []);


  return (
    <div class="p-5">
      {
        profiledata.filter((e)=>(e.linkedin===location.state.id)).map(profiledata =>(
      <div class="p-8 bg-white shadow mt-24">  
      <div class="grid grid-cols-1 md:grid-cols-3">   
       <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">     
        <div>     
           <p class="font-bold text-gray-700 text-xl">22</p>     
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
                                {/* <button  class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" onClick={()=>{
                                  nav('/edit')
                                }}>Edit</button>    */}
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
                                ))
                              }
                               </div>
  );
}

export default Profile;