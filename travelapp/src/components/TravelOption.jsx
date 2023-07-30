import React, { useState } from 'react'
import bgImage from '../assets/bgImage.jpg'
import mountain_1 from '../assets/mountain_1.png'
import wildlife from '../assets/wildlife.png'
import beach_1 from '../assets/beach-1.png'
import hawa_mahal from '../assets/hawa_mahal.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import thar from '../assets/thardesert.png'

const TravelOption = () => {
    const [selectedExplore, setSelectedExplore]=useState(null);

    const explore=[
        {
            id:1,
            src: mountain_1,
            description: 'The Himalayan mountains in India are majestic, towering peaks, home to diverse flora & fauna.They are not just a geographical marvel, but they hold deep cultural and spiritual significance',
            expUrl: '/mountain'
        },
        {
            id:2,
            src: wildlife,
            description: 'India offers diverse wildlife destinations like Kaziranga National Park and Jim Corbett National Park, where visitors can spot majestic tigers, elephants, rhinos, and other fascinating creatures.',
            expUrl: '/beach'
        },
        {
            id:3,
            src: hawa_mahal,
            description: 'Cultural heritage of India is resplendent with magnificent palaces, forts, and monuments like the iconic Hawa Mahal, showcasing exquisite Rajput architecture and a rich historical legacy',
            expUrl: '/heritage'
        },
        {
            id:4,
            src: thar,
            description: 'The Thar Desert in India is a vast, arid expanse, known for its golden sand dunes,  and a vibrant tapestry of culture. It is the most widely populated desert in the world',
            expUrl: '/mountain'
        },
        {
            id:5,
            src: beach_1,
            description: "India's coastline offers diverse beaches, from the shores of Andaman and Nicobar Islands to the beaches of Goa, each showcasing unique landscapes, cultures, and water activities.",
            expUrl: '/beach'
        },
        {
            id:6,
            src: tajmahal,
            description: 'The Taj Mahal, a UNESCO World Heritage site in Agra, India, is an iconic white marble mausoleum, built by Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.',
            expUrl: '/heritage'
        }
    ]

    const handleButtonClick = (url) => {
        window.location.href = url;
      };



  return (
    <div  className='py-10 bg-gradient-to-b from-black via-gray-800 to-gray-950  w-full text-white md:h-auto'>
        <div className='max-w-screen-lg p-4 my-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-white text-violet-500 '>Travel Destinations</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-2 text-center'>
                {explore.map(({id,src,description,expUrl})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                        <p className='p-3'>{description}</p>
                        <button
                  className='w-1/2 px-6 py-3 m-4 duration-200 bg-gradient-to-r from-violet-400 via-violet-600 to-violet-800 rounded-md hover:scale-105 '
                  onClick={() => handleButtonClick(expUrl)}
                >
                  Explore
                </button>

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TravelOption