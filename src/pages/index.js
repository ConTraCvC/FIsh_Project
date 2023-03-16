import '../styles/Home.module.css'
import React from 'react'
import ImageSlice from '@component/modules/image_slice'
import TopBar from '@component/modules/top_bar'
import NewAndTechnique from '@component/modules/new_and_technic'
import Image from 'next/image'
import background from '../assets/background.jpg'

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
      <NewAndTechnique/>
    </div>
  )
}
