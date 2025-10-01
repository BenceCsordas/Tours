import React, { useState } from 'react'
import { MyModal } from './MyModal'

export const MyCard = ({id, name, info, image, price}) => {
  const [open, setOpen] = useState(false)
 
  
  return (
  <div className=''>

      <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-[350px]">
        
            <div className='h-48 overflow-hidden'>
              <img className="rounded-t-lg object-cover w-full h-full " src={image} alt={name} />
            </div>
        
          <div className="p-5">
            
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              

              <button onClick={()=>setOpen(true)} className="absolute bottom-1 left-1/3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
              
          </div>


      </div>
      {open && <MyModal setOpen={setOpen} open={open} name={name} info={info} image={image} price={price}/>
      }
      
      
    </div>    


  )
}


