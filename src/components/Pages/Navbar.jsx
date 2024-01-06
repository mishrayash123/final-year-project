import { Transition } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";
import pic from "../Images/profile.jpg";
import {useAuth} from "../../AuthContext"


const Navbar = () => {
  const { isLoggedIn,logout} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();




  return (
    <div className="fixed-top">
      <nav className="bg-white text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-row">
                <a
                  href="/"
                >
                <h1 className="text-xl text-black font-bold">Eng-Track</h1>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
              <a
                    href="/"
                    className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                  </a>
                <a
                  href="/users"
                  className=" text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                </a>
                
                
                {isLoggedIn ? (
                  <>
                    <div
                      className="relative inline-block text-left"
                      ref={dropdownRef}
                    >
                      <button
                        onClick={handleDropdownClick}
                        className="w-12 h-12 p-1 relative group rounded-full overflow-hidden focus:outline-none"
                      >
                        <img
                          className="object-cover w-full h-full rounded-full border-solid border-2 border-black group-hover:opacity-70"
                          src={pic}
                          alt="Profile"
                        />
                      </button>
                      {isDropdownOpen && (
                        <div className=" origin-top-right absolute right-0 mt-3 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1">
                            <a
                              href="/profile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={closeDropdown}
                            >
                              View Profile
                            </a>
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <button onClick={() => { closeDropdown(); logout(); }}>
                              Logout
                            </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <a
                    href="/login"
                    className=" text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SignIn
                  </a>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-1 space-y-1 sm:px-3">
              <a
                    href="/"
                    className=" text-black  rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
              </div>
              <div ref={divRef} className="px-2 pt-1 pb-1 space-y-1 sm:px-3">
              <a
                  href="/users"
                  className=" text-black rounded-md text-sm font-medium"
                >
                  Users
                </a>
              </div>

              {isLoggedIn ? (
                <>

                  <div
                    ref={divRef}
                    className="px-2 pt-1 pb-1 space-y-1 sm:px-3"
                  >
                    <a
                      href="/profile"
                      className="  text-black  rounded-md text-sm font-medium"
                    >
                      View Profile
                    </a>
                  </div>
                  <div className="px-2 pt-1 pb-1 space-y-1 sm:px-3">
                    <button
                      onClick={()=>{
                        logout()
                      }}
                      className="  text-black  rounded-md text-sm font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div ref={divRef} className="px-2 pt-1 pb-1 space-y-1 sm:px-3">
                  <a
                    href="/login"
                    className=" text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SignIn
                  </a>
                </div>
              )}
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;