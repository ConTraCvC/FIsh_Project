import Link from "next/link";
import React from "react";
import TopItem from "./top_item";
import logo_vi from "../../assets/logo_vi.png"
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Input, Form } from "reactstrap";
import TopDropDown from "./top_drop_down";

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
    text: "Sơ đồ web",
    href:"/webmap"
  },{
    text: "Dự báo thời tiết",
    href:"/weather"
  },{
    text: "Admin",
    href:"/admin-page"
  }
]

const TopBar = () => {

  const router = useRouter()
  const [query, setQuery] = useState("")
  const handleSubmit = (e) => {
      e.preventDefault()
      router.push("/search?keyword=" + query)
  }

  function SearchBar() {
    return (
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          value={query}
          placeholder="&#128269; Bạn muốn tìm sản phẩm nào"
          style={{ height:'35px',width:'320px',borderRadius:"5px"}}
          onChange={(e) => setQuery(e.target.value)}
        />
       </Form>
    )
  }

  return(
    <header>
      <nav>
        <Link href={"/"}>
          <Image src={logo_vi} style={{position:"relative", left:"1rem", top:"1rem"}}/>
        </Link>

        <div className="top__menu-list">
          {MENU_LIST.map((menu) => {
            return (
              <TopItem {...menu}/>
            )
          })}
        </div>
        <div style={{position:"relative", top:"-4rem", marginLeft:"69%"}}>
          <SearchBar/>
        </div>
        <TopDropDown/>
      </nav>
    </header>
  )
}

export default TopBar