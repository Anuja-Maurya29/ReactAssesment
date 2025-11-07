import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
  <div   className='h-14 bg-gray-900  flex  flex-row  justify-between'>
<h1 className='text-amber-100 font-bold font-stretch-200% p-3 font-mono text-3xl'>CHALCHITR</h1>

<div className=" text-amber-100 navList ">
        <div className="link  flex gap-8 text-2xl">

         <Link to='/'>Home</Link>
         
           <Link to='/login'>Logout</Link>
        </div>
      
    </div> 
  </div>
    </>
  )
}

export default Header