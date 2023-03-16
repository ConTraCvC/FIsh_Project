import React from 'react'
import Image from 'next/image'
import TopBar from '@component/pages/components/top_bar'
import BasicBreadcrumbs from '@component/pages/components/bread_crumbs'
import background from '../assets/background.jpg'
import { Form, FormGroup, Input, Table } from 'reactstrap'
import { useState } from 'react'
import { ref, uploadBytes} from "firebase/storage";
import { store } from '@component/firebase/firebase'
import { Modal, Box } from '@mui/material'
import { db } from "@component/firebase/firebase"
import { addDoc, collection } from "firebase/firestore/lite"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  color:"white",
  borderRadius:"10px"
};

export default function Admin() {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [ imageUpload, setImageUpLoad ] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClose = () => setIsOpen(false)
  const handleClose2 = () => setIsOpen2(false)
  const handleClose3 = () => setIsOpen3(false)
  const handleClose4 = () => setIsOpen4(false)

  const MENU_LIST = [
    {
      text: "UP ẢNH NEW FEED",
      function() {setIsOpen(true)}
    },{
      text: "UP ẢNH GIỐNG CÁ",
      function() {setIsOpen2(true)}
    },{
      text: "UP ẢNH KỸ THUẬT",
      function() {setIsOpen3(true)}
    },{
      text: "UP ẢNH ẨM THỰC",
      function() {setIsOpen4(true)}
    }
  ]

  // Get database
  const imageRef = collection(db, 'news');
  const techRef = collection(db, 'techniques');
  const foodRef = collection(db, 'foods');

  const uploadImages = async() => {
    if (imageUpload == null) {
      return alert("Bạn hãy chọn file");
    } else {
      const fishRef = ref(store, `$ca_giong/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
    }
  }

  const uploadFirebase__New = async() => {
    if (imageUpload == null && Object.values(title).length, Object.values(title).length <= 0) {
      return alert("Bạn hãy chọn file và nhập đủ trường");
    } else {
      const fishRef = ref(store, `news/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
      const current = new Date();
      await addDoc(imageRef, {
          title: {title},
          body: {body},
          image: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/news%2F${imageUpload.name}?alt=media`,
          date: `- ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} -`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }

  const uploadFirebase__Tech = async() => {
    if (imageUpload == null && Object.values(title).length, Object.values(title).length <= 0) {
      return alert("Bạn hãy chọn file và nhập đủ trường");
    } else {
      const fishRef = ref(store, `techniques/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
      const current = new Date();
      await addDoc(techRef, {
          title: {title},
          body: {body},
          image: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/techniques%2F${imageUpload.name}?alt=media`,
          date: `- ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} -`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }

  const uploadFirebase__Food = async() => {
    if (imageUpload == null && Object.values(title).length, Object.values(title).length <= 0) {
      return alert("Bạn hãy chọn file và nhập đủ trường");
    } else {
      const fishRef = ref(store, `foods/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
      const current = new Date();
      await addDoc(foodRef, {
          title: {title},
          body: {body},
          image: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/foods%2F${imageUpload.name}?alt=media`,
          date: `- ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} -`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }

  const MODAL_MAPPING = [
    {
      text: "BẠN ĐÃ CHẮC CHẮN VỀ NEW FEED ??",
      upload: uploadFirebase__New,
      handle: handleClose,
      boolean: isOpen
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ ??",
      upload: uploadFirebase__New,
      handle: handleClose2,
      boolean: isOpen2
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ KỸ THUẬT ??",
      upload: uploadFirebase__Tech,
      handle: handleClose3,
      boolean: isOpen3
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ ẨM THỰC ??",
      upload: uploadFirebase__Food,
      handle: handleClose4,
      boolean: isOpen4
    }
  ]
  
  ///////////////////
  return (
    <div className='mainframe-admin' style={{overflowX:"hidden"}}>
    {MODAL_MAPPING.map((menu) => {
      return(
        <Modal
        open={menu.boolean}
        onClose={menu.handle}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style ,width: 400 }}>
          <h2 id="parent-modal-title">{menu.text}</h2>
          <button onClick={menu.upload} style={{position:"relative", left:"13%", width:"100px", height:"30px",
            marginRight:"1rem", marginTop:"1rem", backgroundColor:"royalblue", borderRadius:"5px"}}>UPLOAD</button>
          <button onClick={menu.handle} style={{position:"relative", left:"20%", width:"100px",
            height:"30px", backgroundColor:"red", borderRadius:"5px"}}>EXIT</button>
        </Box>
      </Modal>
      )
    })}

    <div className="bg-image-wrapper">
     <Image
        src={background}
        quality="100"
        layout='fill'
       />
    </div>
    <TopBar/>
    <BasicBreadcrumbs/>

    <Form style={{display:"flex", marginTop:"5%"}}>
      <h2 style={{color:'white', position:"relative", marginLeft:"15%"}}>UP ẢNH THƯỜNG</h2>
      <Input type='file'
        style={{color:"white", position:"relative", marginLeft:"3rem"}}
        onChange={(e) => setImageUpLoad(e.target.files[0])}></Input>
      <button onClick={uploadImages} style={{position:"relative", width:"100px", height:"30px", backgroundColor:"royalblue", borderRadius:"5px", marginLeft:"2rem"}}>UPLOAD</button>
    </Form>
    <hr style={{position:"relative", color:"white", margin:"auto", maxWidth:"70%", marginTop:"2%"}}></hr>

    {MENU_LIST.map((menu) => {
      return(
        <div style={{position:"relative", justifyContent:"center", marginLeft:"15%", marginTop:"5%"}}>
        <h2 style={{position:"relative", color:"white", top:"-1rem"}} >{menu.text}</h2>
        <Form>
          <FormGroup>
          <Table className='table__css' style={{width:"80%", color:"white", position:"relative"}}>
            <thead>
              <tr>
                <th>Ảnh:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    type='file'
                    onChange={(event) => setImageUpLoad(event.target.files[0])}>
                  </Input></td>
              </tr>
              <tr>
                <th>Tiêu Đề:</th>
                <td>
                  <Input
                    type='textarea'
                    placeholder='Nhập Tiêu Đề'
                    onChange={(e) => setTitle(e.target.value)}>
                  </Input></td>
              </tr>
              <tr>
                <th>Nội dung:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Nội Dung'
                    onChange={(e) => setBody(e.target.value)}>
                  </Input>
                </td>
              </tr>
            </thead>
          </Table>
          </FormGroup>
          <FormGroup style={{paddingLeft:"2%", paddingTop:"3rem"}}>
            {""}
          </FormGroup>
        </Form>
        <button style={{width:"100px", height:"40px", fontSize:"18px", backgroundColor:"royalblue", borderRadius:"10px", marginBottom:"5rem"}}
             scolor='success' onClick={menu.function} type="submit">Upload</button>

        <hr style={{width:"80%"}} ></hr>
      </div>
      )
    })}
    </div>
  )
}