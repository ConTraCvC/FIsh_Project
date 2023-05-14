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

  const fish_SX_map = Object.values(data1).map(data => {
    return (
      <div style={{maxWidth:"95%"}}>
        <Table>
          <thead>
            <tr style={{display: "flex", flexDirection:"column",
              maxWidth:"95%", marginLeft:"7%", marginTop:"7%"}}>
              <th><Link href={{
                pathname: data.id
              }}><img width="95%" height="auto" src={data.imageBia}></img></Link></th>
              <td><Link href={data.id} style={{color:"lightpink"}}>{Object.values(data.title)}</Link></td>
              <td><h4 style={{color:"white", padding:"10px 0 0 0", display: "-webkit-box",
                WebkitBoxOrient: "vertical", WebkitLineClamp: 5,
                overflow: "hidden"}}>{Object.values(data.body)}</h4></td>
            </tr>
          </thead>
        </Table>
      </div>
    )
  })

  const fish_TN_map = Object.values(data2).map(data => {
    return (
      <div style={{maxWidth:"95%"}}>
        <Table>
          <thead>
            <tr style={{display: "flex", flexDirection:"column",
              maxWidth:"90%", marginLeft:"7%", marginTop:"7%"}}>
              <th><Link href={{
                pathname: data.id
              }}><img width="100%" height="auto" src={data.imageBia}></img></Link></th>
              <td><Link href={{
                pathname: data.id
              }} style={{color:"lightpink"}}>{Object.values(data.title)}</Link></td>
              <td><h4 style={{color:"white", padding:"10px 0 0 0", display: "-webkit-box",
                WebkitBoxOrient: "vertical", WebkitLineClamp: 5,
                overflow: "hidden"}}>{Object.values(data.body)}</h4></td>
            </tr>
          </thead>
        </Table>
      </div>
    )
  })

  return (
    <div className="slice__container">
      <h3 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ BIỂN SẢN XUẤT
      </h3>
        <Slider {...settings}>
          {fish_SX_map}
        </Slider>
      <h3 style={{color:"lightgreen", marginTop:"4%"}}>
         {" "}
         GIỐNG CÁ BIỂN THIÊN NHIÊN
      </h3>
        <Slider {...settings}>
          {fish_TN_map}
        </Slider>
      <h3 style={{color:"lightgreen", marginTop:"4%"}}>
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