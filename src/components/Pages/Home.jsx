import {useNavigate} from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/setup"; 
import React, { useEffect, useState } from "react";
import { Fragment, useRef, } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {setDoc} from "firebase/firestore";
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Home = () => {
  const [profiledata,setprofiledata] = useState([]);
  const [posts,setposts] = useState([])
  const [content,setcontent] = useState("")
  const [date, setDate] = useState(new Date().toDateString());
  const nav = useNavigate();
  const userid = localStorage.getItem("useridengtrack");
  const [open, setOpen] = useState(false)
  const [id,setid]=useState(parseInt(Math.random()*1000).toString())
  const [search,setsearch] = useState("")

  const cancelButtonRef = useRef(null)

  const fetchData1 = async () => {
    const colRef = collection(db,"Posts");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setposts(docs);
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

  const post = ()=>{
    setDoc(doc(db,"Posts",id), {
      content:content,
      date: date,
      pic:profiledata.image,
      userid:userid,
      id:id,
      name:profiledata.name,
      sub:profiledata.subtitle
    }
    );
    alert("Post Uploaded Succesfully");
    fetchData1()
  }

  useEffect(() => {
    fetchData();
    fetchData1()
  }, []);

    return(
        <div>
         <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h1" className="text-xl font-bold leading-6 text-gray-900">
                      Write a post...
                      </Dialog.Title>
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
                      post()
                      setOpen(false)}}
                  >
                    Post
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
<nav class="bg-blue-800 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <a href="/profile"><img src={profiledata.image} class="w-[50px] h-[50px] rounded-full" alt="Flowbite Logo" /></a> 
  <div class="flex md:order-2">
    <div class="relative  ">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-[100%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." 
      value={search}
      onChange={(e)=>{
        setsearch(e.target.value)
      }}
      />
    </div>
  </div>
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul class="flex flex-col p-4 md:p-0  font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
        <li>
          <a  class="block cursor-pointer  px-3 text-2xl text-white text-center  rounded md:bg-transparent md:p-0" aria-current="page" onClick={()=>{
            setOpen(true)
          }}>Write a Post</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<div className='my-3'>
       <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-3 gap-8 w-[90%] max-[640px]:w-[90%] " role="group">
         {
          posts.filter((e)=>(e.content.toLowerCase().includes(search.toLowerCase()))).map(posts =>(
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
                className="w-[50px] h-[50px] rounded-full cursor-pointer"
                src={posts.pic}
                alt="tania andrew"
                onClick={
                  (e) => {
                    nav('/Gotoprofile', { state: { id:posts.userid} });
                  }
              }
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray" className='cursor-pointer' onClick={
                  (e) => {
                    nav('/Gotoprofile', { state: { id:posts.userid} });
                  }
              }>
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
            <div className='flex items-center justify-end m-3'>
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
    )
}


export default Home;