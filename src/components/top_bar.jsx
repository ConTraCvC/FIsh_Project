import Link from "next/link";
import React, { useRef, useState } from "react";
import TopItem from "./top_item";
import logo_vi from "../assets/logo_vi.png"
import Image from "next/image";
import { useRouter } from "next/router";
import { Input, Form, Button, FormGroup } from "reactstrap";
import TopDropDown from "./top_drop_down";
import Popup from "reactjs-popup";
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const redirect = () => {username==="admin"&&password==="admin" ?
    router.push('/admin-page')+setCookie('admin','admin',{secure:true}) : alert("Sai mật khẩu")}

  const handleKeyDown = (event) => {
    event.code="Enter"
    if(username==="admin"&&password==="admin"){
      setCookie('admin', 'admin', {secure:true})
      router.push('/admin-page')
    }
    if(username!=="admin"&&password!=="admin"&&event.key==="Enter"){
      alert("Sai mật khẩu")
    }
  }

  const exit = () => {
    deleteCookie('admin')
    router.push("/")
  }

  return (
    <div style={{display:"flex"}}>
      { getCookie('admin')!=null&&getCookie('admin')!=undefined ?
      <Button size="lg" color="danger" onClick={exit}>Exit</Button> :
      <Popup contentStyle={{width: "200px"}} trigger={<div><Button color="warning" id="login">Admin</Button></div>}
      position="bottom right">
        <Form style={{backgroundColor:"LightSteelBlue", borderRadius:"5px"}}>
          <FormGroup controlId="username">
            <h5 color="white">Username:</h5>
            <Input
              placeholder="&#x1F464; Username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}/>
          </FormGroup>
          <FormGroup>
          <h5 color="white">Password:</h5>
            <Input
              placeholder="&#x1F512; Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}/>
            <hr></hr>
          </FormGroup>
          <Button size="lg" color="success" onClick={redirect} style={{marginLeft:"30%"}}>Login</Button>
        </Form>
      </Popup>
      }
    </div>
  )
}

const MENU_LIST = [
  {
    text: "Trang chủ |",
    href: "/"
  },{
    text: "Giới thiệu",
    href: "/about"
  },{
    text: "Liên Hệ",
    href:"/contact"
  },{
    text: "Hỏi Đáp",
    href:"/question"
  },{
    text: "Dự báo thời tiết",
    href:"/weather"
  }
]

const TopBar = ({fetch1, fetch2, fetch3, fetch4}) => {

  // console.log()

  const searchRef = useRef(null);

  const router = useRouter()
  const handleSubmit = (e) => {
      e.preventDefault()
      router.push(`/search?keyword=${searchRef.current.value}`)
  }

  function SearchBar() {
    return (
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          innerRef={searchRef}
          type="text"
          placeholder="&#128269; Bạn muốn tìm sản phẩm nào"
          style={{ height:'35px',width:'320px',borderRadius:"10px"}}
        />
       </Form>
    )
  }

  return(
    <header>
      <nav>
        <div id="logo">
          <Link href={"/"}>
            <Image src={logo_vi} style={{position:"relative", left:"1rem", top:"1rem"}}/>
          </Link>
        </div>
        <div className="top__menu-list">
          {MENU_LIST.map((menu) => {
            return (
              <TopItem {...menu}/>
            )
          })}
          {admin()}
          {getCookie('admin')==='admin' ? <Link href={"/admin-page"}>Upload</Link> : null}
        </div>
        <div style={{position:"relative", top:"-5rem", marginLeft:"69%"}}>
          <SearchBar/>
        </div>
        <TopDropDown data1={fetch1} data2={fetch2} data3={fetch3} data4={fetch4}/>
      </nav>
    </header>
  )
}

export default TopBar