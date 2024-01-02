import React, { useEffect, useState } from "react";
import pic from "../Images/profile.jpg";

import '../Css/All.css'
import {useNavigate} from 'react-router-dom'

function Profile() {
  const [profiledata,setprofiledata] = useState(['1']);
  const nav = useNavigate();



  const fetchData = async () => {
   
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8  ">
        <div className="flex items-center justify-center m-6 ">
        {
          profiledata.map(profiledata =>(
          <div className="max-w-md xl:max-w-2xl bg-white ">
            <div className="shadow-xl   p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="photo-wrapper mx-auto mb-6 ">
                <img
                  className="w-40 h-40 object-cover rounded-full mx-auto border-solid border-2 border-black"
                  src={ pic}
                  alt="Profile"
                />
              </div>
                <div className="text-center">
                  <h3 className="text-base lg:text-2xl font-bold leading-8">
                    Yash Kumar Mishra
                  </h3>
                </div>
              <table className="text-lg lg:text-base my-6">
                <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">mishrayash3778@gmail.com</td>
                    </tr>
                  <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td className="px-2 py-2">+91-6397124401</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Year
                      </td>
                      <td className="px-2 py-2">
                        Final Year
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Course
                      </td>
                      <td className="px-2 py-2">B-Tech</td>
                    </tr>
                  <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        City
                      </td>
                      <td className="px-2 py-2">Bareilly</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        State
                      </td>
                      <td className="px-2 py-2">Uttar Pradesh</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Pincode
                      </td>
                      <td className="px-2 py-2">243302</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}

export default Profile;