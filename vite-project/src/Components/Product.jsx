import React, { useState } from 'react'


import { store } from '../Redux/Store'

import { useNavigate } from 'react-router-dom'


import { useSelector , useDispatch} from 'react-redux'
import axios from 'axios'


export default function Product() {




    const navi = useNavigate()

 const token1 = useSelector((store)=>
     store.isAuth

 )
 console.log("token1",token1)

React.useEffect(()=>{
    if(token1 === false){
        navi("/login")
    }else{
        navi("/product")
    }
},[token1])


const [apid,setapid] = useState([]);





React.useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(function(res){
    setapid(res.data)
   
})
},[])


// const getData = ()=>{
//     axios.get("https://fakestoreapi.com/products").then(function(res){
//         setapid(res.data)
       
//     })
// }



console.log(apid)

  return (

    <>
    <div>Welcome to product page guys</div>

{
apid.map((e)=>(
   <div>
    <h5>{e.title}</h5>
    <img src={e.image} alt="" width="100"/>
    </div>
))

}









    </>

  )
}
