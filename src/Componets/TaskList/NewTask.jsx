import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
          <div className='flex justify-between p-5'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md '> High</h3>
            <h4 className='text-sm'> 20 feb 2024</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold p-3'> Make a youtube video</h2>
          <p className='text-sm p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum provident quod consectetur, et obcaecati nesciunt pariatur cupiditate quas alias nemo enim libero ipsum minus minima vero.
          </p>
          <div className='mt-4'>
            <button>Accept Task</button>

          </div>
        </div> 
  )
}

export default NewTask