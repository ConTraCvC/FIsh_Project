import '../styles/Home.module.css'
import React from 'react'
import ImageSlice from '@component/pages/components/image_slice'
import TopBar from '@component/pages/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import NewAndTechnic from '@component/pages/components/new_and_technic'

export default function Home() {
  return (
    <div className='mainframe'>
      <div className="bg-image-wrapper">
       <Image
          src={background}
          quality="100"
          layout='fill'
         />
      </div>
      <TopBar/>
      <ImageSlice/>
      <NewAndTechnic/>
    </div>
  )
}
