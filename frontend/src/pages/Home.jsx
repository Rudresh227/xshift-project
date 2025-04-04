import React from 'react'
import Navbar from '../components/Navbar'
import TopTrending from '../components/TopTrending'
import Feed from '../components/Feed'
import TopCreators from '../components/TopCreators'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex w-[90%] md:w-[80%] m-auto'>
          <TopTrending />
          <Feed />
          <TopCreators />
        </div>
    </div>
  )
}

export default Home
