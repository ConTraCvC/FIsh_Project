import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"

const NewAndTechnic = ({data1, data2, data3}) => {

  // const dbRef = ref(database);

  // get(child(dbRef, `fishs`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  // set(child(dbRef, `fishs/1`), {
  //   id: 1,
  //   name: "caMu",
  //   image: cadiasotdua
  // });

  const newListMap = Object.values(data1).slice(0, 6).map(data => {
    return <div style={{display:"flex", flexDirection:"column"}}>
      <Link href="/item-page" style={{color:"white"}}>{Object.values(data.title)}</Link>
      <a style={{color:"darkgrey", fontSize:"12px", padding:"5px"}} >{Object.values(data.date)}</a>
      <hr style={{borderTop:"0.1px"}}></hr><li style={{opacity:"0"}}></li>
    </div>
  })
  const imageMap = Object.values(data1).slice(0, 1).map(data => {
    return(
      <Link href={"/"}>
        <img src={data.image} width="280" height="220" style={{position:"relative"}}></img>
      </Link>
  )})

  const TechNickMap = Object.values(data2).slice(0, 5).map(tech => {
    return (
      <div className="new__feed_subContent">
        <Link href={"/"}>
          <img src={tech.image} style={{width:"100px", height:"70px"}}></img>
        </Link><span style={{opacity:"0"}}>"""</span>
        <a href="/">{Object.values(tech.title)}</a>
      </div>
    )
  })

  const FoodMap = Object.values(data3).slice(0, 5).map(food => {
    return(
        <div className="new__feed_subContent_2">
          <Link href={"/"}>
            <img src={food.image} style={{width:"100px", height:"70px"}}></img>
          </Link><span style={{opacity:"0"}}>"""</span>
          <a href="/">{Object.values(food.title)}</a>
      </div>
    )
  })

  return (
    <div className="new__feed">
      <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px"}}>TIN NỔI BẬT</a>
      <div className="new__feed__item">
          {imageMap}
        <div className="new__feed__content">
          {newListMap}
          <a href="/" style={{color:"skyblue", maxWidth:"200px"}}>Các nội dung khác &rarr;</a>
        </div>
        <div className="new__feed__content2">
          <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px", position:"relative", top:"-3.2rem", whiteSpace:"nowrap"}}>KĨ THUẬT NUÔI CÁ</a>
          {TechNickMap}
        </div>
        <div className="new__feed__content3">
          <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px", position:"relative", top:"-3.2rem", whiteSpace:"nowrap"}}>ẨM THỰC</a>
          {FoodMap}
        </div>
      </div>
    </div>
  )
}

export default NewAndTechnic