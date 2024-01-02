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



function Profiles() {
  // const [profiles, setprofiles] = useState([]);
  const profiles = ["a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f',"a",'b','c','d','e','f']
  const nav = useNavigate();


 

  const fetchData = async () => {
   
  }

  useEffect(() => {
    
    fetchData();
  }, []);
 

    return (
      <div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 pt-3 gap-8 w-[90%] max-[640px]:w-1/2 " role="group">
         {
          profiles.map(profiles =>(
            <a href=''
             onClick={
              (e) => {
                nav('/Gotoprofile', { state: { id:1,isincart:false} });
              }
          }
          >
            <Card className="cardwid shadow-lg m-2" placeholder="k">
      <CardHeader floated={false} color="blue-gray" placeholder="k">
        <img
          src={pic}
          alt="ui/ux review check"
          className='rounded-lg wid'
        />
      </CardHeader>
      <CardBody placeholder="k">
        <div className="mb-3 ">
          <Typography variant="h6" color="blue-gray" className="font-medium" placeholder="k">
           Yash Kumar Mishra
          </Typography>
        </div>
        <div className='flex items-center justify-between'>
        <Typography color="gray" className=' text-black font-bold' placeholder="k">
          B-Tech Final Year
        </Typography>
        <Typography
          placeholder="k"
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
          Batch 2024
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
    );
  }
  
  export default Profiles;