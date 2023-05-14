import React, { useState, useRef, useMemo } from 'react'
import TopBar from '@component/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"
import { db } from "@component/firebase/firebase"
import { collection, doc, getDoc, getDocs} from "firebase/firestore/lite"

import BasicBreadcrumbs from '@component/components/bread_crumbs'
import { Button, Form, FormGroup, Input, Table } from 'reactstrap'

const newCollection = collection(db, "news")
const techCollection = collection(db, "techniques")
const foodCollection = collection(db, "foods")

// export const getStaticPaths = async() => {
//   const fish_SX = await getDocs(fish_SX_collection)
//   const paths = fish_SX.docs.map(doc => ({
//     params: {product: doc.id}
//   }))
//   return {
//     paths, fallback: false
//   }
// }

export const getServerSideProps = async(context) => {

  const product = context.params.product

  const newSnap = await getDocs(newCollection)
  const new_props = newSnap.docs.map((doc) => ({ ...doc.data()}))

  const techSnap = await getDocs(techCollection)
  const tech_props = techSnap.docs.map((doc) => ({ ...doc.data()}))

  const foodSnap = await getDocs(foodCollection)
  const food_props = foodSnap.docs.map((doc) => ({ ...doc.data()}))

  const fish_SX_Ref = doc(db, `fish_SX/${product}`)
  const fish_SX_Snap = await getDoc(fish_SX_Ref)
  const fish_SX_Data = fish_SX_Snap.data()


  // const fish_SX = await getDocs(fish_SX_collection)
  // const fish_SX_Data = fish_SX.docs.map((doc) => ({...doc.data()}))
  // const fish_SX_props = fish_SX.docs.map((doc) => ({ ...doc.data()}))
  // fish_SX.forEach( async(doc) => {
  //   const table_collection = collection(db, `fish_SX/${doc.id}/details`)
  //   const table_snap = await getDocs(table_collection)
  //   const table_detail = table_snap.docs.map((doc) => ({ ...doc.data()}))
  //   fish_SX_table.push(table_detail)
  // })

  return {
    props: { new_props, tech_props, food_props, product, fish_SX_Data}
  };
};

/////////////
const ItemPage = ({new_props, tech_props, food_props, fish_SX_Data}) => {

  const NewListMap = Object.values(new_props).slice(0, 8).map(data => {
    return ( 
      <div className='new_feed__content__column'>
        <div>
          <Link href={"/"}>
              <img src={data.image} width="110" height="75" />
          </Link>
          <li style={{opacity:"0"}}></li>
          <hr style={{borderTop:"0.1px", position:"relative", maxWidth:"100%"}}></hr><li style={{opacity:"0"}}></li>
        </div>
        <div style={{marginBottom:"60px", marginLeft:"10px",
         position:"relative", top:"-0.2rem", display:"flex", flexDirection:"column"}}>
          <Link href={"/"} style={{color:"white"}}>{data.title.title.toString()}</Link>
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

  ///////////////////////

  const [ kich_thuoc, setKich_thuoc ] = useState(1);
  const [ so_luong, setSo_luong] = useState(1);
  const don_gia = useMemo(() =>{
    const result = Object.values(fish_SX_Data.don_gia)
    return result
  })
  const [ info, setInfo ] = useState(true);
  const [ dat_hang, setDat_Hang ] = useState(true);
  const [random, setRandom] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(1000);
    max = Math.floor(9999);
    return setRandom(Math.floor(Math.random() * (max - min) + min))
  }

  const total = useMemo(() => {
    const result = kich_thuoc*so_luong*don_gia
    return result
  }, [kich_thuoc, so_luong])

  const FishTable = Object.values("").slice(0, 0).map(table => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Tên gọi</th>
            <td>{table.details.ten_goi}</td>
          </tr>
          <tr>
            <th>Vùng nuôi</th>
            <td>{table.details.vung_nuoi}</td>
          </tr>
          <tr>
            <th> Hình thức nuôi</th>
            <td>{table.details.hinh_thuc_nuoi}</td>
          </tr>
          <tr>
            <th>Tiêu chuẩn chất lượng</th>
            <td>{table.details.tieu_chuan}</td>
          </tr><tr>
            <th>Kích thước</th>
            <td>{table.details.kich_thuoc}</td>
          </tr>
          <tr>
            <th>Mật độ thả</th>
            <td>{table.details.mat_do_tha}</td>
          </tr>
          <tr>
            <th>Thời gian nuôi đến thành phẩm</th>
            <td>{table.details.thoi_gian_nuoi}</td>
          </tr>
          <tr>
            <th>Kích cỡ đạt được</th>
            <td>{table.details.kich_co}</td>
          </tr>
          <tr>
            <th>Tỷ lệ sống trung  bình</th>
            <td>{table.details.ti_le_song}</td>
          </tr>
          <tr>
            <th>Loại thức ăn</th>
            <td>{table.details.loai_thuc_an}</td>
          </tr>
          <tr>
            <th>Hệ số chuyển đổi thức ăn</th>
            <td>{table.details.hscd_thuc_an}</td>
          </tr>
          <tr>
            <th>Giá trị dinh dưỡng</th>
            <td>{table.details.gia_tri_dd}</td>
          </tr>
          <tr>
            <th>Giá thương phẩm</th>
            <td>{table.details.gia_thuong_pham}</td>
          </tr>
          <tr>
            <th>Hệ số lợi nhuận trên 1kg cá</th>
            <td>{table.details.hs_loi_nhuan}</td>
          </tr>
          <tr>
            <th>Thực tại tại Việt Nam</th>
            <td>{table.details.thuc_tai_sx}</td>
          </tr>
          <tr>
            <th>Xu hướng phát triển</th>
            <td>{table.details.xu_huong_pt}</td>
          </tr>
        </thead>
      </Table>
    )
  })

  const FishMap = () => {
    return (
      <div style={{position:"absolute", right:"48%", top:"40%", maxWidth:"40%"}}>
        <div style={{display:"flex"}}>
          <div>
            <h3 style={{color:"lightgreen"}}>{Object.values(fish_SX_Data.title)}</h3>
            <img width="90%" src={fish_SX_Data.imageBia}></img>
          </div>
          <div style={{position:'relative', paddingTop:"5%"}}>
            <h3 style={{color:"white"}}>Nội dung:</h3>
            <h3 style={{color:"lightgreen"}}>Giá: {`${total}`} vnđ/cm/con</h3>
            <h3 style={{color:"white"}}>Kích thước</h3>
            <Input size="large"
              value={kich_thuoc}
              onChange={(e) => setKich_thuoc(e.target.value)}></Input>
            <Button
              value={kich_thuoc}
              onClick={() => setKich_thuoc(kich_thuoc+1)}>+</Button>
            <Button
              value={kich_thuoc}
              onClick={() => kich_thuoc>0 ? setKich_thuoc(kich_thuoc-1) : null}>-</Button>
            <h3 style={{color:"white"}}>Số lượng</h3>
            <Input size="large"
              height="30px"
              value={so_luong}
              onChange={(e) => setSo_luong(e.target.value)}/>
            <Button
              value={so_luong}
              onClick={() => setSo_luong(so_luong+1)}>+</Button>
            <Button
              value={so_luong}
              onClick={() => so_luong>0 ? setSo_luong(so_luong-1) : null}>-</Button>

            <h3 style={{position:"relative", color:"lightblue", paddingTop:"10px"}}>{`Tổng tiền: ${total}`}</h3>
          </div>
        </div>
        <Button style={{position:"relative", color:"black"}}
          onClick={() => setInfo(true) && setDat_Hang(false)}>Thông tin sản phẩm</Button>
        <Button style={{position:"relative", color:"black"}}
          onClick={() => setInfo(false) && setDat_Hang(true)}>Đặt hàng</Button>
        { info ?  (
          <div style={{position:"relative", color:"white"}}>
            <h1>HIỆU QUẢ MÔ HÌNH NUÔI</h1>
            <h4>{Object.values(fish_SX_Data.body)}</h4>
            <h3>CÁ THƯƠNG PHẨM</h3>
            {fish_SX_Data.imageTP!==null && fish_SX_Data.imageTP!==undefined ? <img width="100%" src={fish_SX_Data.imageTP}></img> : null }

            {/* {FishTable} */}

            <h4>Hình 1:</h4>
            <img width="100%" src={fish_SX_Data.image1}/>
            <h4>Hình 2:</h4>
            <img width="100%" src={fish_SX_Data.image2}></img>
            <h4>Hình 3:</h4>
            {fish_SX_Data.image3!==null && fish_SX_Data.image3!==undefined ? <img width="100%" src={fish_SX_Data.image3}></img> : null}
            <iframe width="100%" src={Object.values(fish_SX_Data.youtube)}>Video 1:</iframe>
            <iframe width="100%" src={Object.values(fish_SX_Data.youtube1)}>Video 2:</iframe>
            <h4>Cá thương phẩm:</h4>
            <h4>{Object.values(fish_SX_Data.body2)}</h4>
            {Object.values(fish_SX_Data.youtube2)!=="" || Object.values(fish_SX_Data.youtube2)!==undefined ? <iframe width="100%" src={Object.values(fish_SX_Data.youtube2)}/> : null}
            {Object.values(fish_SX_Data.youtube3)!=="" || Object.values(fish_SX_Data.youtube3)!==undefined ? <iframe width="100%" src={Object.values(fish_SX_Data.youtube3)}/> : null}
            {Object.values(fish_SX_Data.youtube4)!=="" || Object.values(fish_SX_Data.youtube4)!==undefined ? <iframe width="100%" src={Object.values(fish_SX_Data.youtube4)}/> : null}
            {Object.values(fish_SX_Data.youtube5)!=="" || Object.values(fish_SX_Data.youtube5)!==undefined ? <iframe width="100%" src={Object.values(fish_SX_Data.youtube5)}/> : null}
            <h3>{Object.values(fish_SX_Data.body3)}</h3>
          </div>
        ) : dat_hang && (
          <div style={{position:"relative", color:"white"}}>
            <h3>THÔNG TIN KHÁCH HÀNG</h3>
            <Form>
              <FormGroup>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
              </FormGroup>
              <FormGroup>
                <Input/>
                <Input/>
              </FormGroup>
              <FormGroup>
              {/* <Input style={{position:"relative"}}
                onChange={(e) => e.target.value}/> */}
                <h3>{random}</h3>
                <Button onClick={getRandomInt}><h1>&#x267B;</h1></Button>
              </FormGroup>
              <button onClick={""}>Mua ngay</button>
            </Form>
          </div>
        )}
      </div>
    )
  }

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
        {console.log(fish_SX_Data)}
      </div>
      {FishMap()}
    </div>
  )
}

export default ItemPage
