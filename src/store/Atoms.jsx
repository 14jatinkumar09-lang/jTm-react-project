import {atom,selector} from 'recoil' ;
import axios from 'axios' ;
import {url} from '../url.js'



export const currentBalance = atom({
    key:"balanceAtom" , 
    default : selector({
        key:"balanceSelector" ,
        get: async ()=>{
            const res = await axios.get(`${url}/findBalance`, {
                headers : {
                    "Content-Type" : "application/json" ,
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                }
            } )
            return res.data.balance ;
            
        }
    })
})

