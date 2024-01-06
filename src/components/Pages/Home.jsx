import Posts from "../Subpages/Posts";
import pic from "../Images/profile.jpg"


const Home = () => {

    return(
        <div>
            

<nav class="bg-blue-800 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <img src={pic} class="w-[50px] h-[50px] rounded-full" alt="Flowbite Logo" />
  <div class="flex md:order-2">
    <div class="relative  ">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" class="block w-[100%] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
    </div>
  </div>
    <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <ul class="flex flex-col p-4 md:p-0  font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
        <li>
          <a href="#" class="block  px-3 text-2xl text-white text-center  rounded md:bg-transparent md:p-0" aria-current="page">Write a Post</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        <Posts />
        </div>
    )
}


export default Home;