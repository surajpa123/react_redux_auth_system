import React from "react"
import { useEffect,useState } from "react";
import axios from "axios";
export const Register = ()=>{

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("")

    const handelSubmit = ()=>{
        let data = {
            email,
            password
        }
        console.log(data)
        axios.post("https://loginauthapi.herokuapp.com/register", data ).then(function(res){
            console.log(res.data)
            // dispatch(change_email(res.data.Token))
            setToken(res.data.Token)
            
        })
    }

    return(
        <div>
        <h1>Register</h1>
    <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
   <input type="text"  placeholder="Enter pass" onChange={(e)=>{setPassword(e.target.value)}}/>
   <button onClick={handelSubmit}>Register</button>
        </div>
    )
}
