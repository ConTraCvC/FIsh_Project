import React, { useState, useMemo } from 'react'
import TopBar from '@component/components/top_bar'
import Image from 'next/image'
import background from '../assets/background.jpg'
import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"
import { db } from "@component/firebase/firebase"
import { collection, doc, getDoc, getDocs} from "firebase/firestore/lite"

import BasicBreadcrumbs from '@component/components/bread_crumbs'
import { Button, Form, FormGroup, Input, InputGroup, Table } from 'reactstrap'
import ReactPlayer from 'react-player'

export const revalidate = 120
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

  const newCollection = collection(db, "news")
  const techCollection = collection(db, "techniques")
  const foodCollection = collection(db, "foods")
  const fish_SX_collection = collection(db, `fish_SX`)
  const fish_TN_collection = collection(db, "fish_TN")

  const newSnap = await getDocs(newCollection, {
    next: {revalidate: 60}
  })
  const new_props = newSnap.docs.map((doc) => ({ ...doc.data()}))

  const techSnap = await getDocs(techCollection, {
    next: {revalidate: 60}
  })
  const tech_props = techSnap.docs.map((doc) => ({ ...doc.data()}))

  const foodSnap = await getDocs(foodCollection, {
    next: {revalidate: 60}
  })
  const food_props = foodSnap.docs.map((doc) => ({ ...doc.data()}))

  const fish_SX_Ref = doc(db, `fish_SX/${product}`)
  const fish_SX_Snap = await getDoc(fish_SX_Ref, {
    next: {revalidate: 60}
  })
  const fish_SxTable_Ref = doc(db, `fish_SX/${product}/details/fish_details`)
  const fish_SxTable_Snap = await getDoc(fish_SxTable_Ref, {
    next: {revalidate: 60}
  })

  const fish_TN_Ref = doc(db, `fish_TN/${product}`)
  const fish_TN_Snap = await getDoc(fish_TN_Ref, {
    next: {revalidate: 60}
  })
  const fish_TnTable_Ref = doc(db, `fish_TN/${product}/details/fish_details`)
  const fish_TnTable_Snap = await getDoc(fish_TnTable_Ref, {
    next: {revalidate: 60}
  })

  const fish_SX = await getDocs(fish_SX_collection, {
    next: {revalidate: 60}
  })
  const fish_SX_props = fish_SX.docs.map((doc) => ({ ...doc.data(), id: doc.id}))

  const fish_TN = await getDocs(fish_TN_collection, {
    next: {revalidate: 60}
  })
  const fish_TN_props = fish_TN.docs.map((doc) => ({ ...doc.data(), id: doc.id}))

  /////////////////////////////
  const fish_Data_Memo = fish_SX_Snap?.data() || fish_TN_Snap?.data() || null
  const fish_Table_data_Memo = fish_SxTable_Snap?.data() || fish_TnTable_Snap?.data() || null

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
    props: { new_props, tech_props, food_props, product,
      fish_Data_Memo, fish_Table_data_Memo, product,
      fish_SX_props, fish_TN_props}
  };
};

/////////////
const ItemPage = ({new_props, tech_props, food_props, fish_Data_Memo,
  fish_Table_data_Memo, product, fish_SX_props, fish_TN_props}) => {

  const fish_Data = useMemo(() => {
    const memo = fish_Data_Memo
    return memo
  }, [product])

  const fish_Table_data = useMemo(() => {
    const memo = fish_Table_data_Memo
    return memo
  }, [product])

  const NewListMap = Object.values(new_props).slice(0, 8).map(data => {
    return ( 
      <div className='new_feed__content__column'>
        <div>
          <Link href={"/"}>
            <img src={data.image} width="110" height="75" />
          </Link>
          <hr style={{borderTop:"0.1px", position:"relative", maxWidth:"100%"}}></hr>
        </div>
        <div style={{marginBottom:"2px", marginLeft:"10px",
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
    if(fish_Data!==null){
      const result = Object.values(fish_Data.don_gia)
      return result
    }
  }, [])
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

  const FishTable = () => { 
    return (
      <Table style={{width:"100%", height:"500px", fontSize:"18px"}}>
        <tr>
          <td>Tên gọi</td>
          <td>{Object.values(fish_Table_data.ten_goi)}</td>
        </tr>
        <tr>
          <td>Vùng nuôi</td>
          <td>{Object.values(fish_Table_data.vung_nuoi)}</td>
        </tr>
        <tr>
          <td> Hình thức nuôi</td>
          <td>{Object.values(fish_Table_data.hinh_thuc_nuoi)}</td>
        </tr>
        <tr>
          <td>Tiêu chuẩn chất lượng</td>
          <td>{Object.values(fish_Table_data.tieu_chuan)}</td>
        </tr><tr>
          <td>Kích thước</td>
          <td>{Object.values(fish_Table_data.kich_thuoc)}</td>
        </tr>
        <tr>
          <td>Mật độ thả</td>
          <td>{Object.values(fish_Table_data.mat_do_tha)}</td>
        </tr>
        <tr>
          <td>Thời gian nuôi đến thành phẩm</td>
          <td>{Object.values(fish_Table_data.thoi_gian_nuoi)}</td>
        </tr>
        <tr>
          <td>Kích cỡ đạt được</td>
          <td>{Object.values(fish_Table_data.kich_co)}</td>
        </tr>
        <tr>
          <td>Tỷ lệ sống trung  bình</td>
          <td>{Object.values(fish_Table_data.ti_le_song)}</td>
        </tr>
        <tr>
          <td>Loại thức ăn</td>
          <td>{Object.values(fish_Table_data.loai_thuc_an)}</td>
        </tr>
        <tr>
          <td>Hệ số chuyển đổi thức ăn</td>
          <td>{Object.values(fish_Table_data.hscd_thuc_an)}</td>
        </tr>
        <tr>
          <td>Giá trị dinh dưỡng</td>
          <td>{Object.values(fish_Table_data.gia_tri_dd)}</td>
        </tr>
        <tr>
          <td>Giá thương phẩm</td>
          <td>{Object.values(fish_Table_data.gia_thuong_pham)}</td>
        </tr>
        <tr>
          <td>Hệ số lợi nhuận trên 1kg cá</td>
          <td>{Object.values(fish_Table_data.hs_loi_nhuan)}</td>
        </tr>
        <tr>
          <td>Thực tại tại Việt Nam</td>
          <td>{Object.values(fish_Table_data.thuc_tai_sx)}</td>
        </tr>
        <tr>
          <td>Xu hướng phát triển</td>
          <td>{Object.values(fish_Table_data.xu_huong_pt)}</td>
        </tr>
      </Table>
    )
  }

  const FishMap = () => {
    return ( fish_Data!==null && fish_Table_data !==null ?
      <div style={{position:"absolute", left:"13%", top:"370px", maxWidth:"40%", paddingBottom:"2%"}}>
        <div style={{display:"flex"}}>
          <div>
            <h3 style={{color:"lightgreen", marginBottom:"3%"}}>{Object.values(fish_Data.title)}</h3>
            <img width="90%" src={fish_Data.imageBia}></img>
          </div>
          <div style={{position:'relative', paddingTop:"5%"}}>
            <h3 style={{color:"white"}}>Nội dung:</h3>
            <h5 style={{color:"lightgreen"}}>Giá: {`${Object.values(fish_Data.don_gia)}`} vnđ/cm/con</h5>
            <h5 style={{color:"white"}}>Kích thước</h5>
            <InputGroup style={{display:"flex"}}>
              <Input style={{height:"30px"}}
                value={kich_thuoc}
                onChange={(e) => setKich_thuoc(e.target.value)}></Input>
              <Button color='primary' size="sm" value={kich_thuoc}
                onClick={(e) => setKich_thuoc(++e.target.value)}>+</Button>
              <Button color='danger' size="sm" value={kich_thuoc}
                onClick={(e) => kich_thuoc>1 ? setKich_thuoc(--e.target.value) : null}>-</Button>
            </InputGroup>
            <h5 style={{color:"white"}}>Số lượng</h5>
            <InputGroup style={{display:"flex"}}>
              <Input style={{height:"30px"}}
                height="30px"
                value={so_luong}
                onChange={(e) => setSo_luong(e.target.value)}/>
              <Button color='primary' size='sm' value={so_luong}
                onClick={(e) => setSo_luong(++e.target.value)}>+</Button>
              <Button color='danger' size='sm' value={so_luong}
                onClick={(e) => so_luong>1 ? setSo_luong(--e.target.value) : null}>-</Button>
            </InputGroup>
            <h4 style={{position:"relative", color:"lightblue", paddingTop:"10px"}}>{`Tổng tiền: ${total}`}</h4>
          </div>
        </div>
        <Button style={{position:"relative", color:"white", margin:"20px 10px 0 0"}}
          onClick={() => setInfo(true) && setDat_Hang(false)}>Thông tin sản phẩm</Button>
        <Button style={{position:"relative", color:"white", margin:"20px 10px 0 0"}}
          onClick={() => setInfo(false) && setDat_Hang(true)}>Đặt hàng</Button>
        <hr></hr>
        { info ?  (
          <div style={{position:"relative", color:"white", marginTop:"2%"}}>
            <h1>HIỆU QUẢ MÔ HÌNH NUÔI</h1>
            <h5>{Object.values(fish_Data.body)}</h5>
            <h3>CÁ THƯƠNG PHẨM</h3>
            {fish_Data.imageTP!=="" && fish_Data.imageTP!==undefined ? <img width="100%" src={fish_Data.imageTP}></img> : null }

            {FishTable()}

            <h4>Hình 1:</h4>
            {fish_Data.image1!=="" && fish_Data.image1!==undefined ? <img width="100%" src={fish_Data.image1}/> : null}
            <h4>Hình 2:</h4>
            {fish_Data.image2!=="" && fish_Data.image2!==undefined ? <img width="100%" src={fish_Data.image2}></img> : null}
            <h4>Hình 3:</h4>
            {fish_Data.image3!=="" && fish_Data.image3!==undefined ? <img width="100%" src={fish_Data.image3}></img> : null}
            {Object.values(fish_Data.youtube)[0]!=="" && Object.values(fish_Data.youtube)[0]!==undefined ?
              <ReactPlayer controls={true} width="100%" url={Object.values(fish_Data.youtube)[0]}/> : null}
            {Object.values(fish_Data.youtube1)[0]!=="" && Object.values(fish_Data.youtube1)[0]!==undefined ? 
              <ReactPlayer controls={true} style={{paddingTop:"10px"}} width="100%" url={Object.values(fish_Data.youtube1)[0]}/> : null}
            <h4>Cá thương phẩm:</h4>
            <h4>{Object.values(fish_Data.body2)}</h4>
            {Object.values(fish_Data.youtube2)[0]!=="" && Object.values(fish_Data.youtube2)[0]!==undefined ?
              <ReactPlayer controls={true} style={{paddingTop:"10px"}} width="100%" url={Object.values(fish_Data.youtube2)[0]}/> : null}
            {Object.values(fish_Data.youtube3)[0]!=="" && Object.values(fish_Data.youtube3)[0]!==undefined ?
              <ReactPlayer controls={true} style={{paddingTop:"10px"}} width="100%" url={Object.values(fish_Data.youtube3)[0]}/> : null}
            {Object.values(fish_Data.youtube4)[0]!=="" && Object.values(fish_Data.youtube5)[0]!==undefined ?
              <ReactPlayer controls={true} style={{paddingTop:"10px"}} width="100%" url={Object.values(fish_Data.youtube4)[0]}/> : null}
            {Object.values(fish_Data.youtube5)[0]!=="" && Object.values(fish_Data.youtube5)[0]!==undefined ?
              <ReactPlayer controls={true} style={{paddingTop:"10px"}} width="100%" url={Object.values(fish_Data.youtube5)[0]}/> : null}
            <h5>{Object.values(fish_Data.body3)}</h5>
          </div>
        ) : dat_hang && (
          <div style={{color:"white", maxWidth:"65%", marginTop:"2%"}}>
            <h2>THÔNG TIN KHÁCH HÀNG</h2>
            <Form>
              <FormGroup style={{display:"flex", flexDirection:"column"}}>
                <Input style={{height:"40px", width:"135%"}} placeholder='Họ và tên'/>
                <Input style={{height:"40px", width:"135%"}} placeholder='Địa chỉ'/>
                <Input style={{height:"40px", width:"135%"}} placeholder='Email'/>
                <Input style={{height:"40px", width:"135%"}} placeholder='Số điện thoại'/>
                <Input size="lg" placeholder='Tiêu đề' style={{height:"30px", width:"155%"}}/>
                <Input type="textarea" placeholder='Nội dung' style={{height:"160px", width:"155%"}}/>
              </FormGroup>
              <FormGroup style={{display:"flex", paddingLeft:"15%"}}>
                <h3 style={{backgroundColor:"black", width:"100%"}}>{random}</h3>
                <Input placeholder='Nhập mã kiểm tra' style={{width:"160px", height:"60px"}}/>
                <Button style={{backgroundColor:"lightblue", height:"60px"}} onClick={getRandomInt}><h1>&#x267B;</h1></Button>
                <Button style={{backgroundColor:"orchid", marginLeft:"10%"}} >Mua ngay</Button>
              </FormGroup>
            </Form>
          </div>
        )}
      </div> : null
    )
  }

  return (
    <div className='mainframe__item'>
      <div className="bg-image-wrapper">
       <Image
          src={background}
          quality="100"
          layout='fill'
         />
      </div>
      <TopBar fetch1={fish_SX_props} fetch2={fish_TN_props}/>
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
          {TechNickMap}
        </div>
        <div className="new_feed__content3" style={{fontSize:"14px"}}>
          <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px",}}>ẨM THỰC</a>
          {FoodMap}
        </div>
        {/* {console.log(fish_Data)} */}
      </div>
      {FishMap()}
    </div>
  )
}

export default ItemPage
