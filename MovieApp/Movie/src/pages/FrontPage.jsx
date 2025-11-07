import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Mainbody from '../components/Mainbody'

const FrontPage = () => {
  return (
   <>
   <div className='max-h-full'>
    <Header/>
    <Mainbody/>
    <Footer/>
   </div>
   </>
  )
}

export default FrontPage