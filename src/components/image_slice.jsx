import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import logo_vi from "../assets/logo_vi.png"
import { Table } from "reactstrap";
import Link from "next/link";

const ImageSlice = ({data1, data2}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  console.log(data1);

  return (
    <div className="slice__container">
      <h3 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ BIỂN SẢN XUẤT
      </h3>
      <div style={{maxWidth:"95%", margin:"auto"}}>
        <Slider {...settings}>
          <div>
            <Table>
              <thead>
                <tr style={{display: "flex", flexDirection:"column", maxWidth:"200px"}}>
                  <th><Image src={logo_vi}/></th>
                  <td><Link href="/" style={{color:"lightpink"}}>Cá Mú Đen Giống Chất Lượng</Link></td>
                  <td><h4 style={{color:"white", padding:"10px 0 0 0"}}>Hiệu quả mô hình nuôi giống cá mú đen. 
                  Giống cá mú đen chất lượng. Phân loại và cách nhìn nhận giống cá mú đen chất lượng. TRƯỜNG PHÁT cung cấp giống cá mú.</h4></td>
                </tr>
              </thead>
            </Table>    
          </div>
          <div>
            <Table>
              <thead>
                <tr style={{display: "flex", flexDirection:"column", maxWidth:"200px"}}>
                  <th><Image src={logo_vi}/></th>
                  <td><Link href="/" style={{color:"lightpink"}}>Cá Mú Đen Giống Chất Lượng</Link></td>
                  <td><h4 style={{color:"white", padding:"10px 0 0 0"}}>Hiệu quả mô hình nuôi giống cá mú đen. 
                  Giống cá mú đen chất lượng. Phân loại và cách nhìn nhận giống cá mú đen chất lượng. TRƯỜNG PHÁT cung cấp giống cá mú.</h4></td>
                </tr>
              </thead>
            </Table>    
          </div>
          <div>
            <Table>
              <thead>
                <tr style={{display: "flex", flexDirection:"column", maxWidth:"200px"}}>
                  <th><Image src={logo_vi}/></th>
                  <td><Link href="/" style={{color:"lightpink"}}>Cá Mú Đen Giống Chất Lượng</Link></td>
                  <td><h4 style={{color:"white", padding:"10px 0 0 0"}}>Hiệu quả mô hình nuôi giống cá mú đen. 
                  Giống cá mú đen chất lượng. Phân loại và cách nhìn nhận giống cá mú đen chất lượng. TRƯỜNG PHÁT cung cấp giống cá mú.</h4></td>
                </tr>
              </thead>
            </Table>    
          </div>
          <div>
            <Table>
              <thead>
                <tr style={{display: "flex", flexDirection:"column", maxWidth:"200px"}}>
                  <th><Image src={logo_vi}/></th>
                  <td><Link href="/" style={{color:"lightpink"}}>Cá Mú Đen Giống Chất Lượng</Link></td>
                  <td><h4 style={{color:"white", padding:"10px 0 0 0"}}>Hiệu quả mô hình nuôi giống cá mú đen. 
                  Giống cá mú đen chất lượng. Phân loại và cách nhìn nhận giống cá mú đen chất lượng. TRƯỜNG PHÁT cung cấp giống cá mú.</h4></td>
                </tr>
              </thead>
            </Table>    
          </div>
          <div>
            <Table>
              <thead>
                <tr style={{display: "flex", flexDirection:"column", maxWidth:"200px"}}>
                  <th><Image src={logo_vi}/></th>
                  <td><Link href="/" style={{color:"lightpink"}}>Cá Mú Đen Giống Chất Lượng</Link></td>
                  <td><h4 style={{color:"white", padding:"10px 0 0 0"}}>Hiệu quả mô hình nuôi giống cá mú đen. 
                  Giống cá mú đen chất lượng. Phân loại và cách nhìn nhận giống cá mú đen chất lượng. TRƯỜNG PHÁT cung cấp giống cá mú.</h4></td>
                </tr>
              </thead>
            </Table>    
          </div>
        </Slider>
      </div>
      <h3 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ BIỂN THIÊN NHIÊN
      </h3>
      <div style={{maxWidth:"95%", margin:"auto"}}>
        <Slider {...settings}>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
        </Slider>
      </div>
      <h3 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ MÚ SẢN XUẤT
      </h3>
      <div style={{maxWidth:"95%", margin:"auto"}}>
        <Slider {...settings}>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
          <div>
            <Image src={logo_vi}/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default ImageSlice