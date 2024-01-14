import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import '../Css/All.css'
import {useNavigate} from 'react-router-dom'
import pic from "../Images/profile.jpg"



function Profiles() {
  const [profiles, setprofiles] = useState([]);
  const [cat,setcat] = useState("")
  const [Search,setSearch] = useState("")
  const nav = useNavigate();


 

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
    setprofiles(data)
  } else {
    alert("Something went wrong");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  useEffect(() => {
    
    fetchData();
  }, []);
 

    return (
      <div>
        <div className=" flex justify-center items-center">
	<div className="container mx-auto bg-blue-600 p-14">
		<form>
			<h1 className="text-center font-bold text-white text-4xl mb-5">Search Profiles</h1>
				<div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-gray-400 flex-grow bg-gray-300 rounded-lg py-2 px-2 " type="text" placeholder="Search your profile's name" value={Search} onChange={(e)=>{
            setSearch(e.target.value)
          }}/>
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto my-2">
						<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg" onChange={(e)=>{
              setcat(e.target.value)
              console.log(e.target.value)
            }}>
            <option value="" >Category</option>
            <option value="" >All</option>
            <option value="1st year">1st year</option>
              <option value="2nd year">2nd year</option>
              <option value="3rd year">3rd year</option>
              <option value="4th year">4th year</option>
              <option value="Teacher">Teacher</option>
              <option value="Pass out">Pass out</option>
          </select>
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin my-2">Search</button>
					</div>
				</div>
		</form>
	</div>
</div>
      <div class="w-full  p-4  sm:p-8 ">
   <div class="flow-root">
        <ul role="list" class="">
        {
          profiles.filter((e)=>(e.category!=undefined)).filter((e)=>(e.category.toLowerCase().includes(cat.toLowerCase()))).filter((e)=>(e.name.toLowerCase().includes(Search.toLowerCase()))).map(profiles =>(
            <a href=''
             onClick={
              (e) => {
                nav('/Gotoprofile', { state: { id:profiles._id} });
              }
          }
          >
            <li class="py-3 sm:py-4 shadow-2xl rounded-lg">
                <div class="flex items-center p-2">
                    <div class="flex-shrink-0">
                        <img class="w-16 h-16 rounded-full max-[412px]:w-8 max-[412px]:h-8" src={pic || profiles.image} alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-base font-bold text-gray-900 truncate dark:text-white max-[412px]:text-sm">
                        {profiles.name}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Cs & IT
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white max-[412px]:text-sm">
                    B-Tech {profiles.category}
                    </div>
                </div>
            </li>
            </a>
            ))
         }
        </ul>
   </div>
</div>

      </div>
    );
  }
  
  export default Profiles;