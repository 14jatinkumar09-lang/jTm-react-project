import {InputBox } from '../components/InputBox.jsx'
import {Button } from '../components/Button.jsx'
import axios from 'axios' 
import {useState} from 'react'
import {url} from '../url.js'
export function UpdateInfo() {
    const [firstName,setFirstName] = useState("") ;
    const [lastName,setLastName] = useState("") ;
    const [password,setPassword] = useState("" ) ;
    const [msg,setMsg] = useState("") ;
    return <div className="w-60">
        <InputBox onChange={(e)=>{
            setFirstName(e.target.value) ;
        }} type="text" label={"firstName"} placeholder={"John"}></InputBox>
        <InputBox onChange={(e)=>{
            setLastName(e.target.value) ;
        }} type="text" label={"LastName"} placeholder={"Doe"}></InputBox>
        <InputBox onChange={(e)=>{
            setPassword(e.target.value) ;
        }} type="text" label={"password"} placeholder={"abcD1234"}></InputBox>
        <Button onClick={ async()=>{
            if(firstName==="" || lastName==="" || password===""){
                setMsg("All fields are required") ;
                alert("All fields are required") ;
                return ;
            }
            let res = await axios.put(`${url}/update/frofile` , {
                firstName : firstName ,
                lastName: lastName ,
                password : password
            } , {
                headers : {
                    "Authorization" :`Bearer ${localStorage.getItem("token")}` ,
                    "Content-Type" : "application/json"
                }
            })
            setMsg(res.data.msg) ;
        }} label={"Update Profile"}></Button>

        <p>{msg}</p>


    </div>
}