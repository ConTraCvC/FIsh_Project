import React, { use, useState } from 'react'
import TopBar from '@component/pages/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"
import { db } from "@component/firebase/firebase"
import { collection, getDocs} from "firebase/firestore/lite"
import { useRouter } from 'next/router'

import BasicBreadcrumbs from '@component/pages/components/bread_crumbs'
import { Button, Input, Table } from 'reactstrap'

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

  const [ kich_thuoc, setKich_thuoc ] = useState(1);
  const [ so_luong, setSo_luong] = useState(1);
  const [ info, setInfo ] = useState()
  const [ dat_hang, setDat_Hang ] = useState() 

  const FishMap = Object.values(fish_props).slice(0, 0).map(fish => {
    return (
      <div>
        <div>
          <h3>{Object.values(fish.title)}</h3>
          <img src={fish.image}></img>
        </div>
        <div style={{position:"relative"}}>
          <h5 style={{position:"relative", color:"white"}}>Nội dung:</h5>
          <h3>Đơn giá: {`${fish.don_gia}`} vnđ/cm/con</h3>\

          <Input style={{position:"relative", color:"white"}}
            value={kich_thuoc}
            onChange={(e) => setKich_thuoc(e.target.value)}>
            <Button 
              value={kich_thuoc}
              onChange={(e) => setKich_thuoc(e.target.value+1)}/>
            <Button
              value={kich_thuoc}
              onChange={(e) => setKich_thuoc(e.target.value-1)}/>
          </Input>
          <Input style={{position:"relative", color:"white"}}
            value={so_luong}
            onChange={(e) => setSo_luong(e.target.value)}>
            <Button
              value={so_luong}
              onChange={(e) => setSo_luong(e.target.value+1)}/>
            <Button
              value={so_luong}
              onChange={(e) => setSo_luong(e.target.value-1)}/>
          </Input>
          <h4 style={{position:"relative", color:"lightblue"}}>{`Tổng tiền: ${kich_thuoc*so_luong*fish.don_gia}`}</h4>
        </div>
        { info && dat_hang ? 
          <Button style={{position:"relative", color:"white"}}
            onClick={() => setInfo(true) && setDat_Hang(false)}>Thông tin sản phẩm</Button> :
          <Button style={{position:"relative", color:"white"}}
            onClick={() => setInfo(false) && setDat_Hang(true)}>Đặt hàng</Button>
        }
        { info &&  (
          <div style={{position:"relative", color:"white"}}>
            <h1>HIỆU QUẢ MÔ HÌNH NUÔI</h1>
            <h5>{fish.body}</h5>
            <h3>CÁ THƯƠNG PHẨM</h3>
            <img src={fish.image_tp}></img>
            <Table>
              <thead>
                <tr>
                  <th>Tên gọi</th>
                  <td>{fish.details.ten_goi}</td>
                </tr>
                <tr>
                  <th>Vùng nuôi</th>
                  <td>{fish.details.vung_nuoi}</td>
                </tr>
                <tr>
                  <th> Hình thức nuôi</th>
                  <td>{fish.details.hinh_thuc_nuoi}</td>
                </tr>
                <tr>
                  <th>Tiêu chuẩn chất lượng</th>
                  <td>{fish.details.tieu_chuan}</td>
                </tr><tr>
                  <th>Kích thước</th>
                  <td>{fish.details.kich_thuoc}</td>
                </tr>
                <tr>
                  <th>Mật độ thả</th>
                  <td>{fish.details.mat_do_tha}</td>
                </tr>
                <tr>
                  <th>Thời gian nuôi đến thành phẩm</th>
                  <td>{fish.details.thoi_gian_nuoi}</td>
                </tr>
                <tr>
                  <th>Kích cỡ đạt được</th>
                  <td>{fish.details.kich_co}</td>
                </tr>
                <tr>
                  <th>Tỷ lệ sống trung  bình</th>
                  <td>{fish.details.ti_le_song}</td>
                </tr>
                <tr>
                  <th>Loại thức ăn</th>
                  <td>{fish.details.loai_thuc_an}</td>
                </tr>
                <tr>
                  <th>Hệ số chuyển đổi thức ăn</th>
                  <td>{fish.details.hscd_thuc_an}</td>
                </tr>
                <tr>
                  <th>Giá trị dinh dưỡng</th>
                  <td>{fish.details.gia_tri_dd}</td>
                </tr>
                <tr>
                  <th>Giá thương phẩm</th>
                  <td>{fish.details.gia_thuong_pham}</td>
                </tr>
                <tr>
                  <th>Hệ số lợi nhuận trên 1kg cá</th>
                  <td>{fish.details.hs_loi_nhuan}</td>
                </tr>
                <tr>
                  <th>Thực tại tại Việt Nam</th>
                  <td>{fish.details.thuc_tai_sx}</td>
                </tr>
                <tr>
                  <th>Xu hướng phát triển</th>
                  <td>{fish.details.xu_huong_pt}</td>
                </tr>
              </thead>
            </Table>
            <h4>Hình 1:</h4>
            <img src={fish.image1}/>
            <h4>Hình 2:</h4>
            <img src={fish.image2}></img>
            <h4>Hình 3:</h4>
            <img src={fish.image3}></img>
            <h4>Cá thương phẩm:</h4>
            <h5>{fish.body2}</h5>
          </div>
        )}
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
          {/* {FishMap} */}
      </div>
    </div>
  )
}
