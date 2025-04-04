import React from 'react'
import { trendingHashtags } from '../data/TrendingHashtags.jsx'
import { EllipsisVertical }  from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopTrending = () => {
  // Sort the hashtags by the number of posts in descending order
  const sortedTrends = trendingHashtags.sort((a, b) => parseInt(b.posts.replace('K', '000')) - parseInt(a.posts.replace('K', '000')));

  // Get only the top 3 trending items
  const topThreeTrends = sortedTrends.slice(0, 3);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove login data
    navigate("/login"); // Redirect to Login page
  };

  return ( 
    <div className='hidden lg:flex flex-col w-[25%] h-[600px] justify-between py-4 px-8'>
        <div className='bg-[#F3F5F9] rounded-md shadow-sm px-4 py-3'>
            <h1 className='text-lg font-semibold'>What's Happening</h1>
            <ul>
                {topThreeTrends.map((trend, index) => (
                    <li key={index} className='flex flex-col my-2 text-[#3C37FF] font-semibold'>
                        {trend.hashtag} <span className='text-gray-600'>{trend.posts} posts</span>
                    </li>
                ))}
            </ul>
            <button className='bg-[#CECFFA] px-2 py-1 rounded-md text-[#3C37FF] font-semibold mt-1 text-sm cursor-pointer'>
                + Show more
            </button>
        </div>

        <div className='flex flex-col gap-3'>
            <button className='text-white bg-black w-full rounded-lg cursor-pointer font-semibold py-2'>Post</button>
            <div className='flex justify-between items-center cursor-pointer'>
                <div className='flex justify-start items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3c37ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                    <p className='font-medium'>Rudresh Vasanth</p>
                </div>
                {/* Ellipsis Icon Click - Toggle Popup */}
                <div onClick={() => setShowPopup(!showPopup)}>
                <EllipsisVertical />
                </div>

                {/* Logout Popup */}
                {showPopup && (
                <div className="absolute left-[20%] bottom-17 bg-white shadow-md p-2 rounded-md w-32">
                    <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded-md"
                    >
                    Logout
                    </button>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default TopTrending
