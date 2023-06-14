import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import TopBar from '@component/components/top_bar'
import BasicBreadcrumbs from '@component/components/bread_crumbs'
import background from '../assets/background.jpg'
import { Button, Form, FormGroup, Input, Table } from 'reactstrap'
import { ref, uploadBytes} from "firebase/storage";
import { store } from '@component/firebase/firebase'
import { Modal, Box } from '@mui/material'
import { db } from "@component/firebase/firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore/lite"
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

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
  
  const router = useRouter()
  useEffect(() => {
    getCookie('admin')==='admin' ? router.push('/admin-page') : router.push('/')
  }, [])

  const [isOpenNF, setIsOpenNF] = useState(false);
  const [isOpenKT, setIsOpenKT] = useState(false);
  const [isOpenAT, setIsOpenAT] = useState(false);
  const [isOpenSX, setIsOpenSX] = useState(false);
  const [isOpenTN, setIsOpenTN] = useState(false);
  const [isOpenMU, setIsOpenMU] = useState(false);
  const [isOpenTC, setIsOpenTC] = useState(false);
  const [isOpenNT, setIsOpenNT] = useState(false);
  const [isOpenNN, setIsOpenNN] = useState(false);
  const [imageUpload, setImageUpLoad] = useState(null);
  const [imageBia, setImageBia] = useState(null)
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)
  const [imageTP, setImageTP] = useState(null)
  const [title, setTitle] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [body, setBody] = useState("");
  const [body1, setBody1] = useState("");
  const [body2, setBody2] = useState("");
  const [body3, setBody3] = useState("");
  const [don_gia, setDon_gia] = useState(0);
  const [youtube, setYoutube] = useState("");
  const [youtube1, setYoutube1] = useState("");
  const [youtube2, setYoutube2] = useState("");
  const [youtube3, setYoutube3] = useState("");
  const [youtube4, setYoutube4] = useState("");
  const [youtube5, setYoutube5] = useState("");
  const [gia_thuong_pham, setGia_thuong_pham] = useState("");
  const [gia_tri_dd, setGia_tri_dd] = useState("");
  const [hinh_thuc_nuoi, setHinh_thuc_nuoi] = useState("");
  const [hs_loi_nhuan, setHs_loi_nhuan] = useState("");
  const [hscd_thuc_an, setHscd_thuc_an] = useState("");
  const [kich_co, setKich_co] = useState("");
  const [kich_thuoc, setKich_thuoc] = useState("");
  const [loai_thuc_an, setLoai_thuc_an] = useState("");
  const [mat_do_tha, setMat_do_tha] = useState("");
  const [ten_goi, setTen_goi] = useState("");
  const [thoi_gian_nuoi, setThoi_gian_nuoi] = useState("")
  const [thuc_tai_sx, setThuc_tai_sx] = useState("")
  const [ti_le_song, setTi_le_song] = useState("")
  const [tieu_chuan, setTieu_chuan] = useState("")
  const [vung_nuoi, setVung_nuoi] = useState("")
  const [xu_huong_pt, setXu_huong_pt] = useState("")

  const handleClose = () => setIsOpenNF(false)
  const handleClose3 = () => setIsOpenKT(false)
  const handleClose4 = () => setIsOpenAT(false)
  const handleCloseSX = () => setIsOpenSX(false)
  const handleCloseTN = () => setIsOpenTN(false)
  const handleCloseMU = () => setIsOpenMU(false)
  const handleCloseTC = () => setIsOpenTC(false)
  const handleCloseNT = () => setIsOpenNT(false)
  const handleCloseNN = () => setIsOpenNN(false)

  const MENU_LIST = [
    {
      text: "UP ẢNH NEW FEED",
      function() {setIsOpenNF(true)}
    },{
      text: "UP ẢNH KỸ THUẬT",
      function() {setIsOpenKT(true)}
    },{
      text: "UP ẢNH ẨM THỰC",
      function() {setIsOpenAT(true)}
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
  const fish_SX = collection(db, 'fish_SX');
  const fish_TN = collection(db, 'fish_TN');
  const fish_MU = collection(db, 'fish_MU');
  const fish_TC = collection(db, 'fish_TC');
  const fish_NT = collection(db, 'fish_NT');
  const fish_NN = collection(db, 'fish_NN');

  const uploadFirebase__New = async() => {
    if (imageUpload == null && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập đủ trường");
    } else {
      const fishRef = ref(store, `news/${imageUpload.name}`)
      await uploadBytes(fishRef, imageUpload).then(() => {
        alert("Image Uploaded")
      })
    
    if(image1!==null && image1!==undefined) {
      const fishRef2 = ref(store, `news/${image1.name}`)
      await uploadBytes(fishRef2, image1)
    }
      const current = new Date();
      await addDoc(imageRef, {
          title: {title},
          body: {body},
          image: imageUpload?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/news%2F${imageUpload?.name}?alt=media` : '',
          image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/news%2F${image1?.name}?alt=media` : '',
          youtube: {youtube},
          youtube1: {youtube1},
          body1: {body1},
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

    if (image1!==null && image1!==undefined) {
      const fishRef2 = ref(store, `techniques/${image1.name}`)
      await uploadBytes(fishRef2, image1)
    }
      const current = new Date();
      await addDoc(techRef, {
          title: {title},
          body: {body},
          image: imageUpload?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/techniques%2F${imageUpload?.name}?alt=media` : '',
          image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/techniques%2F${image1?.name}?alt=media` : '',
          youtube: {youtube},
          youtube1: {youtube1},
          body1: {body1},
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

    if(image1!==null && image1!==undefined) {
      const fishRef2 = ref(store, `foods/${image1.name}`)
      await uploadBytes(fishRef2, image1)
    }
      const current = new Date();
      await addDoc(foodRef, {
          title: {title},
          body: {body},
          image: imageUpload?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/foods%2F${imageUpload?.name}?alt=media` : '',
          image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/foods%2F${image1?.name}?alt=media` : '',
          youtube: {youtube},
          youtube1: {youtube1},
          body1: {body1},
          date: `- ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} -`
      }).then(() => {
        alert("Data Pushed")
      })
    }
  }

  const uploadFirebase__SX = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_SX, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_SX/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const uploadFirebase__TN = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_TN, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_TN/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const uploadFirebase__MU = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_MU, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_MU/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const uploadFirebase__TC = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_TC, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_TC/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const uploadFirebase__NT = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_NT, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_NT/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const uploadFirebase__NN = async() => {
    if (imageBia == null && imageBia!==undefined && Object.values(title).length, Object.values(body).length <= 0) {
      return alert("Bạn hãy chọn file và nhập trường");
    } else {
    const fishRef = ref(store, `fishs/${imageBia?.name}`)
    await uploadBytes(fishRef, imageBia).then(() => {
      alert("Image Uploaded")
    })
    const fishRef1 = ref(store, `fishs/${imageTP?.name}`)
    if(imageTP!==null && imageTP!==undefined){
    await uploadBytes(fishRef1, imageTP)}

    const fishRef2 = ref(store, `fishs/${image1?.name}`)
    if(image1!==null && image1!==undefined){
    await uploadBytes(fishRef2, image1)}

    const fishRef3 = ref(store, `fishs/${image2?.name}`)
    if(image2!==null && image2!==undefined){
    await uploadBytes(fishRef3, image2)}

    const fishRef4 = ref(store, `fishs/${image3?.name}`)
    if(image3!==null && image3!==undefined){
    await uploadBytes(fishRef4, image3)}

    if(image4!==null && image3!==undefined){
    const fishRef5 = ref(store, `fishs/${image4?.name}`)
    await uploadBytes(fishRef5, image4)}

    try {
      const docRef = await addDoc(fish_NN, {
        title: {title},
        title1: {title1},
        body: {body},
        imageTP: imageTP?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageTP?.name}?alt=media` : '',
        don_gia: {don_gia},
        body1: {body1},
        imageBia: imageBia?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${imageBia?.name}?alt=media` : '',
        image1: image1?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image1?.name}?alt=media` : '',
        image2: image2?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image2?.name}?alt=media` : '',
        image3: image3?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image3?.name}?alt=media` : '',
        image4: image4?.name!==undefined ? `https://firebasestorage.googleapis.com/v0/b/fishshop-80d05.appspot.com/o/fishs%2F${image4?.name}?alt=media` : '',
        title2: {title2},
        body2: {body2},
        youtube: {youtube},
        youtube1: {youtube1},
        youtube2: {youtube2},
        youtube3: {youtube3},
        youtube4: {youtube4},
        youtube5: {youtube5},
        body3: {body3}
      }).then(alert("Data pushed!"))
      await setDoc(doc(db, `fish_NN/${docRef.id}/details/fish_details`), {
        gia_thuong_pham: {gia_thuong_pham},
        gia_tri_dd: {gia_tri_dd},
        hinh_thuc_nuoi: {hinh_thuc_nuoi},
        hs_loi_nhuan: {hs_loi_nhuan},
        hscd_thuc_an: {hscd_thuc_an},
        kich_co: {kich_co},
        kich_thuoc: {kich_thuoc},
        loai_thuc_an: {loai_thuc_an},
        mat_do_tha: {mat_do_tha},
        ten_goi: {ten_goi},
        thoi_gian_nuoi: {thoi_gian_nuoi},
        thuc_tai_sx: {thuc_tai_sx},
        ti_le_song: {ti_le_song},
        tieu_chuan: {tieu_chuan},
        vung_nuoi: {vung_nuoi},
        xu_huong_pt: {xu_huong_pt}
      })
    } catch(e) {
      console.error("Error adding document: ", e);
    }
  }}

  const MODAL_MAPPING = [
    {
      text: "BẠN ĐÃ CHẮC CHẮN VỀ NEW FEED ??",
      upload: uploadFirebase__New,
      handle: handleClose,
      boolean: isOpenNF
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ KỸ THUẬT ??",
      upload: uploadFirebase__Tech,
      handle: handleClose3,
      boolean: isOpenKT
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ ẨM THỰC ??",
      upload: uploadFirebase__Food,
      handle: handleClose4,
      boolean: isOpenAT
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ BIỂN SẢN XUẤT ??",
      upload: uploadFirebase__SX,
      handle: handleCloseSX,
      boolean: isOpenSX
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ BIỂN TỰ NHIÊN ??",
      upload: uploadFirebase__TN,
      handle: handleCloseTN,
      boolean: isOpenTN
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ GIỐNG CÁ MÚ SẢN XUẤT ??",
      upload: uploadFirebase__MU,
      handle: handleCloseMU,
      boolean: isOpenMU
    },{
      text: "BẠN ĐÃ CHẮC CHẮN VỀ TÔM, CUA GIỐNG ??",
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
  const [slice3, setSlice3] = useState(false)
  const [slice4, setSlice4] = useState(false)
  const [slice5, setSlice5] = useState(false)
  const [slice6, setSlice6] = useState(false)

  const handleClickEvent = (event) => {
    const buttonValue = event.target.value;
    switch (buttonValue) {
      case "1": setSlice(true) + setSlice2(false)
      + setSlice3(false) + setSlice4(false) + setSlice5(false) + setSlice6(false)
      break;
      case "2": setSlice2(true) + setSlice(false)
      + setSlice3(false) + setSlice4(false) + setSlice5(false) + setSlice6(false)
      break;
      case "3": setSlice3(true) + setSlice(false)
      + setSlice2(false) + setSlice4(false) + setSlice5(false) + setSlice6(false)
      break;
      case "4": setSlice4(true) + setSlice(false)
      + setSlice2(false) + setSlice3(false) + setSlice5(false) + setSlice6(false)
      break;
      case "5": setSlice5(true) + setSlice(false)
      + setSlice2(false) + setSlice3(false) + setSlice4(false) + setSlice6(false)
      break;
      case "6": setSlice6(true) + setSlice(false)
      + setSlice2(false) + setSlice3(false) + setSlice4(false) + setSlice5(false)
      break;
      default: setSlice(true) + setSlice2(false)
      + setSlice3(false) + setSlice4(false) + setSlice5(false) + setSlice6(false)
    }
  }

  const items = slice ? PHAN_LOAI_SX.slice(0,1) : slice2 ? PHAN_LOAI_SX.slice(1,2)
    : slice3 ? PHAN_LOAI_SX.slice(2,3) : slice4 ? PHAN_LOAI_SX.slice(3,4)
    : slice5 ? PHAN_LOAI_SX.slice(4,5) : slice6 ? PHAN_LOAI_SX.slice(5,6)
    : PHAN_LOAI_SX.slice(0,1)
  
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
          <Button onClick={menu.upload} style={{position:"relative", left:"13%", width:"100px", height:"30px",
            marginRight:"1rem", marginTop:"1rem", backgroundColor:"royalblue", borderRadius:"5px"}}>UPLOAD</Button>
          <Button onClick={menu.handle} style={{position:"relative", left:"20%", width:"100px",
            height:"30px", backgroundColor:"red", borderRadius:"5px"}}>EXIT</Button>
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

    <div className='control_button' style={{position:"relative", left:"15%", maxWidth:"80%"}}>
      <Button value="1" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px",
        borderTopLeftRadius:"5px", borderBottomLeftRadius:"5px", fontWeight:"bold"}}>CÁ BIỂN SẢN XUẤT</Button>
      <Button value="2" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px", fontWeight:"bold"}}>CÁ BIỂN TỰ NHIÊN</Button>
      <Button value="3" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px", fontWeight:"bold"}}>CÁ MÚ SẢN XUẤT</Button>
      <Button value="4" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px", fontWeight:"bold"}}>GIỐNG TÔM, CUA</Button>
      <Button value="5" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px", fontWeight:"bold"}}>GIỐNG NHUYỄN THỂ</Button>
      <Button value="6" onClick={handleClickEvent} style={{position:"relative", color:'black',
        backgroundColor:"darkgrey", width:"14.5%", height:"60px",
        borderTopRightRadius:"5px", borderBottomRightRadius:"5px", fontWeight:"bold"}}>GIỐNG CÁ NƯỚC NGỌT</Button>
    </div>
    
    {items.map((menu) => {
      return(
        <div style={{position:"relative", justifyContent:"center", marginLeft:"15%", marginTop:"5%"}}>
        <h2 style={{position:"relative", color:"white", top:"-1rem"}} >{menu.text}</h2>
        <Form>
          <FormGroup>
          <Table className='table__css' style={{width:"80%", color:"white", position:"relative"}}>
            <thead>
              <tr>
                <th>Ảnh Bìa:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    type='file'
                    onChange={(event) => setImageBia(event.target.files[0])}>
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
                <th>Tiêu Đề 2:</th>
                <td>
                  <Input
                    type='textarea'
                    placeholder='Nhập Tiêu Đề'
                    onChange={(e) => setTitle1(e.target.value)}>
                  </Input></td>
              </tr>
              <tr>
                <th>Nội Dung:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Nội Dung'
                    onChange={(e) => setBody(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Đơn Giá:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Đơn Giá'
                    onChange={(e) => setDon_gia(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Nội Dung 2:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Nội Dung'
                    onChange={(e) => setBody1(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Ảnh Thành Phẩm:</th>
                <td>
                  <Input 
                    type='file' 
                    onChange={(e) => setImageTP(e.target.files[0])}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Ảnh Thứ 2:</th>
                <td>
                  <Input 
                    type='file' 
                    onChange={(e) => setImage1(e.target.files[0])}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Ảnh Thứ 3:</th>
                <td>
                  <Input 
                    type='file' 
                    onChange={(e) => setImage2(e.target.files[0])}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Ảnh Thứ 4:</th>
                <td>
                  <Input 
                    type='file' 
                    onChange={(e) => setImage3(e.target.files[0])}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Ảnh Thứ 5:</th>
                <td>
                  <Input 
                    type='file' 
                    onChange={(e) => setImage4(e.target.files[0])}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Tiêu Đề 3:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Tiêu'
                    onChange={(e) => setTitle2(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Nội dung 3:</th>
                <td>
                  <Input 
                    type='textarea' 
                    placeholder='Nhập Nội Dung'
                    onChange={(e) => setBody2(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 1:</th>
                <td>
                  <Input
                    style={{height:"35px", width:"400px"}} 
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 2:</th>
                <td>
                  <Input 
                    style={{height:"35px", width:"400px"}}
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube1(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 3:</th>
                <td>
                  <Input 
                    style={{height:"35px", width:"400px"}}
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube2(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 4:</th>
                <td>
                  <Input 
                    style={{height:"35px", width:"400px"}}
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube3(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 5:</th>
                <td>
                  <Input
                    style={{height:"35px", width:"400px"}}
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube4(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Video 6:</th>
                <td>
                  <Input 
                    style={{height:"35px", width:"400px"}}
                    type='link' 
                    placeholder='Nhập Video'
                    onChange={(e) => setYoutube5(e.target.value)}>
                  </Input>
                </td>
              </tr>
              <tr>
                <th>Nội Dung Cuối Bài:</th>
                <td>
                  <Input 
                    style={{height:"35px", width:"400px"}}
                    type='textarea' 
                    placeholder='Nhập Nội Dung'
                    onChange={(e) => setBody3(e.target.value)}>
                  </Input>
                </td>
              </tr>
            </thead>
          </Table>
          </FormGroup>
          <h3 style={{position:"relative", color:"white", padding:"10px 0 10px 0"}}>Thông số chi tiết:</h3>
          <FormGroup>
            <Table className='table__css' style={{color:"white", width:"80%", position:"relative"}}>
              <thead>
                <tr>
                <th>Tên gọi:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setTen_goi(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Vùng nuôi:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setVung_nuoi(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Hình thức nuôi:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setHinh_thuc_nuoi(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Tiêu chuẩn chất lượng:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setTieu_chuan(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Kích thước cá giống:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setKich_thuoc(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Mật độ thả:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setMat_do_tha(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Thời gian nuôi thương phẩm:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setThoi_gian_nuoi(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Kích cỡ đạt được:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setKich_co(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Tỷ lệ sống trung bình:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setTi_le_song(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Loại thức ăn:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setLoai_thuc_an(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Hệ số chuyển đổi thức ăn:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setHscd_thuc_an(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Giá trị dinh dưỡng:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setGia_tri_dd(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Giá thương phẩm:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setGia_thuong_pham(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Hệ số lợi nhuận trên 1 kg cá:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setHs_loi_nhuan(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Thực tại ở Viêt Nam:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setThuc_tai_sx(event.target.value)}>
                  </Input></td>
                </tr>
                <tr>
                <th>Xu hướng phát triển:</th>
                <td width="50%" style={{textAlign:'center'}}>
                  <Input
                    style={{width:"400px", height:"30px"}}
                    placeholder="Chi tiết"
                    type='text'
                    onChange={(event) => setXu_huong_pt(event.target.value)}>
                  </Input></td>
                </tr>
              </thead>
            </Table>
          </FormGroup>
          <FormGroup style={{paddingLeft:"2%", paddingTop:"2rem"}}>
            {""}
          </FormGroup>
        </Form>
        <Button style={{width:"100px", height:"40px", fontSize:"18px", backgroundColor:"royalblue", borderRadius:"10px", marginBottom:"5rem"}}
             scolor='success' onClick={menu.function} type="submit">Upload</Button>

        <hr style={{width:"80%"}} ></hr>
      </div>
      )
    })}

    {MENU_LIST.map((menu) => {
      return(
        <div style={{position:"relative", justifyContent:"center", marginLeft:"15%", marginTop:"5%"}}>
        <h2 style={{position:"relative", color:"white", top:"-1rem"}} >{menu.text}</h2>
        <Form>
          <FormGroup>
          <Table className='table__css2' style={{width:"80%", color:"white", position:"relative"}}>
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
        <Button style={{width:"100px", height:"40px", fontSize:"18px", backgroundColor:"royalblue", borderRadius:"10px", marginBottom:"5rem"}}
             scolor='success' onClick={menu.function} type="submit">Upload</Button>

        <hr style={{width:"80%"}} ></hr>
      </div>
      )
    })}
    </div>
  )
}