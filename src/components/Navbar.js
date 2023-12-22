<<<<<<< HEAD
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import FeedIcon from '@mui/icons-material/Feed';
import {  Grid  } from "@mui/material";
import FitbitIcon from '@mui/icons-material/Fitbit';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
  return (
    <div style={{padding:"10px",borderBottom:"1px solid grey"}}>
      <Grid container>
        <Grid item xs={6}>
            {/* Image */}
            <FitbitIcon style={{width:"30px",marginLeft:"80px"}}/>
            <SearchIcon style={{width:"30px",marginLeft:"20px"}}/>

        </Grid>
        <Grid item xs={6}>
          <HomeIcon style={{width:"30px",marginLeft:"20px"}}/>
        <PeopleIcon style={{width:"30px",marginLeft:"20px"}}/>
        <FeedIcon style={{width:"30px",marginLeft:"20px"}}/>
            <MessageIcon style={{width:"30px",marginLeft:"20px"}}/>
<PersonIcon style={{width:"30px",marginLeft:"20px"}}/>

        </Grid>

      </Grid>
    </div>
  )
}

export default Navbar
=======
// // import React from 'react'
// // import SearchIcon from '@mui/icons-material/Search';
// // import MessageIcon from '@mui/icons-material/Message';
// // import PeopleIcon from '@mui/icons-material/People';
// // import FeedIcon from '@mui/icons-material/Feed';
// // import {  Grid  } from "@mui/material";
// // const Navbar = () => {
// //   return (
// //     <div>
// //       <Grid container>
// //         <Grid item xs={6}>
// //             {/* Image */}
// //             <SearchIcon/>

// //         </Grid>
// //         <Grid item xs={6}>
// //         <PeopleIcon/>
// //         <FeedIcon/>
// //             <MessageIcon/>

// //         </Grid>

// //       </Grid>
// //     </div>
// //   )
// // }

// // export default Navbar



import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBriefcase, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow py-2">
      <div className="container mx-auto px-20 mx-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              TeamCSIT
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/feed" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              <span className="text-xs">Home</span>
            </Link>
            <Link to="/network" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faUserFriends} className="text-xl" />
              <span className="text-xs">My Network</span>
            </Link>
            <Link to="/jobs" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
              <span className="text-xs">Jobs</span>
            </Link>
            <Link to="/messaging" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faComment} className="text-xl" />
              <span className="text-xs">Messaging</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="group relative">
              <Link to="/profile" className="text-gray-600 hover:text-gray-900 group">
                Me
              </Link>
              <div className="absolute hidden group-hover:block mt-2 bg-white border rounded-md shadow-md w-40">
                <Link to="/profile" className="block py-2 px-4 hover:bg-gray-100">
                  My Profile
                </Link>
                <button className="block py-2 px-4 text-red-600 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            </div>
            {/* Removed the standalone "Upgrade" button */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> 0f43fad8a63588a20cd4b0338a0d9fa1e0266b51
