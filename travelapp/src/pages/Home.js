import React from 'react'
import MyNavbar from '../components/MyNavbar'
import TravelOption from '../components/TravelOption'
//import bgImg from './assets/bgImage.jpg';
//https://img.freepik.com/free-photo/frothy-waves-sandy-beach-from_23-2148142080.jpg?w=1380&t=st=1690490617~exp=1690491217~hmac=c39da1cec3dc51a20e3889473f70fd7a8d2edf4f5b710fe06edd2380ce0d4571
//https://images.locationscout.net/2015/09/sunset-over-jaipur-india.jpg?h=1100&q=83

const Base = () => {
  return (
    <div  >
      <MyNavbar/>
      <div className=' pt-20  text-white h-screen w-full' style={{
        backgroundImage: `url(https://www.jaipurstuff.com/wp-content/uploads/2019/10/sunset-nahargarh.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}} >
          <h1 className='pt-56 text-8xl shadow-md  font-semibold text-white text-center'>Tour & Travel of India</h1>
      </div>
      
      <TravelOption/>
    </div>
  )
}

export default Base