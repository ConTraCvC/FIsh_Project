import Link from "next/link";
import React from "react";

const TopDropDown = ({data1, data2, data3, data4, data5, data6}) => {

  const memo1 = data1 || data3 || data5
  const memo2 = data2 || data4 || data6

  const SX_Link = Object.values(memo1).map(item => {
    return(
      <>
        <Link href={{pathname: item.id}}>{Object.values(item.title)}</Link>
      </>
    )
  })

  const TN_Link = Object.values(memo2).map(item => {
    return(
      <>
        <Link href={{pathname: item.id}}>{Object.values(item.title)}</Link>
      </>
    )
  })

  return (
    <div className="dropmenu gradient__bg">
      <h2 style={{color:"white", position:"absolute", whiteSpace:"nowrap"}}>Sản Phẩm Và Dịch Vụ</h2>
      <div className="dropdown">
        <button style={{color:"white", borderTopLeftRadius:"3px", borderBottomLeftRadius:"3px"}} class="dropbtn button__gradient__bg">GIỐNG CÁ BIỂN SẢN XUẤT</button>
        <div class="dropdown-content">
          {SX_Link}
        </div>
      </div>

      <div className="dropdown">
        <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ BIỂN TỰ NHIÊN</button>
        <div class="dropdown-content">
          {TN_Link}
        </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ MÚ SẢN XUẤT</button>
      <div class="dropdown-content">
        <Link href="/abc">Cá Mú Lai Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Đen Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Nghệ Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Sao Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Chuột Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Cọp Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Mè Chất Lượng</Link>
        <Link href="/abc">Cá Mú Cọp Xám Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Nghệ Xanh Giống Chất Lượng</Link>
        <Link href="/abc">Cá Mú Lai Đen Giống Chất Lượng</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">TÔM, CUA GIỐNG</button>
      <div class="dropdown-content">
        <Link href="/abc">Tôm Hùm Bông Giống Chất Lượng</Link>
        <Link href="/abc">Tôm Hùm Xanh Giống Chất Lượng</Link>
        <Link href="/abc">Tôm Sú Giống Chất Lượng</Link>
        <Link href="/abc">Tôm Thẻ Giống Chất Lượng</Link>
        <Link href="/abc">Tôm Đất Giống Chất Lượng</Link>
        <Link href="/abc">Tôm Càng Xanh Giống Chất Lượng</Link>
        <Link href="/abc">Cua Xanh Giống Chất Lượng</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG NHUYỄN THỂ</button>
      <div class="dropdown-content">
        <Link href="/abc">Hầu Giống Chất Lượng</Link>
        <Link href="/abc">Tu Hài Giống Chất Lượng</Link>
        <Link href="/abc">Ốc Hương Giống Chất Lượng</Link>
        <Link href="/abc">Nghêu Bến Tre Giống Chất Lượng</Link>
        <Link href="/abc">Rong Nho Giống Chất Lượng</Link>
        <Link href="/abc">Rong Sụn Giống Chất Lượng</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">GIỐNG CÁ NƯỚC NGỌT</button>
      <div class="dropdown-content">
        <Link href="/abc">Cá Chình Bông Giống Chất Lượng</Link>
        <Link href="/abc">Giống Cá Kèo Chất Lượng</Link>
        <Link href="/abc">Nghêu Bến Tre Giống Chất Lượng</Link>
        <Link href="/abc">Rong Nho Giống Chất Lượng</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">KỸ THUẬT NUÔI</button>
      <div class="dropdown-content">
        <Link href="/abc">Đặc Điểm Sinh Học</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white"}} class="dropbtn button__gradient__bg">THƯ VIỆN</button>
      <div class="dropdown-content">
        <Link href="/abc">Hình Ảnh</Link>
        <Link href="/abc">Video</Link>
        <Link href="/abc">Tin Tức</Link>
        <Link href="/abc">Ẩm Thực</Link>
        <Link href="/abc">Giải Trí</Link>
      </div>
      </div>

      <div className="dropdown">
      <button style={{color:"white", borderTopRightRadius:"3px", borderBottomRightRadius:"3px"}} class="dropbtn button__gradient__bg">THÔNG TIN WEBSITE</button>
      <div class="dropdown-content">
        <Link href="/abc">Điều Kiện Giao Dịch Chung</Link>
        <Link href="/abc">Thông Tin Vận Chuyển</Link>
        <Link href="/abc">Chính Sách Bảo Mật</Link>
      </div>
      </div>
    </div>
  )
}

export default TopDropDown