import Link from "next/link"

// import { child, get, getDatabase, onValue, ref, set } from "firebase/database"
import { db } from "@component/firebase/firebase"
import { collection, getDocs } from "firebase/firestore/lite"

const newCollection = collection(db, "news")
const techCollection = collection(db, "techniques")
const foodCollection = collection(db, "foods")

export const getServerSideProps = async () => {
  const docSnap = await getDocs(newCollection);
  const new_props = docSnap.docs.map((doc) => ({ ...doc.data()}))
  const techSnap = await getDocs(techCollection)
  const tech_props = techSnap.docs.map((doc) => ({ ...doc.data()}))
  const foodSnap = await getDocs(foodCollection)
  const food_props = foodSnap.docs.map((doc) => ({ ...doc.data()}))
  return {
    props: { new_props, tech_props, food_props } };
};

const NewAndTechnic = ({new_props, tech_props, food_props}) => {

  // useEffect( async() => {
  //   const docSnap = await getDocs(newCollection);
  //   const new_props = docSnap.docs.map((doc) => ({ ...doc.data()}))
  //   console.warn(new_props)
  //   return new_props
  // }, [])

  console.log(new_props)

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

  // const newListMap = Object.values(new_props).slice(0, 6).map(data => {
  //   return <div style={{display:"flex", flexDirection:"column", width:"250px"}}>
  //     <a href="/item-page" style={{color:"white"}}>{Object.values(data.title)}</a>
  //     <a style={{color:"darkgray", fontSize:"12px", padding:"5px"}} >{Object.values(data.date)}</a>
  //     <hr style={{borderTop:"0.1px"}}></hr><li style={{opacity:"0"}}></li>
  //   </div>
  // })
  // const imageMap = data.slice(0, 1).map(data => {
  //   return(
  //     <Link href={"/"}>
  //       <img src={data.image} width="280" height="220" style={{position:"relative"}}></img>
  //     </Link>
  // )})

  // const TechNickMap = Object.values(tech_props).slice(0, 5).map(tech => {
  //   return (
  //     <div className="new__feed_subContent">
  //       <Link href={"/"}>
  //         <img src={tech.image} style={{width:"100px", height:"70px"}}></img>
  //       </Link><span style={{opacity:"0"}}>"""</span>
  //       <a href="/">{Object.values(tech.title)}</a>
  //     </div>
  //   )
  // })

  // const FoodMap = Object.values(food_props).slice(0, 5).map(food => {
  //   return(
  //       <div className="new__feed_subContent_2">
  //         <Link href={"/"}>
  //           <img src={food.image} style={{width:"100px", height:"70px"}}></img>
  //         </Link><span style={{opacity:"0"}}>"""</span>
  //         <a href="/">{Object.values(food.title)}</a>
  //     </div>
  //   )
  // })

  return (
    <div className="new__feed">
      {/* <a style={{color:"lightgreen", fontWeight:"bold" ,fontSize:"18px"}}>TIN NỔI BẬT</a>
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
      </div> */}
    </div>
  )
}

export default NewAndTechnic