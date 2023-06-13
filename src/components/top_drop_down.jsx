import Link from "next/link";
import React from "react";
import { Button } from "reactstrap";

const TopDropDown = () => {
  return (
    <div className="dropmenu gradient__bg">
      <h2 style={{color:"white", position:"absolute", whiteSpace:"nowrap"}}>Sản Phẩm Và Dịch Vụ</h2>
      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ BIỂN SẢN XUẤT</button>
      <div class="dropdown-content">
        <Link href={{pathname:"IC6iambKU0ji4eFUE4Ec"}}>Cá Bớp Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Mú Lai Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Chẽm Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Bè Vàng Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Bè Trắng Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Mú Đen Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Chim Vây Vàng Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Hồng Mỹ Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Đối Mục Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Tai Bồ Giống Chất Lượng</Link>
        <Link href={{pathname:"/abs"}}>Cá Gáy Lù Giống Chất Lượng</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ BIỂN TỰ NHIÊN</button>
      <div class="dropdown-content">
        <a href="/abc">Cá Dìa Giống Chất Lượng</a>
        <a href="/abc">Cá Hồng Bạc Giống Chất Lượng</a>
        <a href="/abc">Cá Măng Giống Chất Lượng</a>
        <a href="/abc">Cá Tráp Giống Chất Lượng</a>
        <a href="/abc">Cá Nâu Vàng Giống Chất Lượng</a>
        <a href="/abc">Cá Kình Trắng Giống Chất Lượng</a>
        <a href="/abc">Cá Ong Căng Giống Chất Lượng</a>
        <a href="/abc">Cá Cam Giống Chất Lượng</a>
        <a href="/abc">Cá Hồng Đỏ Giống Chất Lượng</a>
        <a href="/abc">Cá Thiên Sứ Giống Chất Lượng</a>
        <a href="/abc">Cá Sủ Đất Giống Chất Lượng</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ MÚ SẢN XUẤT</button>
      <div class="dropdown-content">
        <a href="/abc">Cá Mú Lai Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Đen Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Nghệ Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Sao Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Chuột Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Cọp Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Mè Chất Lượng</a>
        <a href="/abc">Cá Mú Cọp Xám Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Nghệ Xanh Giống Chất Lượng</a>
        <a href="/abc">Cá Mú Lai Đen Giống Chất Lượng</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">TÔM, CUA GIỐNG</button>
      <div class="dropdown-content">
        <a href="/abc">Tôm Hùm Bông Giống Chất Lượng</a>
        <a href="/abc">Tôm Hùm Xanh Giống Chất Lượng</a>
        <a href="/abc">Tôm Sú Giống Chất Lượng</a>
        <a href="/abc">Tôm Thẻ Giống Chất Lượng</a>
        <a href="/abc">Tôm Đất Giống Chất Lượng</a>
        <a href="/abc">Tôm Càng Xanh Giống Chất Lượng</a>
        <a href="/abc">Cua Xanh Giống Chất Lượng</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG NHUYỄN THỂ</button>
      <div class="dropdown-content">
        <a href="/abc">Hầu Giống Chất Lượng</a>
        <a href="/abc">Tu Hài Giống Chất Lượng</a>
        <a href="/abc">Ốc Hương Giống Chất Lượng</a>
        <a href="/abc">Nghêu Bến Tre Giống Chất Lượng</a>
        <a href="/abc">Rong Nho Giống Chất Lượng</a>
        <a href="/abc">Rong Sụn Giống Chất Lượng</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ NƯỚC NGỌT</button>
      <div class="dropdown-content">
        <a href="/abc">Cá Chình Bông Giống Chất Lượng</a>
        <a href="/abc">Giống Cá Kèo Chất Lượng</a>
        <a href="/abc">Nghêu Bến Tre Giống Chất Lượng</a>
        <a href="/abc">Rong Nho Giống Chất Lượng</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">KỸ THUẬT NUÔI</button>
      <div class="dropdown-content">
        <a href="/abc">Đặc Điểm Sinh Học</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">THƯ VIỆN</button>
      <div class="dropdown-content">
        <a href="/abc">Hình Ảnh</a>
        <a href="/abc">Video</a>
        <a href="/abc">Tin Tức</a>
        <a href="/abc">Ẩm Thực</a>
        <a href="/abc">Giải Trí</a>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white", borderTopRightRadius:"3px", borderBottomRightRadius:"3px"}} class="dropbtn button__gradient__bg">THÔNG TIN WEBSITE</button>
      <div class="dropdown-content">
        <a href="/abc">Điều Kiện Giao Dịch Chung</a>
        <a href="/abc">Thông Tin Vận Chuyển</a>
        <a href="/abc">Chính Sách Bảo Mật</a>
      </div>
      </div>
    </div>
  )
}

export default TopDropDown