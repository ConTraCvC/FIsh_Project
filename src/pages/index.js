import '../styles/Home.module.css'
import ImageSlice from '@component/components/image_slice'
import TopBar from '@component/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import NewAndTechnic from '@component/components/new_and_technic'

import { db } from "@component/firebase/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

const newCollection = collection(db, "news")
const techCollection = collection(db, "techniques")
const foodCollection = collection(db, "foods")
const fish_SX_collection = collection(db, `fish_SX`)
const fish_TN_collection = collection(db, "fish_TN")

export const getStaticProps = async() => {
  const newSnap = await getDocs(newCollection)
  const new_props = newSnap.docs.map((doc) => ({ ...doc.data()}))

  const techSnap = await getDocs(techCollection)
  const tech_props = techSnap.docs.map((doc) => ({ ...doc.data()}))
  
  const foodSnap = await getDocs(foodCollection)
  const food_props = foodSnap.docs.map((doc) => ({ ...doc.data()}))
  
  const fish_SX = await getDocs(fish_SX_collection)
  const fish_SX_props = fish_SX.docs.map((doc) => ({ ...doc.data(), id: doc.id}))

  const fish_TN = await getDocs(fish_TN_collection)
  const fish_TN_props = fish_TN.docs.map((doc) => ({ ...doc.data(), id: doc.id}))

  return {
    props: { new_props, tech_props, food_props,
      fish_SX_props, fish_TN_props },
    revalidate: 100};
};

export default function Home({new_props, tech_props,
  food_props, fish_SX_props, fish_TN_props}) {
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
      <ImageSlice data1={fish_SX_props} data2={fish_TN_props}/>
      <NewAndTechnic data1={new_props} data2={tech_props} data3={food_props}/>
    </div>
  )
}
