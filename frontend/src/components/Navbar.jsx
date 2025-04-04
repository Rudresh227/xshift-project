import React, { useState } from "react";
import { Bookmark, House, Search, User } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <div className="w-[90%] sm:w-[80%] md:w-[70%] m-auto my-4 flex justify-between px-8 lg:px-12 py-4 bg-bggray rounded-md items-center shadow-sm">
          {/* Mobile Menu - Hamburger Icon */}
          <div className="lg:hidden ">
                <button onClick={() => setIsOpen(!isOpen)} className="text-purple text-2xl focus:outline-none cursor-pointer bg-bgpurple px-2 rounded-md">
                    ☰
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-10 bg-white shadow-md rounded-md p-4 w-40">
                        <ul className="flex flex-col gap-3">
                            <li className="cursor-pointer hover:text-purple flex gap-3 p-2 bg-bgpurple text-purple font-semibold rounded-md"><span><House strokeWidth={1.5} /></span>Home</li>
                            <li className="cursor-pointer hover:text-purple flex gap-3 p-2"><span><Search strokeWidth={1.5} /></span>Search</li>
                            <li className="cursor-pointer hover:text-purple flex gap-3 p-2"><span><Bookmark strokeWidth={1.5} /></span>Bookmarks</li>
                            <li className="cursor-pointer hover:text-purple flex gap-3 p-2"><span><User strokeWidth={1.5} /></span>Profile</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Branding Section */}
            
            <div>
                <h1 className="text-purple font-bold text-2xl">XShift</h1>
            </div>

            <div className="cursor-pointer lg:hidden"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3c37ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center items-center">
                <ul className="flex gap-8">
                    <li className="cursor-pointer flex gap-3 p-2 bg-bgpurple text-purple font-semibold rounded-md"><span><House strokeWidth={1.5} /></span>Home</li>
                    <li className="cursor-pointer flex gap-3 p-2 rounded-md"><span><Search strokeWidth={1.5} /></span>Search</li>
                    <li className="cursor-pointer flex gap-3 p-2 rounded-md"><span><Bookmark strokeWidth={1.5} /></span>Bookmarks</li>
                    <li className="cursor-pointer flex gap-3 p-2 rounded-md"><span><User strokeWidth={1.5} /></span>Profile</li>
                </ul>
            </div>

            
        </div>
        <div className='w-full border-t border-gray-300'></div>
        </div>
    );
};

export default Navbar;
