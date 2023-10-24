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
             <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-4  gap-16 mx-auto" role="group">
           {
            contest.map(contest => (      
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{search}</h5>
    <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-xl font-semibold">{contest.name}</span>
    </div>
    <ul role="list" class="space-y-5 my-7">
        <li class="flex space-x-3 items-center">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{contest.status}</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">In 24 hour : {
                                        contest.in_24_hours
                                    }</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Start Time : {
                                        contest.start_time
                                    }</span>
        </li>
        <li class="flex space-x-3">
            <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">End Time : {
                                        contest.end_time
                                    }</span>
        </li>
    </ul>
    <a href={contest.url} target="_blank"
                             rel="noreferrer noopener">
    <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Register &#10148;</button>
    </a>
</div>    
            ))
        }
        </div>
      </div>
    );
};




export default Contests;