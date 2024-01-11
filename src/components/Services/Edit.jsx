import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {storage} from "../../firebase/setup"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

function Edit() {
  const [category, setcategory] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setabout] = useState("");
  const [caddress, setcAddress] = useState("");
  const [paddress, setpAddress] = useState("");
  const [image, setimage] = useState("");
  const [image1, setimage1] = useState(null);
  const [name, setname] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [Linkedinid, setLinkedinid] = useState("");
  const navigate = useNavigate();
  const [textoimage, settextoimage] = useState("");
  const userid = localStorage.getItem("useridengtrack");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        const id = localStorage.getItem("useridengtrack");
        const sessionToken=localStorage.getItem("engtracktoken");
        const response = await fetch(`https://eng-backend.onrender.com/updateusers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,about,caddress,paddress,phone,image,category,whatsapp,Linkedinid,subtitle,sessionToken}),
        });
  
        if (response.ok) {
          alert("Updated");
          navigate("/profile");
          console.log(response.data)
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
 }



 const handleuploadimage = async() =>{
  const imageRef = ref(storage, userid);
  if (image1) {
      uploadBytes(imageRef, image1).then(() => {
          getDownloadURL(imageRef).then((url) => {
              setimage(url);
              alert("Image Uploaded")
              settextoimage(" ")
          }).catch((error) => {
              console.log(error.message, "error geting the image url");
          })
          setimage(null);
          settextoimage(" ")
      }).catch((error) => {
          console.log(error.message);
      })
  }
}

function handleChange(event) {
    setimage1(event.target.files[0]);
settextoimage("Image selected");
handleuploadimage();
}

  return (
    <div>
      <h2 className="m-8 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Edit Profile
      </h2>
      <form onSubmit={handleSubmit} className="m-8">
      <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="Name"
            name="Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="Name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <label
              for="countries4"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="countries4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={category}
              onChange={(e)=>setcategory(e.target.value)}
            >
              <option>Choose...</option>
              <option value="1st year">1st year</option>
              <option value="2nd year">2nd year</option>
              <option value="3rd year">3rd year</option>
              <option value="4th year">4th year</option>
              <option value="Teacher">Teacher</option>
              <option value="Pass out">Pass out</option>
            </select>
          </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={subtitle}
            onChange={(e) => setsubtitle(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="subtitle"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subtitle{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="about"
            name="about"
            value={about}
            onChange={(e) => setabout(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="about"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description{" "}
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="caddress"
            name="caddress"
            value={caddress}
            onChange={(e) => setcAddress(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="caddress"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Current Address{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="paddress"
            name="paddress"
            value={paddress}
            onChange={(e) => setpAddress(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="paddress"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Parmanent Address{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone{" "}
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={whatsapp}
            onChange={(e) => setwhatsapp(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="whatsapp"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Whatsapp No
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="Linkedinid"
            name="Linkedinid"
            value={Linkedinid}
            onChange={(e) => setLinkedinid(e.target.value)}
            required // Mark the field as required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="Linkedinid"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Linkedin Id url
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="image"
          >
            Profile's Image
          </label>
          <input type="file" onChange={handleChange}/>
        </div>
        <p className="text-base text-red-600">{textoimage}</p> 
        <button
          type="submit"
          className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Edit;