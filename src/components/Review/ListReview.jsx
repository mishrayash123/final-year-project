import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";


const ListReview = () =>{
    const [posts,setposts] = useState([])
  const [content,setcontent] = useState("")
  const [date, setDate] = useState(new Date().toDateString());
  const nav = useNavigate();
  const userid = localStorage.getItem("useridengtrack");
  const [profileimage,setprofileimage] = useState("")
  const [profilename,setprofilename] = useState("")
  const [profilesub,setprofilesub] = useState("")




  const fetchData1 = async () => {
    try {
      const response = await fetch(
        "https://eng-backend.onrender.com/getreviews",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
      if (response.ok) {
        const data = await response.json();
        setposts(data)
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
    const data1 =data.filter((e) => ((e._id ===userid)));
    setprofileimage(data1[0].image)
    setprofilename(data1[0].name)
    setprofilesub(data1[0].subtitle)
  } else {
    alert("Something went wrong");
    nav('/edit')
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  const post = async()=>{
    try {
  const response = await fetch(
    "https://eng-backend.onrender.com/addtoreviews",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({content,userid,date,profileimage,profilename,profilesub}),
    }
  );

  if (response.ok) {
    const data = await response.json();
    alert("Posted");
    setcontent("")
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
<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h2 as="h1" className="text-xl font-bold leading-6 text-gray-900">
                      Write your suggestions here...
                      </h2>
                      <div className="mt-2">
                   <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                   <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." 
                   value={content}
                   onChange={(e)=>{
                    setcontent(e.target.value)
                   }}
                   ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      post()}}
                  >
                    Post
                  </button>
                </div>

                <div className='m-3'>
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 pt-3 gap-8 w-full sm:w-5/6 lg:w-3/4 xl:w-11/12" role="group">
    {
      posts.sort(function (x, y) {
        return Date.parse(y.createdAt) - Date.parse(x.createdAt);
      }).map(posts => (
        <ul class="">
  <li class="py-8 text-left border px-4 m-2">
    <div class="flex items-start">
      <img class="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle cursor-pointer" src={posts.profileimage} alt=""  onClick={(e) => {
                nav('/Gotoprofile', { state: { id: posts.userid } });
              }}/>
      <div class="ml-6">
        <p class="mt-5 text-base text-gray-900">{posts.content}</p>
        <p class="mt-5 text-sm font-bold text-gray-900">{posts.profilename}</p>
        <p class="mt-1 text-sm text-gray-600">{posts.date}</p>
      </div>
    </div>
  </li>
</ul>

      ))
    }
  </div>
</div>
        </div>
    )
}


export default ListReview;