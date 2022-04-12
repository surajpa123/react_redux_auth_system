
import { useState } from "react"
import React from "react";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { change_email, change_password } from "../Redux/action";
import { store } from "../Redux/Store";
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { change_sucess } from "../Redux/action";


export const Login = ()=>{

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const [email,setEmail] = useState("");

    const [token,setToken] = useState(false)

    const [password,setPassword] = useState("")

    const useAuth = useSelector((store)=>
        store.isAuth
    )


    
    console.log("Auth",useAuth)

    // const navi = useNavigate()

    const handelSubmit = ()=>{
        let data = {
            email,
            password
        }
        console.log(data)
        // dispatch(change_email(email))
        dispatch(change_email(email))
        dispatch(change_password(password))

        axios.post("https://loginauthapi.herokuapp.com/login", data ).then(function(res){
            console.log(res.data)
            // dispatch(change_email(res.data.Token))
            setToken(true)
            console.log("tokem2",token)
          
            // <Navigate to ="/product"></Navigate>

        

        }).then(function(res){

     


            dispatch(change_sucess(token));

    


        })
        
        
    }
    
    React.useEffect(()=>{
        if(token == true){
            navigate("/product")
            
        }else{
            navigate("/login")
        }

    },[token])

    return(
        <div>

<h1>Login</h1>
   <input type="text" placeholder="Enter Email"  onChange={(e)=>{setEmail(e.target.value)}}/>

   <input type="text"  placeholder="Enter pass"  onChange={(e)=>{setPassword(e.target.value)}}/>

   <button onClick={handelSubmit}>Submit</button>


        </div>
    )
}