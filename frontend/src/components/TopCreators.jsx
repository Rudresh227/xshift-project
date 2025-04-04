import React from 'react'
import { topCreators } from '/src/data/topCreators.jsx'

const TopCreators = () => {
  return (
    <div className='hidden lg:flex flex-col w-[25%] py-4 px-8 h-[600px]'> 
        <h1 className='self-start inline-block text-lg font-medium py-1 border-b-2 border-purple'>
            Top Creators
        </h1>

        <div className='grid grid-cols-2 grid-rows-3 gap-4 mt-5'>

            {topCreators.map((creator) => (
                <div
                key={creator.id}
                className='bg-bggray rounded-md shadow-sm flex flex-col justify-center items-center py-5 cursor-pointer'>
                    <img src={creator.image} className='w-[48px] rounded-[50%]' />
                    <p className='font-medium text-center'>{creator.name}</p>
                    <p className='text-[13px] text-gray-700'>{creator.username}</p>
                </div>
            )
            )
            }
            
            

        </div>
    </div>

  )
}

export default TopCreators
