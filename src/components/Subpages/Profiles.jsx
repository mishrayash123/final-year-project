import axios from 'axios';
import React, { useState, useEffect } from 'react';
import pic from "../Images/profile.jpg"
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
import { auth,db } from "../../firebase/setup";
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";



function Profiles() {
  const [profiles, setprofiles] = useState([]);
  const [cat,setcat] = useState("")
  const [Search,setSearch] = useState("")
  const nav = useNavigate();


 

  const fetchData = async () => {
    const colRef = collection(db,"Profiles");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setprofiles(docs);
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
      <div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%]" role="group">
         {
          profiles.filter((e)=>(e.category.toLowerCase().includes(cat.toLowerCase()))).filter((e)=>(e.name.toLowerCase().includes(Search.toLowerCase()))).map(profiles =>(
            <a href=''
             onClick={
              (e) => {
                nav('/Gotoprofile', { state: { id:profiles.userid} });
              }
          }
          >
            <Card className="cardwid shadow-lg m-2" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src={profiles.image}
          alt="ui/ux review check"
          className='rounded-full wid mx-auto'
        />
      </CardHeader>
      <CardBody placeholder="k">
        <div className="mb-3 ">
          <Typography variant="h6" color="blue-gray" className="font-medium" placeholder="k">
           {profiles.name}
          </Typography>
        </div>
        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
          B-Tech {profiles.category}
        </Typography>
        <Typography
          placeholder="k"
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
          Cs & IT
          </Typography>
        </div>
        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        </div> */}
      </CardBody>
    </Card>
    </a>
          ))
         }
     </div>
      </div>
      </div>
    );
  }
  
  export default Profiles;