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
  const [Search,setSearch] = useState(" ")
  const nav = useNavigate();


 

  const fetchData = async () => {
    const colRef = collection(db,"Profiles");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setprofiles(docs);
    console.log(docs)
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
						<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>Teacher</option>
            <option value="net">1st Year</option>
            <option value="org">2nd Year</option>
            <option value="io">3rd Year</option>
            <option value="io">Final Year</option>
            <option value="io">Pass Out</option>
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
          profiles.map(profiles =>(
            <a href=''
             onClick={
              (e) => {
                nav('/Gotoprofile', { state: { id:profiles.linkedin} });
              }
          }
          >
            <Card className="cardwid shadow-lg m-2" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src={profiles.image}
          alt="ui/ux review check"
          className='rounded-lg wid'
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