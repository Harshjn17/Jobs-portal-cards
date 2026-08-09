import React from 'react'
import { RiBookmarkLine } from "@remixicon/react";

const Card = (props) => {
  return (
    <div className='w-80 h-90 shadow-md rounded-lg p-4 flex flex-col justify-between'>
            <div className='flex flex-col gap-4'>
                <div className='flex item center justify-between'>
                <img className='w-11 rounded-full' src={props.logo} alt="" />
                <a className='flex gap-2 items-center border border-[#E4E4E4] text-[#E4E4E4]-500 py-2 px-3 rounded-md'>Save
                    <RiBookmarkLine className='text-[#E4E4E4]-500' />
                </a>
            </div>
            <div className='flex gap-2 items-center'>
                <p className='font-semibold text-xl'>{props.companyName}</p>
                <p className='text-[#E4E4E4]-500 text-xs'>{props.time}</p>
            </div>
            <div>
            <p className='text-2xl mb-2 font-semibold uppercase'>{props.role}</p>
            <div className='flex items-center flex-wrap gap-2'>
                <p className='bg-[#E4E4E4] py-1.5 px-2 font-semibold'>Full-Time</p>
                <p className='bg-[#E4E4E4] py-1.5 px-2 font-semibold'>Flexible schedule</p>
            </div>
        </div>
        </div>
        <div className='flex justify-between items-center py-2 border-t-2'>
            <div className=''>
                <p className='font-semibold text-xl'>{props.price}</p>
                <p className='text-[#E4E4E4] font-semibold'>{props.city}</p>
            </div>
            <button className='bg-black text-white py-3 px-4 rounded-lg'>Apply now</button>
        </div>
    </div>
  )
}

export default Card