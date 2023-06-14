import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import logo_vi from "../assets/logo_vi.png"
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
        <table>
          <thead>
            <tr style={{display: "flex", flexDirection:"column",
              maxWidth:"90%", marginLeft:"7%", marginTop:"7%"}}>
              <th><Link href={{
                pathname: data.id
              }}><img width="100%" height="auto" src={data.imageBia}></img></Link></th>
              <td><Link href={data.id} style={{color:"lightpink"}}>{Object.values(data.title)}</Link></td>
              <td><h6 style={{color:"white", padding:"10px 0 0 0", display: "-webkit-box",
                WebkitBoxOrient: "vertical", WebkitLineClamp: 5,
                overflow: "hidden"}}>{Object.values(data.body)}</h6></td>
            </tr>
          </thead>
        </table>
      </div>
    )
  })

  const fish_TN_map = Object.values(data2).map(data => {
    return (
      <div style={{maxWidth:"95%"}}>
        <table>
          <thead>
            <tr style={{display: "flex", flexDirection:"column",
              maxWidth:"90%", marginLeft:"7%", marginTop:"7%"}}>
              <th><Link href={{
                pathname: data.id
              }}><img width="100%" height="auto" src={data.imageBia}></img></Link></th>
              <td><Link href={{
                pathname: data.id
              }} style={{color:"lightpink"}}>{Object.values(data.title)}</Link></td>
              <td><h6 style={{color:"white", padding:"10px 0 0 0", display: "-webkit-box",
                WebkitBoxOrient: "vertical", WebkitLineClamp: 5,
                overflow: "hidden"}}>{Object.values(data.body)}</h6></td>
            </tr>
          </thead>
        </table>
      </div>
    )
  })

  return (
    <div className="slice__container">
      <h4 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ BIỂN SẢN XUẤT
      </h4>
        <Slider {...settings}>
          {fish_SX_map}
        </Slider>
      <h4 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ BIỂN THIÊN NHIÊN
      </h4>
        <Slider {...settings}>
          {fish_TN_map}
        </Slider>
      <h4 style={{color:"lightgreen"}}>
         {" "}
         GIỐNG CÁ MÚ SẢN XUẤT
      </h4>
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