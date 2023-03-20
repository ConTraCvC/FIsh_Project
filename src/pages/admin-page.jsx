import React, { useState } from 'react'
import Image from 'next/image'
import TopBar from '@component/pages/components/top_bar'
import BasicBreadcrumbs from '@component/pages/components/bread_crumbs'
import background from '../assets/background.jpg'
import { Form, FormGroup, Input, Table } from 'reactstrap'
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
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpenSX, setIsOpenSX] = useState(false);
  const [isOpenTN, setIsOpenTN] = useState(false);
  const [isOpenMU, setIsOpenMU] = useState(false);
  const [isOpenTC, setIsOpenTC] = useState(false);
  const [isOpenNT, setIsOpenNT] = useState(false);
  const [isOpenNN, setIsOpenNN] = useState(false);
  const [ imageUpload, setImageUpLoad ] = useState(null);
  const [image, setImage] = useState(null)
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)
  const [image_tp, setImage_tp] = useState(null)
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [body, setBody] = useState("");
  const [body2, setBody2] = useState("");
  const [body3, setBody3] = useState("");

  const handleClose = () => setIsOpen(false)
  const handleClose3 = () => setIsOpen3(false)
  const handleClose4 = () => setIsOpen4(false)
  const handleCloseSX = () => setIsOpenSX(false)
  const handleCloseTN = () => setIsOpenTN(false)
  const handleCloseMU = () => setIsOpenMU(false)
  const handleCloseTC = () => setIsOpenTC(false)
  const handleCloseNT = () => setIsOpenNT(false)
  const handleCloseNN = () => setIsOpenNN(false)

  const MENU_LIST = [
    {
      text: "UP ẢNH NEW FEED",
      function() {setIsOpen(true)}
    },{
      text: "UP ẢNH KỸ THUẬT",
      function() {setIsOpen3(true)}
    },{
      text: "UP ẢNH ẨM THỰC",
      function() {setIsOpen4(true)}
    }
  ]

  const PHAN_LOAI_SX = [
    {
      text: "GIỐNG CÁ BIỂN SẢN XUẤT",
      function() {setIsOpenSX(true)}
    },
    {
      text: "GIỐNG CÁ BIỂN TỰ NHIÊN",
      function() {setIsOpenTN(true)}
    },
    {
      text: "GIỐNG CÁ MÚ SẢN XUẤT",
      function() {setIsOpenMU(true)}
    },
    {
      text: "TÔM, CUA GIỐNG",
      function() {setIsOpenTC(true)}
    },
    {
      text: "GIỐNG NHUYỄN THỂ",
      function() {setIsOpenNT(true)}
    },
    {
      text: "GIỐNG CÁ NƯỚC NGỌT",
      function() {setIsOpenNN(true)}
    },
  ]

  // Get database
  const imageRef = collection(db, 'news');
  const techRef = collection(db, 'techniques');
  const foodRef = collection(db, 'foods');
  const fish_SX = collection(db, 'fish_types');
  const fish_TN = collection(db, 'fish_TN');
  const fish_MU = collection(db, 'fish_MU');
  const fish_TC = collection(db, 'fish_TC');
  const fish_NT = collection(db, 'fish_NT');
  const fish_NN = collection(db, 'fish_NN');

  const uploadImages = async() => {
    if (imageUpload == null) {
      return alert("Bạn hãy chọn file");
    } else {
      const fishRef = ref(store, `$fishs/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
    }
  }

  const uploadFirebase__New = async() => {
    if (imageUpload == null && Object.values(title).length, Object.values(body).length <= 0) {
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
    if (imageUpload == null && Object.values(title).length, Object.values(body).length <= 0) {
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
    if (imageUpload == null && Object.values(title).length, Object.values(body).length <= 0) {
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

  const uploadFirebase__SX = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_SX, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }

  const uploadFirebase__TN = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_TN, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }
  const uploadFirebase__MU = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_MU, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }
  const uploadFirebase__TC = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_TC, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }
  const uploadFirebase__NT = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_NT, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }
  const uploadFirebase__NN = async() => {
    if (image_tp == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
      const fishRef = ref(store, `fishs/${image_tp.name}`)
      await uploadBytes(fishRef, image_tp).then(() => {
        alert("Image Uploaded")
      })
      await addDoc(fish_NN, {
          title: {title},
          body: {body},
          image_tp: `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image_tp.name}?alt=media`
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
      text: "BẠN ĐÃ CHẮC CHẮN VỀ KỸ THUẬT ??",
      upload: uploadFirebase__Tech,
      handle: handleClose3,
      boolean: isOpen3
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ ẨM THỰC ??",
      upload: uploadFirebase__Food,
      handle: handleClose4,
      boolean: isOpen4
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ SX ??",
      upload: uploadFirebase__SX,
      handle: handleCloseSX,
      boolean: isOpenSX
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ TỰ NHIÊN ??",
      upload: uploadFirebase__TN,
      handle: handleCloseTN,
      boolean: isOpenTN
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ MÚ SẢN XUẤT ??",
      upload: uploadFirebase__MU,
      handle: handleCloseMU,
      boolean: isOpenMU
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ TÔM CUA GIỐNG ??",
      upload: uploadFirebase__TC,
      handle: handleCloseTC,
      boolean: isOpenTC
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG NHUYỄN THỂ ??",
      upload: uploadFirebase__NT,
      handle: handleCloseNT,
      boolean: isOpenNT
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ NƯỚC NGỌT ??",
      upload: uploadFirebase__NN,
      handle: handleCloseNN,
      boolean: isOpenNN
    }
  ]

  const [slice, setSlice] = useState(false)
  const [slice2, setSlice2] = useState(false)
  const [slice3, setSlice3] = useState()
  const [slice4, setSlice4] = useState()
  const [slice5, setSlice5] = useState()
  const [slice6, setSlice6] = useState()

  const ListItem = (params) => {
    console.log(params[0])
    return(
      <div style={{position:"relative", justifyContent:"center", marginLeft:"15%", marginTop:"5%"}}>
        <h2 style={{position:"relative", color:"white", top:"-1rem"}} >{params[0]}</h2>
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
             scolor='success' onClick={params[0]} type="submit">Upload</button>
        <hr style={{width:"80%"}} ></hr>
      </div>
    )
  }
  
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

    {/* <div style={{position:"relative", marginTop:"1%", marginLeft:"14.5%", maxWidth:"80%"}}>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px",
        borderTopLeftRadius:'5px', borderBottomLeftRadius:"5px"}}
        onClick={""}>CÁ BIỂN SẢN XUẤT</button>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px"}}
        onClick={""}>CÁ BIỂN TỰ NHIÊN</button>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px"}}
        onClick={""}>CÁ MÚ SẢN XUẤT</button>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px"}}
        onClick={""}>GIỐNG TÔM CUA</button>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px"}}
        onClick={""}>GIỐNG NHUYỄN THỂ</button>
      <button style={{position:"relative", color:"black",
        backgroundColor:"darkgrey", width:"180px", height:"50px",
        borderTopRightRadius:'5px', borderBottomRightRadius:'5px'}}
        onClick={""}>CÁ NƯỚC NGỌT</button>
    </div> */}

    <button onClick={() => ListItem(PHAN_LOAI_SX.slice(0,1))} style={{position:"relative", color:"black"}}>SSS</button>
    <button onClick={() => ListItem(PHAN_LOAI_SX.slice(1,2))} style={{position:"relative", color:"black"}}>UUU</button>
    
    <ListItem/>

    {/* {slice2 && PHAN_LOAI_SX.slice(1,2).map((menu) => {
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
    })} */}

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
          <FormGroup style={{paddingLeft:"2%", paddingTop:"2rem"}}>
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