import '../styles/Home.module.css'
import React from 'react'
import ImageSlice from '@component/pages/components/image_slice'
import TopBar from '@component/pages/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import NewAndTechnic from '@component/pages/components/new_and_technic'

import { db } from "@component/firebase/firebase"
import { collection, getDocs} from "firebase/firestore/lite"

const newCollection = collection(db, "news")
const techCollection = collection(db, "techniques")
const foodCollection = collection(db, "foods")

export const getServerSideProps = async () => {
  const docSnap = await getDocs(newCollection);
  const new_props = docSnap.docs.map((doc) => ({ ...doc.data()}))
  const techSnap = await getDocs(techCollection)
  const tech_props = techSnap.docs.map((doc) => ({ ...doc.data()}))
  const foodSnap = await getDocs(foodCollection)
  const food_props = foodSnap.docs.map((doc) => ({ ...doc.data()}))
  return {
    props: { new_props, tech_props, food_props } };
};

export default function Home({new_props, tech_props, food_props}) {
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
      <ImageSlice data1={new_props}/>
      <NewAndTechnic data1={new_props} data2={tech_props} data3={food_props}/>
    </div>
  )
}
