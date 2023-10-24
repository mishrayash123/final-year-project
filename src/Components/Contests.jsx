import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

const Contests = props => {
    const location = useLocation();
    const data = location.state;
    const [search, setSearch] = useState(data.cat);
    const [contest, setcontest] = useState([]);
    

    useEffect(() => {
        getcontest();
      }, []);


      const getcontest = async () => {
        const result = await Axios.get(`https://kontests.net/api/v1/${search}`);
        setcontest(result.data);
    }

    return(
        <div className="m-5 mb-5" >
             <div className="row row-cols-1 row-cols-md-3 mx-3 g-4">
           {
            contest.map(contest => (
                <div className="col">
                    <div className="card bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  text-black ">
                        <div className="card-body">
                            <ul className="list-group list-group-flush  border border-light border  border-opacity-10">
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        contest.name
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">
                                        {
                                        search
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Status : {
                                        contest.status
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">In 24 hour : {
                                        contest.in_24_hours
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">Start Time : {
                                        contest.start_time
                                    }</h6>
                                </li>
                                <li className="list-group-item bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  border border-light border  border-opacity-10">
                                    <h6 className="text-light">End Time : {
                                        contest.end_time
                                    }</h6>
                                </li>
                                <div className="border border-light border  border-opacity-25 ">
                                <a href={
                                contest.url
                            }
                        
                            className="btn  text-light bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900  w-100"
                            target="_blank"
                            rel="noreferrer noopener">Register &#10148;</a> 
                            </div> 
                            <div className="border border-light border  border-opacity-25">
                            <button  className="btn  text-light bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 w-100"> Add to fav &#9829;</button>
                    </div>
                    </ul>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
      </div>
    );
};




export default Contests;