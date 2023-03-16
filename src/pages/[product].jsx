import React from 'react'
import TopBar from '@component/modules/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"
import { db } from "@component/firebase/firebase"
import { collection, getDocs} from "firebase/firestore/lite"
import { useRouter } from 'next/router'

import BasicBreadcrumbs from '@component/modules/bread_crumbs'

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

/////////////
export default function ItemPage({new_props, tech_props, food_props}) {

  const NewListMap = Object.values(new_props).slice(0, 8).map(data => {
    return ( 
      <div className='new_feed__content__column'>
        <div>
          <Link href={""}>
              <img src={data.image} width="110" height="75" />
          </Link>
          <li style={{opacity:"0"}}></li>
          <hr style={{borderTop:"0.1px", position:"absolute", width:"440px"}}></hr><li style={{opacity:"0"}}></li>
        </div>
        <div style={{marginBottom:"60px", marginLeft:"10px",
         position:"relative", top:"-0.2rem", display:"flex", flexDirection:"column"}}>
          <Link href={""} style={{color:"white"}}>{data.title.title.toString()}</Link>
          <a style={{color:"darkgray", fontSize:"12px", padding:"5px"}} >{data.date}</a>
        </div>
      </div>
    )
  })

  const TechNickMap = Object.values(tech_props).slice(0, 5).map(tech => {
    return (
      <div className="new_feed_subContent" >
        <Link href={"/"}>
          <img src={tech.image} style={{width:"100px", height:"70px", float:'left'}}></img>
        </Link>
          <Link href={"/"} style={{left:"0.5rem", position:"relative"}}>{Object.values(tech.title)}</Link>
      </div>
    )
  })

  const FoodMap = Object.values(food_props).slice(0, 5).map(food => {
    return (
      <div className="new_feed_subContent" >
        <Link href={"/"}>
          <img src={food.image} style={{width:"100px", height:"70px", float:'left'}}></img>
        </Link>
        <Link style={{left:"0.5rem", position:"relative"}} href="/">{Object.values(food.title)}</Link>
      </div>
    )
  })

  return (
    <div className='mainframe__item' style={{overflow: "scroll"}}>
      <div className="bg-image-wrapper">
       <Image
          src={background}
          quality="100"
          layout='fill'
         />
      </div>
      <TopBar/>
      <BasicBreadcrumbs/>

      <div style={{position:'relative', color:"white"}}>
        <h1>{""}</h1>
      </div>

      <div className="new_feed__content">
        <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px"}}>TIN NỔI BẬT</a>
        <li style={{opacity:"0"}}></li>
        {NewListMap}
        <Link href={"/"}style={{color:"skyblue", whiteSpace:"nowrap"}}>Các nội dung khác &rarr;</Link>
      </div>
      <div className='new_feed'>
        <div className='new_feed__content2' style={{fontSize:"14px"}}>
          <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px"}}>KỸ THUẬT NUÔI</a>
          <li style={{opacity:"0"}}></li>
          {TechNickMap}
        </div>
        <div className="new_feed__content3" style={{fontSize:"14px"}}>
          <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px",}}>ẨM THỰC</a>
          <li style={{opacity:"0"}}></li>
          {FoodMap}
        </div>
      </div>
    </div>
  )
}
