import React from 'react'
import { dummyFeed } from '../data/FeedPosts';
import { Dot } from 'lucide-react'

const Feed = () => {
  return (
    <div className='min-h-[calc(100vh-106px)] w-full lg:w-[50%] lg:flex flex-col border-x border-gray-300 px-4'>

      <div className='flex justify-center items-center py-4'>
        <h1 className='self-start inline-block text-lg font-medium py-1 border-b-2 border-purple'>For You</h1>
      </div>

      <div className='flex flex-col gap-3'>
      
      {
        dummyFeed.map((creator) => (
          <div key={creator.id} className='flex flex-col px-4 bg-bggray rounded-md shadow-sm py-3'>
            {/*Header*/}
            <div className='flex justify-start items-center'>
              <div className='flex gap-2 justify-start items-center'>
                <img src={creator.avatar} className='w-[48px] rounded-[50%]'/>
                <p className='font-medium'>{creator.username}</p>
                <p className='text-gray-700'>{creator.handle}</p>
              </div>
              <Dot size={32} color="#616161" />
              <p className='text-gray-700'>{}</p>
            </div>
            {/*Caption*/}
            <div></div>
            {/*Image*/}
            <div></div>
            {/*Options*/}
            <div></div>
          </div>
          
        ))
      }

    </div>
    </div>
  )
}

export default Feed
