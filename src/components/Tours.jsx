import React, { useEffect, useState } from 'react'
import { getData } from '../utils'
import { MyCard } from './MyCard'

export const Tours = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    getData(setData)
  }, [])

  data && console.log(data);
  
  return (
    <div className='flex gap-5 flex-wrap justify-center bg-blue-900 p-5'>
      {data && data.map(obj=><MyCard key={obj.id} {...obj}/>)}
    </div>
    
  )
}

