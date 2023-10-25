import React, { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';
import {updateProfile} from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function Register() {
  const nav = useNavigate();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(""); 

  const handleRegister = async (event) => {
     event.preventDefault();
     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => { // Signed in
         const user = userCredential.user;
         setRegistrationSuccess(true);
         alert("user registered successfully")
         updateProfile(auth.currentUser, {
             displayName: name
         }).then(() => {
         }).catch((error) => {});
         nav("/");
     }).catch((error) => {
         const errorCode = error.code;
         setRegistrationError(error.code);
     });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register your account
            </h1>
            <form  className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>
              {registrationSuccess ? (
                <p className="text-sm font-light text-green-500 dark:text-green-400">
                  Registration successful! You can now{" "}
                  <a href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Sign in
                  </a>.
                </p>
              ) : (<p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account yet? <a href="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
              </p>)}
              {registrationError && ( // Display registration error message if set
                <p className="text-sm font-light text-red-500 dark:text-red-400">
                  {registrationError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
