import {UserCatalog} from '../components/AppBar.jsx'
import {useState} from 'react'
import axios from 'axios'
import {url} from '../url.js'

export function SendMoney() {
    const [amount,setAmount] = useState() ;
    const [msg,setMsg] = useState(" ") ;
    return <div className="border-s-black shadow-gray-950 p-3 ">
        <div className="mx-4 font-bold text-2xl" >Sending Money </div>
        <div className="my-4">        
        <UserCatalog firstName={localStorage.getItem("firstName")} lastName={localStorage.getItem("lastName")} to={localStorage.getItem("sendingMoneyTo")} ></UserCatalog>
</div>
       Rs <input id="input" onChange={(e)=>{
        setAmount(e.target.value) ;
       }} className="border-s-green-600 shadow-sm rounded align-middle text-center mx-2" type="number" placeholder="Enter Amount"></input>
       <button className="font-medium" onClick={async()=>{
        let res = await axios.post(`${url}/sendMoney`, {
            userId : localStorage.getItem("sendingMoneyTo") ,
            amount : Number(amount)
        } , {
            headers : {
                "Content-Type" : "application/json" ,
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res.data)
         setMsg(res.data.msg) ;
         document.querySelector("#input").value = " " ;

       }}>Send  </button>
       <div className="my-7 mx-7">{msg}</div>
    </div>
}