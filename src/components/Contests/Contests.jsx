import { useState,useEffect} from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { useLocation } from "react-router-dom";



const Contests =()=>{
    const [contests,setcontests] = useState([])
    const location = useLocation();

    const fetchData = async () => {
      fetch(`https://contest-hive.vercel.app/api/${location.state.id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setcontests(data.data)
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
      }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
           <div className='my-3'>
           <h2 className="text-black font-bold text-xl text-center my-3">{location.state.id}</h2>
             <div>
              {contests.length===0 && (
                <h3 className="text-red-800 font-bold text-xl text-center my-3">Sorry There are no Contests.....</h3> 
              )}
            <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
          {
           contests.map(contest =>(
            <Card color="transparent"  className="w-full max-w-[26rem] shadow-2xl rounded-lg">
            <CardBody className="mb-1 flex flex-col text-center">
            <Typography color="blue-gray" className="text-black font-bold">{contest.title}</Typography>
            <Typography color="blue-gray">Start Time : {contest.startTime}</Typography>
              <Typography> End Time : {contest.endTime}</Typography>
              <Typography> Duration : {contest.duration}</Typography>
              <Typography className='text-blue-800 font-bold'>
               <a href={contest.url} target='_blank'>Url</a>
              </Typography>
            </CardBody>
          </Card>
          ))
         }
          </div>
          </div>
      </div> 
        </div>
    )
}

export default Contests;